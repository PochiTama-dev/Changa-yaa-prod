import { Post, PostImage, User, Role, Profession, Category } from '../sequelize/models/Associations.js';

export const getAllPosts = async () => {
  return await Post.findAll({
    include: [
      { model: User, include: [{ model: Role }] },
      { model: Profession, include: [{ model: Category }] },
      { model: PostImage }
    ]
  });
};

export const getPostById = async (id) => {
  return await Post.findByPk(id, {
    include: [
      { model: User, include: [{ model: Role }] },
      { model: Profession, include: [{ model: Category }] },
      { model: PostImage }
    ]
  });
};

export const getPostByIdUser = async (idUser) => {
  return await Post.findAll({
    where: { id_User:idUser },
    include: [
      { model: User, include: [{ model: Role }] },
      { model: Profession, include: [{ model: Category }] },
      { model: PostImage }
    ]
  });
};

export const createPost = async (post) => {
  return await Post.create(post);
};

export const updatePost = async (id, post) => {
  const [updated] = await Post.update(post, { where: { id } });
  if (updated) {
    return await Post.findByPk(id, {
      include: [
        { model: User, include: [{ model: Role }] },
        { model: Profession, include: [{ model: Category }] }
      ]
    });
  }
  return null;
};

export const deletePost = async (id) => {
  return await Post.destroy({ where: { id } });
};
