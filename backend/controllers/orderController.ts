import asyncHandler from '../middleware/asyncHandler';
import Order from '../models/orderModel';

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
  res.send('Update order to pay');
});

const updateToDelivered = asyncHandler(async (req: any, res: any) => {
  res.send('update To Delivered');
});

const getOrders = asyncHandler(async (req: any, res: any) => {
  res.send('get Orders');
});

export {
  addOrderItems,
  getMyOrders,
  getOrderbyId,
  updateOrderToPay,
  updateToDelivered,
  getOrders,
};
