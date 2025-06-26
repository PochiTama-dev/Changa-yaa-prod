import { Category, Profession, Rating, Reason, Role, Scribbler, ScribblerImage, User } from '../sequelize/models/Associations.js';

export const getAllRatings = async () => {
    return await Rating.findAll({
        include: [
            { model: User, as: 'contractingUser', include: [{ model: Role }] },
            { model: User, as: 'contractedUser', include: [{ model: Role }] },
            { model: Reason },
            {
                model: Scribbler, include: [
                    { model: User, include: [{ model: Role }] },
                    { model: Profession, include: [{ model: Category }] },
                    { model: ScribblerImage }
                ]
            },
        ]
    });
};

export const getRatingById = async (id) => {
    return await Rating.findByPk(id, {
        include: [
            { model: User, as: 'contractingUser', include: [{ model: Role }] },
            { model: User, as: 'contractedUser', include: [{ model: Role }] },
            { model: Reason },
            {
                model: Scribbler, include: [
                    { model: User, include: [{ model: Role }] },
                    { model: Profession, include: [{ model: Category }] },
                    { model: ScribblerImage }
                ]
            },
        ]
    });
};

export const getRatingByContractedUser = async (id_contracted_user) => {
    return await Rating.findAll({
        where: { id_contracted_user },
        include: [
            { model: User, as: 'contractingUser', include: [{ model: Role }] },
            { model: User, as: 'contractedUser', include: [{ model: Role }] },
            { model: Reason },
            {
                model: Scribbler, include: [
                    { model: User, include: [{ model: Role }] },
                    { model: Profession, include: [{ model: Category }] },
                    { model: ScribblerImage }
                ]
            },
        ]
    });
};

export const createRating = async (rating) => {
    console.log(rating);
    
    return await Rating.create(rating);
};

export const updateRating = async (id, rating) => {
    const [updated] = await Rating.update(rating, { where: { id } });
    if (updated) {
        return await Rating.findByPk(id, {
            include: [
                { model: User, as: 'contractingUser', include: [{ model: Role }] },
                { model: User, as: 'contractedUser', include: [{ model: Role }] },
                { model: Reason },
                {
                    model: Scribbler, include: [
                        { model: User, include: [{ model: Role }] },
                        { model: Profession, include: [{ model: Category }] },
                        { model: ScribblerImage }
                    ]
                },
            ]
        });
    }
    return null;
};

export const deleteRating = async (id) => {
    return await Rating.destroy({ where: { id } });
};
