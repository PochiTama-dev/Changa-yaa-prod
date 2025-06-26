import { Category, Post, Profession, Request, RequestsImage, Role, User } from '../sequelize/models/Associations.js';

export const getAllRequestsImages = async () => {
    return await RequestsImage.findAll({
        include: [
            {
                model: Request, include: [
                    { model: User, as: 'contractingUser', include: [{ model: Role }] },
                    { model: User, as: 'contractedUser', include: [{ model: Role }] },
                    {
                        model: Post, include: [
                            { model: User, include: [{ model: Role }] },
                            { model: Profession, include: [{ model: Category }] }
                        ]
                    }
                ]
            },
            { model: User, include: [{ model: Role }] },
        ]
    });
};

export const getRequestsImageById = async (id) => {
    return await RequestsImage.findByPk(id,{
        include: [
            {
                model: Request, include: [
                    { model: User, as: 'contractingUser', include: [{ model: Role }] },
                    { model: User, as: 'contractedUser', include: [{ model: Role }] },
                    {
                        model: Post, include: [
                            { model: User, include: [{ model: Role }] },
                            { model: Profession, include: [{ model: Category }] }
                        ]
                    }
                ]
            },
            { model: User, include: [{ model: Role }] },
        ]
    });
};

export const createRequestsImage = async (requestsImage) => {
    requestsImage.files.forEach(async (file) => {
        await RequestsImage.create({ id_request: requestsImage.body.id_request, id_user: requestsImage.body.id_user, image: file.path});
    });
    return await RequestsImage.findAll({ where: { id_request: requestsImage.body.id_request } });
};

export const updateRequestsImage = async (id, requestsImage) => {
    const [updated] = await RequestsImage.update({ image: requestsImage.files[0].path }, { where: { id } });
    if (updated) {
        return await RequestsImage.findByPk(id,{
            include: [
                {
                    model: Request, include: [
                        { model: User, as: 'contractingUser', include: [{ model: Role }] },
                        { model: User, as: 'contractedUser', include: [{ model: Role }] },
                        {
                            model: Post, include: [
                                { model: User, include: [{ model: Role }] },
                                { model: Profession, include: [{ model: Category }] }
                            ]
                        }
                    ]
                },
                { model: User, include: [{ model: Role }] },
            ]
        });
    }
    return null;
};

export const deleteRequestsImage = async (id) => {
    return await RequestsImage.destroy({ where: { id } });
};
