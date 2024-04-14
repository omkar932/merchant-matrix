import base from "./base";

export interface ITheme {
  [key: string]: string;
}

export interface IThemes {
  [key: string]: ITheme;
}

export interface IMappedTheme {
  [key: string]: string | null;
}

export const mapTheme: (variables: ITheme) => IMappedTheme = (
  variables: ITheme
) => {
  return {
    "--color-primary": variables.primary || "",
    "--color-primary-light": variables.primaryLight || "",
    "--color-secondary": variables.secondary || "",
    "--color-secondary-light": variables.secondaryLight || "",
    "--color-svgPrimary": variables.svgPrimary || "",
    "--color-positive": variables.positive || "",
    "--color-negative": variables.negative || "",
    "--color-text-primary": variables.textPrimary || "",
    "--color-text-hover": variables.textHover || "",
    "--color-label-text-primary": variables.labelTextPrimary || "",
    "--background-primary": variables.backgroundPrimary || "",
    "--background-sec": variables.backgroundSecondary || "",
    "--background-sec-light": variables.backgroundSecondaryLight || "",
    "--button-primary": variables.buttonPrimary || "",
    "--button-text-primary": variables.buttonTextPrimary || "",
    "--border-primary": variables.borderPrimary || "",
    "--background-disable": variables.backgroundDisable || "",
    "--button-secondary": variables.buttonSecondary || "",
    "--button-text-secondary": variables.buttonTextSecondary || "",
  };
};

export const extend: (extending: ITheme, newTheme: ITheme) => ITheme = (
  extending: ITheme,
  newTheme: ITheme
): ITheme => {
  return { ...extending, ...newTheme };
};

/**
 * Helper function to set a new theme
 *
 * @param {string} theme The name of the theme to be set
 *
 * @return {void}
 */
export const applyTheme = (): void => {
  const themeObject: IMappedTheme = mapTheme(base);
  if (!themeObject) return;
  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    console.log(themeObject, property);
    if (property === "name") {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};
