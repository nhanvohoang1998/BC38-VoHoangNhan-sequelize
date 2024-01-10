import express from 'express';
import rootRoutes from './src/routes/rootRoutes.js';

const app = express();
const port = 8081;

app.use(express.json());
app.use(rootRoutes);

app.listen(port, ()=>{
    console.log(`server starting on port: ${port}`);
});