import axiosConfig from "../../config/axios";
const authProvider = () => {
    const auth = window.localStorage.getItem('Authorization');
    
    if(!auth){
        window.location.replace("http://localhost:8000/home/#/login");
    }
    axiosConfig.get('api/userdetails')
               .then((res) => {
                    return true;

               })
               .catch((error) => {
                       window.location.replace("http://localhost:8000/home/#/login");
                   
               })

}
export default authProvider;