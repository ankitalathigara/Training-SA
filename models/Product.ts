// src/models/Product.ts
import { DataTypes, Model, Sequelize } from 'sequelize';
import { Product } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {

class Product extends Model {
  public product_id!: number;
  public product_name!: string;
  public description!: string;
  public price!: number;

  // Associations
//   public readonly category?: Category;
//   public readonly inventory?: Inventory;
}

Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Product',
  }
);

return Product;
}