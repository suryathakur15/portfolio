import { SOCIAL_COLORS } from "../constants";

/**
 * Returns a random color from the social palette.
 * If alpha is provided, returns an rgba string, otherwise returns the hex code.
 */
export const getRandomSocialColor = (alpha?: number) => {
  const hex = SOCIAL_COLORS[Math.floor(Math.random() * SOCIAL_COLORS.length)];

  if (alpha === undefined) return hex;

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
