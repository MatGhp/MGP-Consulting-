export type LegalRoute = "impressum" | "datenschutz";

const LEGAL_ROUTES: Record<string, LegalRoute> = {
  "/impressum": "impressum",
  "/datenschutz": "datenschutz"
};

const normalizePath = (value: string): string => {
  const trimmed = value.trim().toLowerCase();
  if (!trimmed.startsWith("/")) {
    return "";
  }
  return trimmed.length > 1 ? trimmed.replace(/\/+$/, "") : trimmed;
};

/** Maps a pathname to a known legal route, or null for the home page / unknown paths. */
export const resolveLegalRoute = (pathname: string): LegalRoute | null =>
  LEGAL_ROUTES[normalizePath(pathname)] ?? null;

/**
 * Resolves the route for the current location.
 *
 * GitHub Pages serves `public/404.html` for unknown paths, which redirects to
 * `/?page=<original path>`. Only whitelisted paths are ever written back to the
 * address bar; anything else (e.g. `//evil.example`) is ignored.
 */
export const resolveRoute = (
  search: string,
  pathname: string
): { route: LegalRoute | null; canonicalPath: string | null } => {
  const pageParam = new URLSearchParams(search).get("page");

  if (pageParam !== null) {
    const route = resolveLegalRoute(pageParam);
    return { route, canonicalPath: route ? `/${route}` : "/" };
  }

  return { route: resolveLegalRoute(pathname), canonicalPath: null };
};
