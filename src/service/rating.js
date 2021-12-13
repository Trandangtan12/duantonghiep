import React from 'react'
import HttpClient from '../api/axiosClient'
import { API_RATING } from '../config'

export const ratingService ={
    getAllRating(){
        return HttpClient.get(`${API_RATING}`)
    },
    addRating(id, data) {
        return HttpClient.post(`/buses${API_RATING}/${id}`, data)
    },
    deleteRating(id) {
        return HttpClient.delete(`${API_RATING}/${id}`)
    }
}
