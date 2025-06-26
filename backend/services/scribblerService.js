import { Category, PostPostulate, Profession, Role, Scribbler, ScribblerImage, User } from '../sequelize/models/Associations.js';

export const getAllScribblers = async () => {
    return await Scribbler.findAll({
        include: [
            { model: User, include: [{ model: Role }] },
            { model: Profession, include: [{ model: Category }] },
            { model: ScribblerImage },
            { model: PostPostulate,  include: [{ model: User, include: [{ model: Role }]}] }
        ]
    });
};

export const getScribblerById = async (id) => {
    return await Scribbler.findByPk(id, {
        include: [
            { model: User, include: [{ model: Role }] },
            { model: Profession, include: [{ model: Category }] },
            { model: ScribblerImage },
            { model: PostPostulate,  include: [{ model: User, include: [{ model: Role }]}] }
        ]
    });
};

export const getScribblerByIdUser = async (idUser) => {
    console.log(idUser);

    return await Scribbler.findAll({
        where: { id_User: idUser },
        include: [
            { model: User, include: [{ model: Role }] },
            { model: Profession, include: [{ model: Category }] },
            { model: ScribblerImage },
            { model: PostPostulate,  include: [{ model: User, include: [{ model: Role }]}] }
        ]
    });
};

export const createScribbler = async (scribbler) => {
    return await Scribbler.create(scribbler);
};

export const updateScribbler = async (id, scribbler) => {
    const [updated] = await Scribbler.update(scribbler, { where: { id } });
    if (updated) {
        return await Scribbler.findByPk(id, {
            include: [
                { model: User, include: [{ model: Role }] },
                { model: Profession, include: [{ model: Category }] },
                { model: ScribblerImage },
                { model: PostPostulate,  include: [{ model: User, include: [{ model: Role }]}] }
            ]
        });
    }
    return null;
};

export const deleteScribbler = async (id) => {
    return await Scribbler.destroy({ where: { id } });
};
