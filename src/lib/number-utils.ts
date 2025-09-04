/**
 * Utility functions for number conversion and formatting
 */

/**
 * Converts Persian and Arabic numerals to English numerals
 * @param value - String containing Persian/Arabic numbers
 * @returns String with English numbers
 */
export const convertToEnglishNumbers = (value: string): string => {
  const persianToEnglish: { [key: string]: string } = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
  };

  return value.replace(/[۰-۹٠-٩]/g, (char) => persianToEnglish[char] || char);
};

/**
 * Converts English numerals to Persian numerals
 * @param value - String containing English numbers
 * @returns String with Persian numbers
 */
export const convertToPersianNumbers = (value: string): string => {
  const englishToPersian: { [key: string]: string } = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  return value.replace(/[0-9]/g, (char) => englishToPersian[char] || char);
};
