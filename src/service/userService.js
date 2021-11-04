import { useSelector } from "react-redux"
import HttpClient from "../api/authUser"
import { API_UPDATE_USER } from "../config"
const token = localStorage.getItem('user')
export const UserApi = {
    signup(user){
        const url = "/users"
        return HttpClient.post(url, user)
    },
    signin(user){
        const url = "/signin"
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
                Authorization : 'Bearer' + token.accessToken
            }
        })
    }
}