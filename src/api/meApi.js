import axiosClient from './axiosClient';

const API_URL = '/me';

const meApi = {
    fetchProfile: () => {
        return axiosClient.get(`${API_URL}/profile`);
    },

    updateProfile: (name, dateOfBirth, gender) => {
        return axiosClient.put(`${API_URL}/profile`, {
            name,
            dateOfBirth,
            gender,
        });
    },

    updateAvatar: (file) => {
        return axiosClient.patch(`${API_URL}/avatar`, file);
    },
    changePasswod: (oldPassword, newPassword) => {
        return axiosClient.patch(`${API_URL}/password`, {
            oldPassword,
            newPassword,
        });
    },
};

export default meApi;
