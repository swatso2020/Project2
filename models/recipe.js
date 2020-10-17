module.exports = function (sequelize, DataTypes) {
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
      // allowNull: false,
    },
    strArea: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    strInstructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    strMealThumb: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    strTags: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    strYoutube: {
      type: DataTypes.STRING,
      // allowNull: false,
    },


    strIngredient1: {
      type: DataTypes.STRING,
    },
    strIngredient2: {
      type: DataTypes.STRING,
    },
    strIngredient3: {
      type: DataTypes.STRING,
    },
    strIngredient4: {
      type: DataTypes.STRING,
    },
    strIngredient5: {
      type: DataTypes.STRING,
    },
    strIngredient6: {
      type: DataTypes.STRING,
    },
    strIngredient7: {
      type: DataTypes.STRING,
    },
    strIngredient8: {
      type: DataTypes.STRING,
    },
    strIngredient9: {
      type: DataTypes.STRING,
    },
    strIngredient10: {
      type: DataTypes.STRING,
    },
    strIngredient11: {
      type: DataTypes.STRING,
    },
    strIngredient12: {
      type: DataTypes.STRING,
    },
    strIngredient13: {
      type: DataTypes.STRING,
    },
    strIngredient14: {
      type: DataTypes.STRING,
    },
    strIngredient15: {
      type: DataTypes.STRING,
    },
    strIngredient16: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient17: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient18: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient19: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strIngredient20: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    strMeasure1: {
      type: DataTypes.STRING,
    },
    strMeasure2: {
      type: DataTypes.STRING,
    },
    strMeasure3: {
      type: DataTypes.STRING,
    },
    strMeasure4: {
      type: DataTypes.STRING,
    },
    strMeasure5: {
      type: DataTypes.STRING,
    },
    strMeasure6: {
      type: DataTypes.STRING,
    },
    strMeasure7: {
      type: DataTypes.STRING,
    },
    strMeasure8: {
      type: DataTypes.STRING,
    },
    strMeasure9: {
      type: DataTypes.STRING,
    },
    strMeasure10: {
      type: DataTypes.STRING,
    },
    strMeasure11: {
      type: DataTypes.STRING,
    },
    strMeasure12: {
      type: DataTypes.STRING,
    },
    strMeasure13: {
      type: DataTypes.STRING,
    },
    strMeasure14: {
      type: DataTypes.STRING,
    },
    strMeasure15: {
      type: DataTypes.STRING,
    },
    strMeasure16: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure17: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure18: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure19: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    strMeasure20: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    strSource: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateModified: {
      type: DataTypes.STRING,
      allowNull: true,

    }
  });
  return Recipe;
};
