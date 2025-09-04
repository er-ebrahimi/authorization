import axios from "axios";
import { RandomUserResponse, LoginResponse } from "@/types/api-types";
import { apis } from "../apis";

// Create axios instance for external APIs
const externalApi = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Login API - Fetches user data from randomuser.me
 * @param phone - User's phone number
 * @returns Promise<LoginResponse>
 */
export const loginApi = async (phone: string): Promise<LoginResponse> => {
  try {
    // Fetch user data from randomuser.me
    const response = await externalApi.get<RandomUserResponse>(apis.login);

    const user = response.data.results[0];

    // Generate a mock token (in real app, this would come from your backend)
    const token = `token_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    // Transform the data to match our User interface
    const transformedUser = {
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      picture: user.picture.large,
    };

    return {
      user: transformedUser,
      token,
    };
  } catch (error) {
    console.error("Login API error:", error);
    throw new Error("Failed to login. Please try again.");
  }
};
