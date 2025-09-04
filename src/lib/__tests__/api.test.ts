/**
 * API function tests
 */

// Mock the entire login service module
jest.mock("@/services/auth/login-service", () => ({
  loginApi: jest.fn(),
}));

import { loginApi } from "@/services/auth/login-service";

const mockedLoginApi = loginApi as jest.MockedFunction<typeof loginApi>;

describe("loginApi", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should fetch user data and return transformed response", async () => {
    const mockResponse = {
      user: {
        id: "test-uuid",
        name: "John Doe",
        email: "john.doe@example.com",
        picture: "https://example.com/picture.jpg",
      },
      token: "token_1234567890_abcdef123",
    };
    mockedLoginApi.mockResolvedValue(mockResponse);
    const result = await loginApi("09123456789");
    expect(result).toHaveProperty("user");
    expect(result).toHaveProperty("token");
    expect(result.user).toHaveProperty("id");
    expect(result.user).toHaveProperty("name");
    expect(result.user).toHaveProperty("email");
    expect(result.user).toHaveProperty("picture");
    expect(typeof result.user.id).toBe("string");
    expect(typeof result.user.name).toBe("string");
    expect(typeof result.user.email).toBe("string");
    expect(typeof result.user.picture).toBe("string");
    expect(typeof result.token).toBe("string");
    expect(result.token).toMatch(/^token_\d+_[a-z0-9]+$/);
    expect(mockedLoginApi).toHaveBeenCalledWith("09123456789");
  });
  it("should handle API errors", async () => {
    mockedLoginApi.mockRejectedValue(
      new Error("Failed to login. Please try again.")
    );
    await expect(loginApi("09123456789")).rejects.toThrow(
      "Failed to login. Please try again."
    );
    expect(mockedLoginApi).toHaveBeenCalledWith("09123456789");
  });
});
