module.exports = (sequelize,Datatypes) =>{
    const User = sequelize.define("user",
    {
        first_name: Datatypes.STRING,
        last_name: Datatypes.STRING,
        email: Datatypes.STRING,
    })
    return User
}