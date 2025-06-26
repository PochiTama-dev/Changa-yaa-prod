import { PostImage, Post, User, Role, Profession, Category } from '../sequelize/models/Associations.js';

export const getAllPostImages = async () => {
  return await PostImage.findAll({
    include: [{ model: Post,include: [
        { model: User, include: [{ model: Role }] },
        { model: Profession,include: [{ model: Category }]  }
      ] }]
  });
};

export const getPostImageById = async (id) => {
  return await PostImage.findByPk(id, {
    include: [{ model: Post,include: [
        { model: User, include: [{ model: Role }] },
        { model: Profession,include: [{ model: Category }]  }
      ] }]
  });
};

export const createPostImage = async (postImage) => {
  const newPostImage = postImage.files.map((file) => {
    return { id_post: postImage.body.id_post, image: file.path}
  }); 
  return await PostImage.bulkCreate(newPostImage);
};

export const updatePostImage = async (id, postImage) => {
  const [updated] = await PostImage.update({image: postImage.files[0].path}, { where: { id } });
  if (updated) {
    return await PostImage.findByPk(id, {
        include: [{ model: Post,include: [
            { model: User, include: [{ model: Role }] },
            { model: Profession,include: [{ model: Category }]  }
          ] }]
    });
  }
  return null;
};

export const deletePostImage = async (id) => {
  return await PostImage.destroy({ where: { id } });
};
