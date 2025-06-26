import { Advertising, PaymentPlan, User, Role, Category, Profession } from '../sequelize/models/Associations.js';
import fs from 'fs';

export const getAllAdvertisings = async () => {
  return await Advertising.findAll({
    include: [{ model: PaymentPlan }, { model: User }, { model: Role }, { model: Category }, { model: Profession }]
  });
};

export const getAdvertisingById = async (id) => {
  return await Advertising.findByPk(id, {
    include: [{ model: PaymentPlan }, { model: User }, { model: Role }, { model: Category }, { model: Profession }]
  });
};

export const createAdvertising = async (data) => {
  return await Advertising.create({
    id_user: data.body.id_user,
    id_role: data.body.id_role,
    id_category: data.body.id_category,
    id_profession: data.body.id_profession,
    id_payment: data.body.id_payment,    
    title: data.body.title,
    description: data.body.description,
    image: data.file.path,
    location: data.body.location
  });
};

export const updateAdvertising = async (data) => {
  if (data.file !== undefined) {
    const [updated] = await Advertising.update({
      id_user: data.body.id_user,
      id_role: data.body.id_role,
      id_category: data.body.id_category,
      id_profession: data.body.id_profession,
      id_payment: data.body.id_payment,
      banned: data.body.banned,    
      title: data.body.title,
      description: data.body.description,
      image: data.file.path,
      location: data.body.location,
      clicks: data.body.clicks,
      views: data.body.views
    }, {
        where: { id: data.params.id }
    });
    if (updated) {
      const advertising = await Advertising.findByPk(data.params.id);
      fs.existsSync(advertising.image) && fs.unlinkSync(advertising.image);
      return await Advertising.findByPk(data.params.id,{
        include: [{ model: PaymentPlan }, { model: User }, { model: Role }, { model: Category }, { model: Profession }]
      });
    }
} else {
    const [updated] = await Advertising.update({
      id_user: data.body.id_user,
      id_role: data.body.id_role,
      id_category: data.body.id_category,
      id_profession: data.body.id_profession,
      id_payment: data.body.id_payment,
      banned: data.body.banned,    
      title: data.body.title,
      description: data.body.description,
      location: data.body.location,
      clicks: data.body.clicks,
      views: data.body.views
    }, {
        where: { id: data.params.id }
    });
    if (updated) {
      return await Advertising.findByPk(data.params.id,{
        include: [{ model: PaymentPlan }, { model: User }, { model: Role }, { model: Category }, { model: Profession }]
      });
    }
  }
  return null;
};

export const deleteAdvertising = async (id) => {
  return await Advertising.destroy({ where: { id: id } });
};