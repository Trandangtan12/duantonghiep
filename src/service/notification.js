import HttpClient from "../api/axiosClient";
import { API_NOTIFICATION } from "../config";

export const NotificationService = {
  getAllNotification() {
    return HttpClient.get(`${API_NOTIFICATION}`)
  },
};
