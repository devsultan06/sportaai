const BASE_URL = import.meta.env.VITE_BASE_URL;

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();

    if (!response.ok) {
      const errorMessage =
        result.password?.[0] ||
        result.email?.[0] ||
        result.message ||
        "Registration failed";
      throw new Error(errorMessage);
    }

    console.log("Registration successful:", result);
    return result;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const verifyOtp = async (email, otp) => {
  try {
    const response = await fetch(`${BASE_URL}/activate-user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Verification failed");
    }

    return result;
  } catch (error) {
    console.error("OTP Verification Error:", error.message);
    throw error;
  }
};
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/jwt/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (!response.ok) {
      if (
        result.detail === "No active account found with the given credentials"
      ) {
        throw new Error(
          "This account has not been verified. Please check your email."
        );
      }
      if (result.detail === "No active account found") {
        throw new Error("Invalid email or password. Please try again.");
      }
      throw new Error(result.message || "Login failed");
    }

    console.log("Login successful:", result);
    return result;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
};

export const requestPasswordReset = async (email) => {
  try {
    const response = await fetch(`${BASE_URL}/users/reset_password/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.status === 204) {
      console.log("Password reset email sent successfully (204 No Content)");
      return { message: "Password reset email sent successfully" };
    }

    let result;
    const text = await response.text();
    result = text ? JSON.parse(text) : {};

    if (!response.ok) {
      throw new Error(result.message || "Password reset request failed");
    }

    console.log("Password reset email sent:", result);
    return result;
  } catch (error) {
    console.error("Error during password reset request:", error);
    throw error;
  }
};

export const resetPasswordConfirm = async ({
  email,
  otp,
  newPassword,
  confirmNewPassword,
}) => {
  try {
    const response = await fetch(`${BASE_URL}/users/reset_password_confirm/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        otp,
        new_password: newPassword,
        re_new_password: confirmNewPassword,
      }),
    });

    if (response.status === 204) {
      console.log("Password reset successful (204 No Content)");
      return { success: true, message: "Password reset successful" };
    }

    const result = await response.json();

    if (!response.ok) {
      let errorMessage =
        result?.non_field_errors?.[0] ||
        result?.message ||
        "Failed to reset password";

      if (
        errorMessage === "OTP expired or doesn't exist, Request for another OTP"
      ) {
        errorMessage = "The OTP you entered is invalid or has expired.";
      }

      throw new Error(errorMessage);
    }

    return { success: true, message: result.message };
  } catch (error) {
    console.error("Error resetting password:", error);
    return { success: false, message: error.message };
  }
};

export const resendActivationCode = async (email) => {
  try {
    const response = await fetch(`${BASE_URL}/users/resend_activation/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(result.detail || "Failed to resend activation code.");
    }

    return {
      success: true,
      message: "A new activation code has been sent to your email.",
    };
  } catch (error) {
    console.error("Error resending activation code:", error);
    return { success: false, message: error.message };
  }
};

const refreshAccessToken = async () => {
  try {
    const response = await fetch(`${BASE_URL}/refresh-token/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Access token refreshed");
      return result.accessToken;
    } else {
      throw new Error(result.message || "Token refresh failed");
    }
  } catch (error) {
    console.error("Error during token refresh:", error);
    throw error;
  }
};

export const makeAuthenticatedRequest = async (
  url,
  method = "GET",
  body = null
) => {
  try {
    let response = await fetch(url, {
      method: method,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (response.status === 401) {
      const newAccessToken = await refreshAccessToken();

      response = await fetch(url, {
        method: method,
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
      });
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error during authenticated request:", error);
    throw error;
  }
};
