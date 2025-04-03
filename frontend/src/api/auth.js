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
      throw new Error(result.message || "Registration failed");
    }

    console.log("Registration successful:", result);
    return result;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const verifyOtp = async (email, otp) => {
  const response = await fetch(`${BASE_URL}/activate-user/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, otp }),
  });

  if (!response.ok) {
    throw new Error("Verification failed");
  }

  return await response.json();
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
      throw new Error(result.message || "Login failed");
    }

    console.log("Login successful:", result);
    return result;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
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
