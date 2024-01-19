// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Desarrollando con Talavera";
export const SITE_DESCRIPTION =
  "Bienvenido a mi blog, donde podrás encontrar formas de arreglar los problemas que se te presenten en el desarrollo de software.";
export const TWITTER_HANDLE = "@daavid_tal";
export const MY_NAME = "David Talavera";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
