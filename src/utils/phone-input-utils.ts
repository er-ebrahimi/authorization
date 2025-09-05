import { convertToEnglishNumbers } from "./number-utils";

/**
 * Phone input utility functions for handling Persian and English number input
 * Follows Single Responsibility Principle - handles only phone input logic
 */

/**
 * Allowed pattern for phone input: Persian numbers, English numbers, plus, and spaces
 */
const ALLOWED_PATTERN = /^[\u06F0-\u06F90-9+\s]*$/;

/**
 * Allowed keys for phone input (navigation and control keys)
 */
const ALLOWED_KEYS = [
  "Backspace",
  "Delete",
  "Tab",
  "Escape",
  "Enter",
  "Home",
  "End",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
] as const;

/**
 * Allowed keyboard shortcuts for phone input
 */
const ALLOWED_SHORTCUTS = ["a", "c", "v", "x", "z"] as const;

/**
 * Validates if the input value contains only allowed characters
 * @param value - The input value to validate
 * @returns true if the value contains only allowed characters
 */
export const isValidPhoneInput = (value: string): boolean => {
  return ALLOWED_PATTERN.test(value);
};

/**
 * Validates if a single key press is allowed
 * @param key - The key that was pressed
 * @returns true if the key is allowed
 */
export const isValidKey = (key: string): boolean => {
  return ALLOWED_PATTERN.test(key);
};

/**
 * Validates if a key is an allowed navigation or control key
 * @param key - The key that was pressed
 * @returns true if the key is an allowed control key
 */
export const isAllowedControlKey = (key: string): boolean => {
  return ALLOWED_KEYS.includes(key as any);
};

/**
 * Validates if a keyboard shortcut is allowed
 * @param key - The key that was pressed
 * @param ctrlKey - Whether the Ctrl key is pressed
 * @returns true if the shortcut is allowed
 */
export const isAllowedShortcut = (key: string, ctrlKey: boolean): boolean => {
  return ctrlKey && ALLOWED_SHORTCUTS.includes(key.toLowerCase() as any);
};

/**
 * Converts Persian numbers to English numbers in the input value
 * @param value - The input value to convert
 * @returns The converted value with English numbers
 */
export const convertPhoneInput = (value: string): string => {
  return convertToEnglishNumbers(value);
};

/**
 * Creates a phone input change handler
 * @param setDisplayValue - Function to set the display value
 * @param setValue - Function to set the form value
 * @returns The change handler function
 */
export const createPhoneInputChangeHandler = (
  setDisplayValue: (value: string) => void,
  setValue: (name: "phone", value: string) => void
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (!isValidPhoneInput(inputValue)) {
      return;
    }

    const convertedValue = convertPhoneInput(inputValue);
    setDisplayValue(convertedValue);
    setValue("phone", convertedValue);
  };
};

/**
 * Creates a phone input key down handler
 * @returns The key down handler function
 */
export const createPhoneInputKeyDownHandler = () => {
  return (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isAllowedControlKey(e.key)) {
      return;
    }
    if (isAllowedShortcut(e.key, e.ctrlKey)) {
      return;
    }
    if (!isValidKey(e.key)) {
      e.preventDefault();
    }
  };
};
