/**
 * Validate phone number format
 * @param phone - Phone number to validate
 * @returns boolean
 */
export const validatePhoneNumber = (phone: string): boolean => {
  const cleanValue = phone.replace(/\D/g, "");

  return (
    (cleanValue.length === 11 && cleanValue.startsWith("09")) ||
    (cleanValue.length === 13 && cleanValue.startsWith("989")) ||
    (cleanValue.length === 14 && cleanValue.startsWith("00989"))
  );
};
