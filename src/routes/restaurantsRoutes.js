import express from 'express';
import { getListLikeByRestaurant, getListRateByRestaurant } from '../controllers/restaurantsControllers.js';


const restaurantsRoutes = express.Router();

restaurantsRoutes.get('/getListLikeRestaurant', getListLikeByRestaurant)
restaurantsRoutes.get('/getListRateRestaurant', getListRateByRestaurant)


export default restaurantsRoutes;