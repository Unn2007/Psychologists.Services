import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const FIREBASE_REFRESH_URL = `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`;


const refreshIdToken = async (refreshToken) => {
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  const response = await axios.post(FIREBASE_REFRESH_URL, params);
  const { id_token, refresh_token, expires_in } = response.data;

 
  return {
    idToken: id_token,
    refreshToken: refresh_token,
    expiresAt: Date.now() + expires_in * 1000, // Час дії токена
  };
};

export {refreshIdToken}; 

