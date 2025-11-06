export const saveToken = (token: string) => localStorage.setItem("token", token);
export const getToken = () => (typeof window !== "undefined" ? localStorage.getItem("token") : null);
export const logout = () => localStorage.removeItem("token");
