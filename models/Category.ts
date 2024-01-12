// src/models/Category.ts
import { DataTypes, Model } from 'sequelize';
import Product from './Product';
module.exports = (sequelize: any, DataTypes: any) => {

class Category extends Model {
  public category_id!: number;
  public category_name!: string;

  // Associations
  public readonly products?: Product[];
}

Category.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Category',
  }
);

return Category;
}
