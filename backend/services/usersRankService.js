import { UsersRank, User, Rank, Role } from '../sequelize/models/Associations.js';

export const getAllUsersRanks = async () => {
    return await UsersRank.findAll({
        include: [
            { model: User, include: [{ model: Role }] },
            { model: Rank }
        ]
    });
};

export const getUsersRankById = async (id) => {
    return await UsersRank.findByPk(id, {
        include: [
            { model: User, include: [{ model: Role }] },
            { model: Rank }
        ]
    });
};
export const getUsersRanksByUserId = async (id_user) => {
    return await UsersRank.findAll({
        where: { id_user },
        include: [
            { model: User, include: [{ model: Role }] },
            { model: Rank }
        ]
    });
};

export const createUsersRank = async (usersRank) => {
    return await UsersRank.create(usersRank);
};

export const updateUsersRank = async (id, usersRank) => {
    const [updated] = await UsersRank.update(usersRank, { where: { id } });
    if (updated) {
        return await UsersRank.findByPk(id, {
            include: [
                { model: User, include: [{ model: Role }] },
                { model: Rank }
            ]
        });
    }
    return null;
};

export const deleteUsersRank = async (id) => {
    return await UsersRank.destroy({ where: { id } });
};
