import { UsersNetwork, User, Network, Role } from '../sequelize/models/Associations.js';

export const getAllUsersNetworks = async () => {
    return await UsersNetwork.findAll({
        include: [
            { model: User, include: [{ model: Role }] },
            { model: Network }
        ]
    });
};

export const getUsersNetworkById = async (id) => {
    return await UsersNetwork.findByPk(id, {
        include: [
            { model: User, include: [{ model: Role }] },
            { model: Network }
        ]
    });
};

export const getUsersNetworksByUserId = async (id_user) => {
    return await UsersNetwork.findAll({
        where: { id_user },
        include: [
            { model: User, include: [{ model: Role }] },
            { model: Network }
        ]
    });
};

export const createUsersNetwork = async (usersNetwork) => {
    return await UsersNetwork.create(usersNetwork);
};

export const updateUsersNetwork = async (id, usersNetwork) => {
    const [updated] = await UsersNetwork.update(usersNetwork, { where: { id } });
    if (updated) {
        return await UsersNetwork.findByPk(id, {
            include: [
                { model: User, include: [{ model: Role }] },
                { model: Network }
            ]
        });
    }
    return null;
};

export const deleteUsersNetwork = async (id) => {
    return await UsersNetwork.destroy({ where: { id } });
};
