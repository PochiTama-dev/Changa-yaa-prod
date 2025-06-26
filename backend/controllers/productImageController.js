import * as productImageService from '../services/productImageService.js';
import { deleteImage } from '../validations/imagesValidator.js';

export const getAllProductImages = async (req, res) => {
    try {
        const productImages = await productImageService.getAllProductImages();
        res.status(200).json(productImages);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las imágenes de productos', error });
    }
};

export const getProductImageById = async (req, res) => {
    try {
        const productImage = await productImageService.getProductImageById(req.params.id);
        if (productImage) {
            res.status(200).json(productImage);
        } else {
            res.status(404).json({ message: 'Imagen de producto no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la imagen del producto', error });
    }
};

export const createProductImage = async (req, res) => {
    try {
        const productImage = await productImageService.createProductImage(req);
        res.status(201).json(productImage);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la imagen del producto', error });
    }
};

export const updateProductImage = async (req, res) => {
    try {
        const productImage = await productImageService.getProductImageById(req.params.id);
        deleteImage(productImage.image);
        const updated = await productImageService.updateProductImage(req.params.id, req);
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ message: 'Imagen de producto no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la imagen del producto', error });
    }
};

export const deleteProductImage = async (req, res) => {
    try {
        const productImage = await productImageService.getProductImageById(req.params.id);
        deleteImage(productImage.image);
        const deleted = await productImageService.deleteProductImage(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Imagen de producto eliminada' });
        } else {
            res.status(404).json({ message: 'Imagen de producto no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la imagen del producto', error });
    }
};
