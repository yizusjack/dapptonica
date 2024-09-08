import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_LARAVEL_BASE_URL}/api`
});

//intercepta una petición de la API
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.get('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

//intercepta la respuesta de la API
axiosClient.interceptors.response.use((reponse) => { //on fullfiled
    return response;
}, 
(error) => { //on rejected
    try{
        const {response} = error;
        if (response.status === 401) { //Token invalido
            localStorage.removeItem('ACCESS_TOKEN');
        }
    } catch(e){
        console.log(e);
    }

    throw error;
})

export default axiosClient;