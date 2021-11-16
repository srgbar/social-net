import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "cfaf51fb-b924-4acc-8242-786545465cf9"
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users/?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    followUsers(id = 20199) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    unFollowUsers(id = 20199) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    }
}