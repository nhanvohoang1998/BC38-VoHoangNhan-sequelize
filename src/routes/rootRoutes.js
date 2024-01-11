import express from 'express';
import restaurantsRoutes from './restaurantsRoutes.js';
import userRoutes from './userRoutes.js';

const rootRoutes = express.Router();
rootRoutes.use('/restaurants', restaurantsRoutes)
rootRoutes.use('/user', userRoutes)

export default rootRoutes;