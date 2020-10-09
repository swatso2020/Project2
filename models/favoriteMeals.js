module.exports = function(sequelize, DataTypes) {
  //model to save favorites to the database and populate the database initally with some meals 
  var favoriteMeal= sequelize.define("favoriteMeal", {
      mealid:DataTypes.INT,
      mealname: DataTypes.STRING,
      mealcategory:DataTypes.STRING,
      mealthumb: DataTypes.BOOLEAN,
      mealVideo: DataTypes.string,
      mealIngr1:DataTypes.string,
      mealIngr2:DataTypes.string,
      mealIngr3:DataTypes.string,
      mealIngr4:DataTypes.string,
      mealIngr5:DataTypes.string,
      mealIngr6:DataTypes.string,
      mealIngr7:DataTypes.string,
      mealIngr8:DataTypes.string,
      mealIngr9:DataTypes.string,
      mealIngr10:DataTypes.string,
      mealIngr11:DataTypes.string,
      mealIngr12:DataTypes.string,
      mealIngr13:DataTypes.string,
      mealIngr14:DataTypes.string,
      mealIngr15:DataTypes.string,
      mealIngr16:DataTypes.string,
      mealIngr17:DataTypes.string,
      mealIngr18:DataTypes.string,
      mealIngr19:DataTypes.string,
      mealIngr20:DataTypes.string,
    });
    return favoriteMeal;
  };
  