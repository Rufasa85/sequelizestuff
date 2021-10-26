const User = require("./User");
const Pet = require("./Pet");

User.hasMany(Pet,{
    onDelete:"CASCADE"
});
Pet.belongsTo(User);

module.exports={
    User,
    Pet
};