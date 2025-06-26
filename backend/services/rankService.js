import { Rank } from '../sequelize/models/Associations.js';

export const getAllRanks = async () => {
    return await Rank.findAll();
};

export const getRankById = async (id) => {
    return await Rank.findByPk(id);
};

export const createRank = async (rank) => {
    return await Rank.create(rank);
};

export const updateRank = async (id, rank) => {
    const [updated] = await Rank.update(rank, { where: { id } });
    if (updated) {
        return await Rank.findByPk(id);
    }
    return null;
};

export const deleteRank = async (id) => {
    return await Rank.destroy({ where: { id } });
};
