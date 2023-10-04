// src/auth/auth.js

const API_URL = 'http://your-flask-backend-api-url'; // Replace with your Flask API URL

export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Authentication failed.');
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    throw error;
  }
};

// Add other authentication functions (logout, registration, etc.) as needed
