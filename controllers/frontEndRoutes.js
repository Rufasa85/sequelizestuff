const express = require('express');
const router = express.Router();
const {Pet,User} = require('../models');

router.get("/",(req,res)=>{
    Pet.findAll({
        order:["UserId"],
        include:[User]
    }).then(petData=>{

        const hbsPets = petData.map(pet=>pet.get({plain:true}))
        // res.json(hbsPets)
        res.render("home",{
            pets:hbsPets
        })
    })
})

router.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.status(401).send("login first!")
    }
    User.findByPk(req.session.user.id,{
        include:[Pet]
    }).then(userData=>{
        const hbsUser = userData.get({plain:true});
        res.render("profile",hbsUser)
    })
})

module.exports = router;