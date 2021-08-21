const orderModel = require("../models/orders");
const productModel = require("../models/products");
const userModel = require("../models/users")
const sendMail = require("../utils/sendMail");
const orderMail = require("../utils/mail/orderMail");

class Order {
  async getAllOrders(req, res) {
    try {
      let Orders = await orderModel
        .find({})
        .populate("allProduct.id", "pName pImages pPrice")
        .populate("user", "name email")
        .sort({ _id: -1 });
      if (Orders) {
        return res.json({ Orders });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getOrderByUser(req, res) {
    let { uId } = req.body;
    if (!uId) {
      return res.json({ message: "All filled must be required" });
    } else {
      try {
        let Order = await orderModel
          .find({ user: uId })
          .populate("allProduct.id", "pName pImages pPrice")
          .populate("user", "name email")
          .sort({ _id: -1 });
        if (Order) {
          return res.json({ Order });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  async postCreateOrder(req, res) {

    let { allProduct, user, amount, address, phone } = req.body;
    if (
      !allProduct ||
      !user ||
      !amount ||
      !address ||
      !phone
    ) {
      return res.json({ message: "All filled must be required" });
    } else {
      try {
        let newOrder = new orderModel({
          allProduct,
          user,
          amount,
          address,
          phone,
        });
        let result = await newOrder.save();
        if (result) {
          // console.log(result)
          var keys = Object.keys(result.allProduct)
          var orderListMessage = ""
          for (var i = 0; i < keys.length; i++) {
            var value = result.allProduct[i].id;
            let ProductObj = await productModel.findById(value)
            orderListMessage = orderListMessage + `
              <tr>
                  <td style=" border: 1px solid black; " >${i}]</td>
                  <td style=" border: 1px solid black; " >
                      <table>
                          <tr>
                              <td><img src="${ProductObj.pImages[0].url}" alt="" style=" width: 60px; " /></td>
                              <td><p>${ProductObj.pName}</p></td>
                          </tr>    
                      </table>
                  </td>
                  <td style=" border: 1px solid black; " >${result.allProduct[i].quantitiy}</td>
              </tr>
            `
          }

          const user = await userModel.findOne({ _id: result.user })
          var senderStatus = 'Your'
          var subjectMail = `${senderStatus} Order`
          var dateNow = result.createdAt.toLocaleString()
          var message = orderMail({
            sender_status: senderStatus,
            order_list: orderListMessage,
            order_id: result._id,
            order_status: result.status,
            order_amount: result.amount,
            order_address: result.address,
            order_phone: result.phone,
            order_date: dateNow
          })
          sendMail({ to: user.email, subject: subjectMail, text: message })

          senderStatus = 'Customer'
          subjectMail = `${senderStatus} Order`
          message = ``
          message = orderMail({
            sender_status: senderStatus,
            order_list: orderListMessage,
            order_id: result._id,
            order_status: result.status,
            order_amount: result.amount,
            order_address: result.address,
            order_phone: result.phone,
            order_date: dateNow
          })
          sendMail({ to: process.env.EMAIL_FROM, subject: subjectMail, text: message })

          return res.json({ success: "Order created successfully" });
        }
      } catch (err) {
        return res.json({ error: err });
      }
    }

  }

  async postUpdateOrder(req, res) {
    let { oId, status } = req.body;
    if (!oId || !status) {
      return res.json({ message: "All filled must be required" });
    } else {
      let currentOrder = orderModel.findByIdAndUpdate(oId, {
        status: status,
        updatedAt: Date.now(),
      });
      currentOrder.exec((err, result) => {
        if (err) console.log(err);
        return res.json({ success: "Order updated successfully" });
      });
    }
  }

  async postDeleteOrder(req, res) {
    let { oId } = req.body;
    if (!oId) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let deleteOrder = await orderModel.findByIdAndDelete(oId);
        if (deleteOrder) {
          return res.json({ success: "Order deleted successfully" });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}

const ordersController = new Order();
module.exports = ordersController;
