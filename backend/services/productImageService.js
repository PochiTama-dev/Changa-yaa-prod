import { ProductImage, Product, User, Role } from '../sequelize/models/Associations.js';

export const getAllProductImages = async () => {
    return await ProductImage.findAll({
        include: [{
            model: Product, include: [
                { model: User, include: [{ model: Role }] }]
        }]
    });
};

export const getProductImageById = async (id) => {
    return await ProductImage.findByPk(id, {
        include: [{
            model: Product, include: [
                { model: User, include: [{ model: Role }] }]
        }]
    });
};

export const createProductImage = async (productImage) => {
    productImage.files.forEach(async (file) => {
        await ProductImage.create({ id_product: productImage.body.id_product, image: file.path});
    });
    return await ProductImage.findAll({ where: { id_product: productImage.body.id_product } });
};

export const updateProductImage = async (id, productImage) => {
    const [updated] = await ProductImage.update({image: productImage.files[0].path}, { where: { id } });
    if (updated) {
        return await ProductImage.findByPk(id, {
            include: [{
                model: Product, include: [
                    { model: User, include: [{ model: Role }] }]
            }]
        });
    }
    return null;
};

export const deleteProductImage = async (id) => {
    return await ProductImage.destroy({ where: { id } });
};
