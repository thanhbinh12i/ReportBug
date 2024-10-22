
import axiosInstance from './axiosInstance';

export const cyberbugsService = {
    signIn: (userLogin) => {
        return axiosInstance.post('/users/signin', userLogin);
    },
    getAllProjectCategory: () => {
        return axiosInstance.get('/ProjectCategory');
    },
    createProject: (newProject) => {
        return axiosInstance.post('/Project/createProject', newProject);
    },
    createProjectAuthorization: (newProject) => {
        return axiosInstance.post('/Project/createProjectAuthorize', newProject);
    },
    getListProject: () => {
        return axiosInstance.get('/Project/getAllProject');
    },
    updateProject: (projectUpdate) => {
        return axiosInstance.put(`/Project/updateProject?projectId=${projectUpdate.id}`, projectUpdate);
    }
};