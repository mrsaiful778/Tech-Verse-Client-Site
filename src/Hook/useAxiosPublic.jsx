import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://tech-verser-server-site.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;