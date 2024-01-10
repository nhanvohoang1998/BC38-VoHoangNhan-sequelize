import express from 'express';
import restaurantsRoutes from './restaurantsRoutes.js';

const rootRoutes = express.Router();
rootRoutes.use('/restaurants', restaurantsRoutes)

export default rootRoutes;