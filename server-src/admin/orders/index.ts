import OrderController from './orders.controllers';

class OrderModule {
  getorders: any;
  testcats: any;

  constructor() {
    this.testcats = OrderController.testCats;
    this.getorders = OrderController.getOrders;
  }
}

export default new OrderModule();