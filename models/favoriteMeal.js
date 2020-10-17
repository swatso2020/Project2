module.exports = function (sequelize, DataTypes) {
  //model to save favorites to the database and populate the database initally with some meals 
  var favoriteMeal = sequelize.define("favoriteMeal", {
    mealid: DataTypes.INTEGER,
    mealname: DataTypes.STRING,
    mealcategory: DataTypes.STRING,
    mealthumb: DataTypes.STRING,
    mealVideo: DataTypes.STRING,
    mealInstr: DataTypes.STRING(3825),
    mealRev: DataTypes.STRING(3825),
    mealIngr1: DataTypes.STRING,
    mealIngr2: DataTypes.STRING,
    mealIngr3: DataTypes.STRING,
    mealIngr4: DataTypes.STRING,
    mealIngr5: DataTypes.STRING,
    mealIngr6: DataTypes.STRING,
    mealIngr7: DataTypes.STRING,
    mealIngr8: DataTypes.STRING,
    mealIngr9: DataTypes.STRING,
    mealIngr10: DataTypes.STRING,
    mealIngr11: DataTypes.STRING,
    mealIngr12: DataTypes.STRING,
    mealIngr13: DataTypes.STRING,
    mealIngr14: DataTypes.STRING,
    mealIngr15: DataTypes.STRING,
    mealIngr16: DataTypes.STRING,
    mealIngr17: DataTypes.STRING,
    mealIngr18: DataTypes.STRING,
    mealIngr19: DataTypes.STRING,
    mealIngr20: DataTypes.STRING,
  });
  return favoriteMeal;
};
