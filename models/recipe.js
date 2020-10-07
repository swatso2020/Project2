module.exports = function(sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipe", {

        idMeal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      strMeal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strDrinkAlternate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strCategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strArea: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strInstructions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      strMealThumb: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      strTags: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strYoutube: {
        type: DataTypes.STRING,
        allowNull: false,
      },


      strIngredient1: {
        type: DataTypes.STRING,
    },
    
    
      category: {
        type: DataTypes.STRING,
        defaultValue: "Personal"
      }
    });
    return Recipe;
  };
  