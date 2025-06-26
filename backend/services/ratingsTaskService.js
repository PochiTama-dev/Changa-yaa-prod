import { Category, Post, Profession, RatingsTask, Request, Role, Task, User } from '../sequelize/models/Associations.js';

export const getAllRatingsTasks = async () => {
    return await RatingsTask.findAll({
        include: [{
            model: Task, include: [
                {
                    model: Request, include: [
                        { model: User, as: 'contractingUser', include: [{ model: Role }] },
                        { model: User, as: 'contractedUser', include: [{ model: Role }] },
                        {
                            model: Post, include: [
                                { model: User, include: [{ model: Role }] },
                                { model: Profession, include: [{ model: Category }] }
                            ]
                        },
                        { model: Profession, include: [{ model: Category }] }
                    ]
                }
            ]
        }]
    });
};

export const getRatingsTaskById = async (id) => {
    return await RatingsTask.findByPk(id,{
        include: [{
            model: Task, include: [
                {
                    model: Request, include: [
                        { model: User, as: 'contractingUser', include: [{ model: Role }] },
                        { model: User, as: 'contractedUser', include: [{ model: Role }] },
                        {
                            model: Post, include: [
                                { model: User, include: [{ model: Role }] },
                                { model: Profession, include: [{ model: Category }] }
                            ]
                        },
                        { model: Profession, include: [{ model: Category }] }
                    ]
                }
            ]
        }]
    });
};

export const createRatingsTask = async (ratingsTask) => {
    return await RatingsTask.create(ratingsTask);
};

export const updateRatingsTask = async (id, ratingsTask) => {
    const [updated] = await RatingsTask.update(ratingsTask, { where: { id } });
    if (updated) {
        return await RatingsTask.findByPk(id,{
            include: [{
                model: Task, include: [
                    {
                        model: Request, include: [
                            { model: User, as: 'contractingUser', include: [{ model: Role }] },
                            { model: User, as: 'contractedUser', include: [{ model: Role }] },
                            {
                                model: Post, include: [
                                    { model: User, include: [{ model: Role }] },
                                    { model: Profession, include: [{ model: Category }] }
                                ]
                            },
                            { model: Profession, include: [{ model: Category }] }
                        ]
                    }
                ]
            }]
        });
    }
    return null;
};

export const deleteRatingsTask = async (id) => {
    return await RatingsTask.destroy({ where: { id } });
};
