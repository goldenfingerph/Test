const AUTH_KEY = "etppc_admin_session";

/** Demo credentials — replace with Supabase Auth in production */
const DEMO_EMAIL = "admin@emiratestechnology.ae";
const DEMO_PASSWORD = "EmiratesTEch2024";

export interface AdminSession {
  email: string;
  loggedInAt: string;
}

export function loginAdmin(email: string, password: string): boolean {
  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    const session: AdminSession = {
      email,
      loggedInAt: new Date().toISOString(),
    };
    if (typeof window !== "undefined") {
      sessionStorage.setItem(AUTH_KEY, JSON.stringify(session));
    }
    return true;
  }
  return false;
}

export function logoutAdmin(): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(AUTH_KEY);
  }
}

export function getAdminSession(): AdminSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AdminSession;
  } catch {
    return null;
  }
}

export function isAdminAuthenticated(): boolean {
  return getAdminSession() !== null;
}
