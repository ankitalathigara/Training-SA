// src/models/OrderItem.ts
import { DataTypes, Model } from 'sequelize';
//import Product from './Product';
//import Order from './Order';
module.exports = (sequelize: any, DataTypes: any) => {

class OrderItem extends Model {
  public order_item_id!: number;
  public quantity!: number;
  public subtotal!: number;

  // Associations
  //public readonly order?: Order;
 // public readonly product?: Product;
}

OrderItem.init(
  {
    order_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'OrderItem',
  }
);

return OrderItem;
}