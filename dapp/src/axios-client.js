import axios from "axios";

//crea el cliente ligado a la URL del backend
const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_LARAVEL_BASE_URL}/api` //las comillas invertidas son para agregar variables
})

//Intercepta una peticion de la API
axiosClient.interceptors.request.use((config) =>{
    const token = localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

//Intercepta las respuestas de la API
axiosClient.interceptors.response.use(
    (response) => { //Si acepta
        return response;
    }, 
    (error) => { //Si rechaza
        try{
            const {response} = error;
            if (response.status === 401) { //Token invalido
                localStorage.removeItem('ACCESS_TOKEN');
            }
        } catch(e){
            console.log(e);
        }

        throw error;
    }
)

export default axiosClient;