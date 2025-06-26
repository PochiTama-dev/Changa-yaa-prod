import { Network } from '../sequelize/models/Associations.js';

export const getAllNetworks = async () => {
  return await Network.findAll();
};

export const getNetworkById = async (id) => {
  return await Network.findByPk(id);
};

export const createNetwork = async (network) => {
  return await Network.create(network);
};

export const updateNetwork = async (id, network) => {
    const [updated] = await Network.update(network, { where: { id } });
    if (updated) {
      return await Network.findByPk(id);
    }
    return null;
  };

export const deleteNetwork = async (id) => {
  return await Network.destroy({ where: { id } });
};
