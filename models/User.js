const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    // add properites here, ex:
    username: {
         type: DataTypes.STRING,
         unique:true,
         validate:{
            isAlphanumeric:true
         }
    },
    password:{
        type:DataTypes.STRING,
        validate:{
            len:[8]
        }
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        validate:{
            isEmail:true
        }
    }
},{
    sequelize
});

module.exports=User