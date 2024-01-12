"use strict";
import { Model } from "sequelize";
module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      User.belongsTo(models.EnergyMeter, { foreignKey: "iUserId" });
      User.belongsTo(models.FlowMeter, { foreignKey: "iUserId" });
      User.hasMany(models.UserAccessRole, { foreignKey: "iUserId" });
    }
  }
  User.init(
    {
      iUserId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      iSuperUserId: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      vFirstName: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      vLastName: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      vEmailId: {
        type: DataTypes.STRING(70),
        allowNull: false,
      },
      vPhoneNo: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      txPassword: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      vProfilePhoto: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      tiAccountStatus: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
      tiAccountType: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
      },
      txAccessToken: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      txEmailToken: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      iCreatedAt: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
      },
      iUpdatedAt: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
      timestamps: false,
    }
  );
  return User;
};
