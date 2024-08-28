export const isAuthenticated = () => {
  // Check if user is authenticated (e.g., check JWT token)
  return !!localStorage.getItem("authToken");
};

export const login = (token) => {
  localStorage.setItem("authToken", token);
};

export const logout = () => {
  localStorage.removeItem("authToken");
};
