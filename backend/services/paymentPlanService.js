import { PaymentPlan } from "../sequelize/models/PaymentPlan.js";
import fs from 'fs';

export const getAllPaymentPlans = async () => {
  return await PaymentPlan.findAll();
};

export const getPaymentPlanById = async (id) => {
  return await PaymentPlan.findByPk(id);
};

export const createPaymentPlan = async (data) => {
  return await PaymentPlan.create({
    payment_plan: data.body.payment_plan,
    price: data.body.price,
    discount: data.body.discount,
    duration: data.body.duration,
    icon: data.file !== undefined ? data.file.path : null
  });
};

export const updatePaymentPlan = async (data) => {
  if (data.file !== undefined) {
    const [updated] = await PaymentPlan.update({
      payment_plan: data.body.payment_plan,
      price: data.body.price,
      discount: data.body.discount,
      duration: data.body.duration,
      icon: data.file.path
    }, {
      where: { id: data.params.id }
    });
    if (updated) {  
      const paymentPlan = await PaymentPlan.findByPk(data.params.id);
      fs.existsSync(paymentPlan.icon) && fs.unlinkSync(paymentPlan.icon);
      return await PaymentPlan.findByPk(data.params.id);
    }
  } else {
    const [updated] = await PaymentPlan.update({
      payment_plan: data.body.payment_plan,
      price: data.body.price,
      discount: data.body.discount,
      duration: data.body.duration
    }, {
      where: { id: data.params.id }
    });
    if (updated) {
      return await PaymentPlan.findByPk(data.params.id);
    }
  }
  return null;
};

export const deletePaymentPlan = async (id) => {
  return await PaymentPlan.destroy({ where: { id: id } });
}