import express from 'express';
import { addRate, getListLikeByUser, getListRateByUser, likeRestaurant, orderFood, unlikeRestaurant } from '../controllers/userControllers.js';

const userRoutes = express.Router();

userRoutes.post('/like', likeRestaurant);
userRoutes.delete('/unlike', unlikeRestaurant);
userRoutes.get('/getListLikeUser', getListLikeByUser)
userRoutes.get('/getListRateUser', getListRateByUser)
userRoutes.post('/order', orderFood);
userRoutes.post('/addRate', addRate);

export default userRoutes;