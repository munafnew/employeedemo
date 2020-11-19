import { axiosInstance } from "../axiosInstance";

// Login
export const getEmployeesRequest = () => {
  return axiosInstance({
    method: "GET",
    url: `/users`,
  });
};
export const getEmployeesDetailsRequest = (payload) => {
  return axiosInstance({
    method: "GET",
    url: `/users/${payload.id}`,
  });
};
export const changeEmployeeDetailsRequest = (payload) => {
  return axiosInstance({
    method: "POST",
    url: `/users/${payload.id}`,
    data: JSON.stringify(payload.data),
  });
};
