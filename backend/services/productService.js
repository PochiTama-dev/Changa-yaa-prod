import { Product, ProductImage, User, Role } from '../sequelize/models/Associations.js';


export const getAllProducts = async () => {
  return await Product.findAll({
    include: [{ model: User, include: [{ model: Role }] }, { model: ProductImage }]
  });
};

export const getProductById = async (id) => {
  return await Product.findByPk(id, {
    include: [{ model: User, include: [{ model: Role }] }]
  });
};

export const createProduct = async (product) => {
  return await Product.create(product);
};

export const updateProduct = async (id, product) => {
  const [updated] = await Product.update(product, { where: { id } });
  if (updated) {
    return await Product.findByPk(id, {
        include: [{ model: User, include: [{ model: Role }] }]
    });
  }
  return null;
};

export const deleteProduct = async (id) => {
  return await Product.destroy({ where: { id } });
};
