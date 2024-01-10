import express from 'express';
import { likeRestaurant } from '../controllers/restaurantsControllers.js';

const restaurantsRoutes = express.Router();

restaurantsRoutes.get('/like-restaurants', likeRestaurant)


export default restaurantsRoutes;