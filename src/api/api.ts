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
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            // .then(response => {
            //     return response.data;
            // });
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            // .then(response => {
            //     return response.data;
            // });
    },
    authSocNet() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    }
}
