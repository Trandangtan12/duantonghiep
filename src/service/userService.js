import HttpClient from "../api/axiosClient"
import { API_UPDATE_USER } from "../config"
import { v4 as uuidv4 } from 'uuid';
export const UserApi = {
    signup(user){
        const url = "/register"
        return HttpClient.post(url, user)
    },
    signin(user){
        const url = "/login"
        return HttpClient.post(url, user)
    },
    signout(next) {
        if(window != "undefined"){
            localStorage.removeItem("user");
            next();
            return HttpClient.get("/signout")
        }
    },
    authenticated(data, next){
       if(typeof window != "undefined"){
           localStorage.setItem("user", JSON.stringify(data));
           next()
       }
    },
    isAuthenticated() {
        if(typeof window == "undefined"){
            return false;
        }
        if(localStorage.getItem("user")){
            return JSON.parse(localStorage.getItem("user"));
        }else {
            return false
        }
    },
    updateUser(id , user){
        return HttpClient.put(`${API_UPDATE_USER}/${id}`, user , {
            headers : {
                Authorization : 'Bearer' + this.isAuthenticated().accessToken
            }
            
        })
    },
    getUser(id){
        return HttpClient.get(`/users`)
    }
}
