import apiClient from "./apiClient";

export const login = async (email, password) => {
    try {
        return await apiClient.post("/api/v1/login", {
            email,
            password,
        });
    } catch (error) {
        throw error;
    }
}

export function Logout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
}