import {
  ScribblerImage,
  Scribbler,
  User,
  Role,
  Profession,
  Category,
} from "../sequelize/models/Associations.js";

export const getAllScribblerImages = async () => {
  return await ScribblerImage.findAll({
    include: [
      {
        model: Scribbler,
        include: [
          { model: User, include: [{ model: Role }] },
          { model: Profession, include: [{ model: Category }] },
        ],
      },
    ],
  });
};

export const getScribblerImageById = async (id) => {
  return await ScribblerImage.findByPk(id, {
    include: [
      {
        model: Scribbler,
        include: [
          { model: User, include: [{ model: Role }] },
          { model: Profession, include: [{ model: Category }] },
        ],
      },
    ],
  });
};

export const createScribblerImage = async (scribblerImage) => {
  try {
    const createdImages = [];
    for (const file of scribblerImage.files) {
      if (!scribblerImage.invalidImages.includes(file.path)) {
        const createdImage = await ScribblerImage.create({
          id_scribbler: scribblerImage.body.id_scribbler,
          image: file.path,
        });
        createdImages.push(createdImage);
      }
    }
    return await ScribblerImage.findAll({
      where: { id_scribbler: scribblerImage.body.id_scribbler },
    });
  } catch (error) {
    console.error("Error al crear las imágenes del dibujante:", error);
    throw error;
  }
};

export const updateScribblerImage = async (id, scribblerImage) => {
  const [updated] = await ScribblerImage.update(
    { image: scribblerImage.files[0].path },
    { where: { id } }
  );
  if (updated) {
    return await ScribblerImage.findByPk(id, {
      include: [
        {
          model: Scribbler,
          include: [
            { model: User, include: [{ model: Role }] },
            { model: Profession, include: [{ model: Category }] },
          ],
        },
      ],
    });
  }
  return null;
};

export const deleteScribblerImage = async (id) => {
  return await ScribblerImage.destroy({ where: { id } });
};
