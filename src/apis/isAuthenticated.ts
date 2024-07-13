import apiClient, { getCookie } from "./apiClient";

export const isAuthenticated = async () => { 
    return await apiClient.get(
        '/authenticated',
        { headers: { 'Authorization': `Bearer ${await getCookie()}` } }
    );
}