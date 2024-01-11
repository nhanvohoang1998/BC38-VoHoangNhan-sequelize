import sequelize from "../models/connect.js"
import initModels from "../models/init-models.js"
import like_res from "../models/like_res.js";
import rate_res from "../models/rate_res.js";
import restaurants from "../models/restaurants.js";

const conn =  initModels(sequelize);


const likeRestaurant = async (req,res)=>{
    let {user_id, res_id, date_like} = req.body
    let data =  await conn.like_res.create({
        user_id,
        res_id,
        date_like
    })
    res.send(data)
};

const unlikeRestaurant = async (req,res)=>{
    let {id, user_id, res_id} = req.body
    await conn.like_res.destroy({
        where: {
            id,
            user_id,
            res_id
        }
    })
    res.send("unlike restaurant success")
}

const getListLikeByUser = async (req, res)=>{
    let data = await conn.users.findAll({
        include:
            {
            model: like_res,
            as: 'like_res',
            
        }
    })
    res.send(data)
};

const getListRateByUser = async (req, res)=>{
    let data = await conn.users.findAll({
        include:
            {
            model: rate_res,
            as: 'rate_res',
            
        }
    })
    res.send(data)
}

const orderFood = async (req, res)=>{
    let {user_id, food_id, amount} = req.body
    let data = await conn.orders.create({
        user_id,
        food_id,
        amount
    })
    res.send(data)
}

const addRate = async (req, res)=>{
    let {user_id, res_id, amount} = req.body
    let data = await conn.rate_res.create({
        user_id,
        res_id,
        amount
    })
    res.send(data)
}

export{
    likeRestaurant,
    unlikeRestaurant,
    getListLikeByUser,
    getListRateByUser,
    orderFood,
    addRate,
}