module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {  // db name user huncah
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull : false
      },
      googleId: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      currentOrgNumber:{
        type:DataTypes.INTEGER,
        allowNull:true
      }
     
    
    });
    
    
    return User;
  };