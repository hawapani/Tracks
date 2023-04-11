import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance =  axios.create({
    baseURL: 'https://b889-2405-201-4011-b91f-55f1-9119-c245-386b.ngrok-free.app' 
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance; 