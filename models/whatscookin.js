module.exports = function(sequelize, DataTypes) {
    var whatscookin = sequelize.define("whatscookin_db", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return whatscookin;
  };
  