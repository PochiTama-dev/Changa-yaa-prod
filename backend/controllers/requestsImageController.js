import * as requestsImageService from '../services/requestsImageService.js';
import { deleteImage } from '../validations/imagesValidator.js';

export const getAllRequestsImages = async (req, res) => {
    try {
        const requestsImages = await requestsImageService.getAllRequestsImages();
        res.status(200).json(requestsImages);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las imágenes de solicitudes', error });
    }
};

export const getRequestsImageById = async (req, res) => {
    try {
        const requestsImage = await requestsImageService.getRequestsImageById(req.params.id);
        if (requestsImage) {
            res.status(200).json(requestsImage);
        } else {
            res.status(404).json({ message: 'Imagen de solicitud no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la imagen de solicitud', error });
    }
};

export const createRequestsImage = async (req, res) => {
    try {
        const requestsImage = await requestsImageService.createRequestsImage(req);
        res.status(201).json(requestsImage);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la imagen de solicitud', error });
    }
};

export const updateRequestsImage = async (req, res) => {
    try {
        const requestsImage = await requestsImageService.getRequestsImageById(req.params.id);
        deleteImage(requestsImage.image);
        const updated = await requestsImageService.updateRequestsImage(req.params.id, req);
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ message: 'Imagen de solicitud no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la imagen de solicitud', error });
    }
};

export const deleteRequestsImage = async (req, res) => {
    try {
        const requestsImage = await requestsImageService.getRequestsImageById(req.params.id);
        deleteImage(requestsImage.image);
        const deleted = await requestsImageService.deleteRequestsImage(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Imagen de solicitud eliminada' });
        } else {
            res.status(404).json({ message: 'Imagen de solicitud no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la imagen de solicitud', error });
    }
};
