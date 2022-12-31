import api from "./api";

export const bdLogin = async (email) => {
    try {
        await api.login(email);
    }
    catch (error) {
        throw new Error(error.response.data.message);
    }
}