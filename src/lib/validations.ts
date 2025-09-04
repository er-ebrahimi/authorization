import { z } from "zod";
import { convertToEnglishNumbers } from "./number-utils";

// Phone number validation schema
export const phoneSchema = z
  .string()
  .min(1, "Phone number is required")
  .transform((value) => convertToEnglishNumbers(value))
  .refine(
    (value) => {
      // Remove all non-digit characters for validation
      const cleanValue = value.replace(/\D/g, "");

      // Check for valid formats:
      // 09xxxxxxxxx (11 digits starting with 09)
      // +989xxxxxxxxx (13 digits starting with +989)
      // 00989xxxxxxxxx (14 digits starting with 00989)

      if (cleanValue.length === 11 && cleanValue.startsWith("09")) {
        return true;
      }

      if (cleanValue.length === 13 && cleanValue.startsWith("989")) {
        return true;
      }

      if (cleanValue.length === 14 && cleanValue.startsWith("00989")) {
        return true;
      }

      return false;
    },
    {
      message:
        "Please enter a valid phone number (09xxxxxxxxx, +989xxxxxxxxx, or 00989xxxxxxxxx). Persian numbers are accepted.",
    }
  );

// Login form schema
export const loginSchema = z.object({
  phone: phoneSchema,
});

export type LoginFormData = z.infer<typeof loginSchema>;
