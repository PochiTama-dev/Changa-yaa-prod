import { Request, User, Post, Profession, Role, Category, Scribbler, UsersProfession, UsersCategory, ScribblerImage } from '../sequelize/models/Associations.js';

export const getAllRequests = async () => {
    return await Request.findAll({
        include: [
            { model: User, as: 'contractingUser', include: [{ model: Role }] },
            { model: User, as: 'contractedUser', include: [{ model: Role }] },
            {
                model: Scribbler, include: [
                    { model: User, include: [
                                        { model: Role }, 
                                        { model: UsersProfession, include: { model: Profession } }, 
                                        { model: UsersCategory, include: { model: Category } }
                                    ] },
                    { model: Profession, include: [{ model: Category }] },
                    { model: ScribblerImage }
                ]
            },
            { model: Profession, include: [{ model: Category }] }
        ]
    });
};

export const getRequestById = async (id) => {
    return await Request.findByPk(id, {
        include: [
            { model: User, as: 'contractingUser', include: [{ model: Role }] },
            { model: User, as: 'contractedUser', include: [{ model: Role }] },
            {
                model: Scribbler, include: [
                    { model: User, include: [
                                        { model: Role }, 
                                        { model: UsersProfession, include: { model: Profession } }, 
                                        { model: UsersCategory, include: { model: Category } }
                                    ] },
                    { model: Profession, include: [{ model: Category }] },
                    { model: ScribblerImage }
                ]
            },
            { model: Profession, include: [{ model: Category }] }
        ]
    });
};

export const getRequestByIdContractingUser = async (idContractingUser) => {

    return await Request.findAll({
        where: { id_contracting_user: idContractingUser },
        include: [
            { model: User, as: 'contractingUser', include: [{ model: Role }] },
            { model: User, as: 'contractedUser', include: [{ model: Role }] },
            {
                model: Scribbler, include: [
                                { model: User, include: [
                                                    { model: Role }, 
                                                    { model: UsersProfession, include: { model: Profession } }, 
                                                    { model: UsersCategory, include: { model: Category } }
                                                ] },
                                { model: Profession, include: [{ model: Category }] },
                                { model: ScribblerImage }
                ]
            },
            { model: Profession, include: [{ model: Category }] }
        ]
    });
};

export const getRequestByIdContractedUser = async (idContractedUser) => {
    return await Request.findAll({
        where: { id_contracted_user: idContractedUser },
        include: [
            { model: User, as: 'contractingUser', include: [{ model: Role }] },
            { model: User, as: 'contractedUser', include: [{ model: Role }] },
            {
                model: Scribbler, include: [
                                { model: User, include: [
                                                    { model: Role }, 
                                                    { model: UsersProfession, include: { model: Profession } }, 
                                                    { model: UsersCategory, include: { model: Category } }
                                                ] },
                                { model: Profession, include: [{ model: Category }] },
                                { model: ScribblerImage }
                ]
            },
            { model: Profession, include: [{ model: Category }] }
        ]
    });
};

export const createRequest = async (request) => {
    return await Request.create(request);
};

export const updateRequest = async (id, request) => {
    const [updated] = await Request.update(request, { where: { id } });
    if (updated) {
        return await Request.findByPk(id, {
            include: [
                { model: User, as: 'contractingUser', include: [{ model: Role }] },
                { model: User, as: 'contractedUser', include: [{ model: Role }] },
                {
                    model: Scribbler, include: [
                        { model: User, include: [
                                            { model: Role }, 
                                            { model: UsersProfession, include: { model: Profession } }, 
                                            { model: UsersCategory, include: { model: Category } }
                                        ] },
                        { model: Profession, include: [{ model: Category }] },
                        { model: ScribblerImage }
                    ]
                },
                { model: Profession, include: [{ model: Category }] }
            ]
        });
    }
    return null;
};

export const deleteRequest = async (id) => {
    return await Request.destroy({ where: { id } });
};
