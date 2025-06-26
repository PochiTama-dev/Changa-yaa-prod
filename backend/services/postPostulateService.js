import { PostPostulate, Post, User, Role, Profession, Category, Scribbler, ScribblerImage, UsersProfession, UsersCategory } from '../sequelize/models/Associations.js';

export const getAllPostPostulates = async () => {
    return await PostPostulate.findAll({
        include: [
            {
                model: Scribbler, include: [
                    { model: User, include: [{ model: Role }] },
                    { model: Profession, include: [{ model: Category }] },
                    { model: ScribblerImage }
                ]
            },
            { model: User, include: [{ model: Role }] }
        ]
    });
};

export const getPostPostulateById = async (id) => {
    console.log("service");
    return await PostPostulate.findByPk(id, {
        include: [
            {
                model: Scribbler, include: [
                    { model: User, include: [{ model: Role }] },
                    { model: Profession, include: [{ model: Category }] },
                    { model: ScribblerImage }
                ]
            },
            { model: User, include: [{ model: Role }] }
        ]
    });
};

export const getPostPostulateByIdPostulate = async (idPostulate) => {
    return await PostPostulate.findAll({
      where: { id_postulate: idPostulate },
      include: [
        {
            model: Scribbler, include: [
                { model: User, include: [{ model: Role }] },
                { model: Profession, include: [{ model: Category }] },
                { model: ScribblerImage }
            ]
        },
        { model: User, include: [{ model: Role }] }
    ]
    });
  };

  export const getPostPostulateByIdPost = async (idPost) => {
    return await PostPostulate.findAll({
      where: { id_post: idPost },
      include: [
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
        { model: User, include: [
            { model: Role }, 
            { model: UsersProfession, include: { model: Profession } }, 
            { model: UsersCategory, include: { model: Category } }
        ] }
    ]
    });
  };

export const createPostPostulate = async (postPostulate) => {
    return await PostPostulate.create(postPostulate);
};

export const updatePostPostulate = async (id, postPostulate) => {
    const [updated] = await PostPostulate.update(postPostulate, { where: { id } });
    if (updated) {
        return await PostPostulate.findByPk(id, {
            include: [
                {
                    model: Scribbler, include: [
                        { model: User, include: [{ model: Role }] },
                        { model: Profession, include: [{ model: Category }] },
                        { model: ScribblerImage }
                    ]
                },
                { model: User, include: [{ model: Role }] }
            ]
        });
    }
    return null;
};

export const deletePostPostulate = async (id) => {
    return await PostPostulate.destroy({ where: { id } });
};
