// src/models/Order.ts
import { DataTypes, Model } from 'sequelize';
import { OrderItem } from 'sequelize';
module.exports = (sequelize: any, DataTypes: any) => {

class Order extends Model {
  public order_id!: number;
  public order_date!: Date;
  public status!: string;

  // Associations
 // public readonly customer?: Customer;
  public readonly orderItems?: OrderItem[];
}

Order.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Order',
  }
);

return Order;

}
