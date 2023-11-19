import axios from 'axios';

const useAxios = () => {
   const instance = axios.create({
     baseURL: "http://localhost:3002/api/v1"
   });
   return instance;
};

export default useAxios;