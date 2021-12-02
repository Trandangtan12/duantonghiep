import HttpClient from "../api/axiosClient";
import { API_NEWS } from "../config";

export const NewsService = {
  getAllNews() {
    return HttpClient.get(`${API_NEWS}`)
  },
  createNews(data){
      return HttpClient.post(`${API_NEWS}`,data)
  },
  deleteNew(id){
    return HttpClient.delete(`${API_NEWS}/${id}`)
  },
  getInfoNew(id){
    return HttpClient.get(`${API_NEWS}/${id}`)
  }
};
