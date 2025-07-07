import type { SignUpData, SignInData, AuthResponse } from "../types/User";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5173/api";

export const authService = {
  async signUp(userData: SignUpData): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...userData,
          authProvider: "custom",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return {
          success: false,
          message: errorData.message || "Signup failed",
        };
      }

      const data = await response.json();

      // Store token if signup successful
      if (data.success && data.token) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return {
          success: false,
          message: error.message,
        };
      }
      return {
        success: false,
        message: "Network error. Please try again.",
      };
    }
  },

  async signIn(credentials: SignInData): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return {
          success: false,
          message: errorData.message || "Login failed",
        };
      }

      const data = await response.json();

      // Store token if login successful
      if (data.success && data.token) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return {
          success: false,
          message: error.message,
        };
      }
      return {
        success: false,
        message: "Network error. Please try again.",
      };
    }
  },

  // Get current user from localStorage
  getCurrentUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  // Get auth token
  getToken() {
    return localStorage.getItem("authToken");
  },

  // Logout user
  logout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  },

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.getToken();
  },

  // Placeholder for Google OAuth
  async signInWithGoogle(): Promise<AuthResponse> {
    // TODO: Implement Google OAuth integration
    return {
      success: false,
      message: "Google authentication coming soon",
    };
  },

  // Placeholder for GitHub OAuth
  async signInWithGitHub(): Promise<AuthResponse> {
    // TODO: Implement GitHub OAuth integration
    return {
      success: false,
      message: "GitHub authentication coming soon",
    };
  },
};
