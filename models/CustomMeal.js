module.exports = function(sequelize, DataTypes) {
    //This will be used to store meals from the user if they want to put in their own recipies
    var CustomMeal= sequelize.define("CustomMeal", {
        mealid:DataTypes.INTEGER,
        mealname: DataTypes.STRING,
        mealIngr1:DataTypes.STRING,
        mealIngr2:DataTypes.STRING,
        mealIngr3:DataTypes.STRING,
        mealIngr4:DataTypes.STRING,
        mealIngr5:DataTypes.STRING,
        mealIngr6:DataTypes.STRING,
        mealIngr7:DataTypes.STRING,
        mealIngr8:DataTypes.STRING,
        mealIngr9:DataTypes.STRING,
        mealIngr10:DataTypes.STRING,
        mealIngr11:DataTypes.STRING,
        mealIngr12:DataTypes.STRING,
        mealIngr13:DataTypes.STRING,
        mealIngr14:DataTypes.STRING,
        mealIngr15:DataTypes.STRING,
        mealIngr16:DataTypes.STRING,
        mealIngr17:DataTypes.STRING,
        mealIngr18:DataTypes.STRING,
        mealIngr19:DataTypes.STRING,
        mealIngr20:DataTypes.STRING,
      });
      CustomMeal.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        CustomMeal.hasOne(models.favoriteMeal, {
          onDelete: "cascade"
        });
      };
    
      return CustomMeal;
    };