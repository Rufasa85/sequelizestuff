const sequelize = require("../config/connection");
const {User,Pet} = require("../models")

const seed = async ()=>{
    const userData = await User.bulkCreate([
        {
            username:"joe",
            password:"password",
            email:"joe@joe.joe"
        },
        {
            username:"louis",
            password:"password",
            email:"louis@joe.joe"
        },
        {
            username:"brett",
            password:"password",
            email:"brett@joe.joe"
        },
        {
            username:"michael",
            password:"password",
            email:"michael@joe.joe"
        },
    ],{
        individualHooks:true
    })
    const petsData = await Pet.bulkCreate([
        {
            name:"Shiva",
            species:"cat",
            age:1,
            UserId:1
        },
        {
            name:"Bahamut",
            species:"cat",
            age:1,
            UserId:1
        },
        {
            name:"Bandit",
            species:"cat",
            age:4,
            UserId:2
        },
    ])
    console.log("all done");
}

sequelize.sync({force:true}).then(()=>{
    seed();
})