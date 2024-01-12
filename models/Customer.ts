// src/models/Customer.ts
import { DataTypes, Model } from 'sequelize';
import Order from './Order';
module.exports = (sequelize: any, DataTypes: any) => {

class Customer extends Model {
  public customer_id!: number;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public phone!: string;

  // Associations
  public readonly orders?: Order[];
}

Customer.init(
  {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Customer',
  }
);

return Customer;
}