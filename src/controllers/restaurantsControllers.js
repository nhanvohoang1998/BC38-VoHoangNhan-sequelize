import { where } from "sequelize";
import sequelize from "../models/connect.js"
import initModels from "../models/init-models.js"
import like_res from "../models/like_res.js";
import rate_res from "../models/rate_res.js";
import users from "../models/users.js";

const conn =  initModels(sequelize);

const getListLikeByRestaurant = async (req, res)=>{
    let {res_id} = req.body
    let data = await conn.restaurants.findAll({
        include: [
            {
                model: like_res,
                as: "like_res",
                required: true,
            },
        ],
        where: {
            res_id
        }
    })
    res.send(data)
}




const getListRateByRestaurant = async (req, res)=>{
    let {res_id} = req.body
    let data = await conn.restaurants.findAll({
        include:
            {
            model: rate_res,
            as: 'rate_res',            
        },
        where: {
            res_id
        }
    })
    res.send(data)
}

export{
    getListLikeByRestaurant,
    getListRateByRestaurant,
}

