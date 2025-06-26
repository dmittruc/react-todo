import axiosInstance from './axios';

export const fetchTasksApi = async () => {
  const res = await axiosInstance.get('/tasks');
  return res.data;
};
