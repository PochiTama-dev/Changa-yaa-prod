import { Reason } from '../sequelize/models/Associations.js';

export const getAllReasons = async () => {
    return await Reason.findAll();
};

export const getReasonById = async (id) => {
    return await Reason.findByPk(id);
};

export const getReasonByStar = async (stars) => {
    return await Reason.findAll({
          where: { stars },
          
        });
};

export const createReason = async (reason) => {
    return await Reason.create(reason);
};

export const updateReason = async (id, reason) => {
    const [updated] = await Reason.update(reason, { where: { id } });
    if (updated) {
        return await Reason.findByPk(id);
    }
    return null;
};

export const deleteReason = async (id) => {
    return await Reason.destroy({ where: { id } });
};
