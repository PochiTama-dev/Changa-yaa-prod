import { Card, User, Role } from '../sequelize/models/Associations.js';

export const getAllCards = async () => {
  return await Card.findAll({
    include: [{ model: User, include: [{ model: Role }] }]
  });
};

export const getCardById = async (id) => {
  return await Card.findByPk(id, {
    include: [{ model: User, include: [{ model: Role }] }]
  });
};

export const createCard = async (card) => {
  return await Card.create(card);
};

export const updateCard = async (id, card) => {
  const [updated] = await Card.update(card, { where: { id } });
  if (updated) {
    return await Card.findByPk(id, {
      include: [{ model: User, include: [{ model: Role }] }]
    });
  }
  return null;
};
export const deleteCard = async (id) => {
  return await Card.destroy({ where: { id } });

};
