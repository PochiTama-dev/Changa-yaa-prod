import { Profession, UsersProfession } from '../sequelize/models/Associations.js';

export const getAllUsersProfessions = async () => {
    return await UsersProfession.findAll({ include: { model: Profession } });
};

export const createUsersProfessions = async (userData) => {
    return await UsersProfession.bulkCreate( userData );
};

export const deleteUsersProfessions = async (id) => {
    return await UsersProfession.destroy({ where: { id: id } });
};

export const deleteUsersProfessionsByUser = async (idUser) => {
    return await UsersProfession.destroy({ where: { id_user: idUser } });
};