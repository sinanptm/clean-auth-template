import { Tokens, UserRole } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS class names using `clsx` and `tailwind-merge`.
 * @param inputs - An array of class names or conditional class values.
 * @returns A merged class string with conflict resolution.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Retrieves a value from localStorage for a given key.
 * @param key - The key of the item to retrieve.
 * @returns The stored value as a string, or null if unavailable.
 */
export const getItemLocalStorage = (key: string) => {
  if (typeof localStorage === "undefined") {
    return null;
  }
  return localStorage.getItem(key);
};

/**
 * Stores a key-value pair in localStorage.
 * @param key - The key under which the value will be stored.
 * @param value - The value to store.
 */
export const setItemLocalStorage = (key: string, value: string) => {
  if (typeof localStorage === "undefined") {
    return null;
  }
  localStorage.setItem(key, value);
};

/**
 * Handles an error by displaying a toast message.
 * @param error - The error object to handle.
 */
export const onError = (error: Error) => {
  const message = error.message || "Unknown Error Occurred";
  toast.error(message);
};

/**
 * Returns the appropriate token key based on the user's role.
 * @param role - The role of the user (Admin or User).
 * @returns The token key string corresponding to the role.
 */
export const getTokenKey = (role: UserRole) => (role === UserRole.Admin ? Tokens.Admin : Tokens.User);

/**
 * @param role - The role of the user (UserRole.Admin or UserRole.User) whose authentication data will be cleared.
 * @param redirect - Optional object containing a reason for redirection. If provided, the reason is stored in localStorage and the user is redirected to the appropriate auth page.
 * @param redirect.reason - The reason for the redirection, which will be displayed as a popup on the auth page.
 */
export const clearAuthData = (role: UserRole, redirect?: { reason: string }) => {
  if (role === UserRole.Admin) {
    localStorage.removeItem(Tokens.Admin);
    // If redirect is specified with a reason, store reason and redirect to admin auth page
    if (redirect) {
      localStorage.setItem("auth_redirect_reason", redirect.reason);
      window.location.href = "/admin/auth";
    }
  } else {
    localStorage.removeItem(Tokens.User);
    localStorage.removeItem("user");
    localStorage.removeItem("mail_sended_email");
    if (redirect) {
      localStorage.setItem("auth_redirect_reason", redirect.reason);
      window.location.href = "/auth";
    }
  }
};
