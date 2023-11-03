import axios from "axios";

const getJsonContentType = () => ({
    "Content-Type": "application/json",
});

const getFormDataContentType = () => ({
    "Content-Type":"multipart/form-data",
});

const axiosJsonOptions = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: getJsonContentType(),
};

const axiosFormDataOptions = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: getFormDataContentType(),
}

export const axiosJson = axios.create(axiosJsonOptions);
export const axiosFormData = axios.create(axiosFormDataOptions);