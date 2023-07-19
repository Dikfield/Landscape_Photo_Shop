import Product from '../models/productModel';
import asyncHandler from '../middleware/asyncHandler';
import Order from '../models/orderModel';
import UserModel from '../models/userModel';
import { productInterface } from '../interfaces/productInterface';

const addOrderItems = asyncHandler(async (req: any, res: any) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order Items');
  } else {
    const order = new Order({
      orderItems: orderItems.map((x: any) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

const getMyOrders = asyncHandler(async (req: any, res: any) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

const getOrderbyId = asyncHandler(async (req: any, res: any) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email',
  );

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

const updateOrderToPay = asyncHandler(async (req: any, res: any) => {
  const order = await Order.findById(req.params.id);

  const user = await UserModel.findById(order?.user);

  const products = [];

  if (order) {
    for (const item of order.orderItems) {
      products.push(await Product.findById(item.product));
    }
  }

  const now = new Date();

  if (order) {
    order.isPaid = true; 
    order.paidAt = now;
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    

    for (const item of products) {
      if (item) {
        const payedProduct: productInterface = {
          productId: item._id.toString(),
          name: item.name,
          image: item.image,
          imageWatermark: item.imageWatermark,
          brand: item.brand,
          category: item.category,
          description: item.description,
        };
        user?.products.push(payedProduct);
      }
    }
    await user?.save();
    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

const updateToDelivered = asyncHandler(async (req: any, res: any) => {
  const order = await Order.findById(req.params.id);

  const dateNow = new Date();

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = dateNow;

    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

const getOrders = asyncHandler(async (req: any, res: any) => {
  const orders = await Order.find({}).populate('user', 'id name');
  res.status(200).json(orders);
});

export {
  addOrderItems,
  getMyOrders,
  getOrderbyId,
  updateOrderToPay,
  updateToDelivered,
  getOrders,
};
