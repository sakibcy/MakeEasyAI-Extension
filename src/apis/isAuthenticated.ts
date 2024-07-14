import getCookie from "../utils/getCookie";
import apiClient from "./apiClient";

export const isAuthenticated = async () => { 
    return await apiClient.get(
        '/authenticated',
        { headers: { 'Authorization': `Bearer ${await getCookie()}` } }
    );
}