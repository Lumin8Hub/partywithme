/**
 * Resolve a path to a static asset in `public/` against the app's base URL.
 *
 * Vite rewrites asset references in `index.html` and module imports, but plain
 * string paths used at runtime (e.g. `<img src="/images/foo.jpg">`) are not
 * touched. On a project page like https://user.github.io/partywithme/ those
 * root-absolute paths would 404, so prefix them with `import.meta.env.BASE_URL`
 * ("/" locally, "/partywithme/" on Pages).
 */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
