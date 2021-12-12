import React from 'react'
import HttpClient from '../api/axiosClient'
import { API_RATING } from '../config'

export const ratingService ={
    getAllRating(){
        return HttpClient.get(`${API_RATING}`)
    }
}
