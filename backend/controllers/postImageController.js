import { log } from 'console';
import * as postImageService from '../services/postImageService.js';

export const getAllPostImages = async (req, res) => {
  try {
    const postImages = await postImageService.getAllPostImages();
    res.status(200).json(postImages);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las imágenes de los posts', error });
  }
};

export const getPostImageById = async (req, res) => {
  try {
    const postImage = await postImageService.getPostImageById(req.params.id);
    if (postImage) {
      res.status(200).json(postImage);
    } else {
      res.status(404).json({ message: 'Imagen de post no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la imagen del post', error });
  }
};

export const createPostImage = async (req, res) => {
  try {
    const postImage = await postImageService.createPostImage(req);
    res.status(201).json(postImage);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la imagen del post', error });
  }
};

export const updatePostImage = async (req, res) => {
  try {
    const postImage = await postImageService.getPostImageById(req.params.id);
    try {
      deleteImage(postImage.image);
    } catch (imgErr) {
      console.warn('No se pudo eliminar la imagen (posiblemente no existe):', imgErr.message);
    }
    const updated = await postImageService.updatePostImage(req.params.id, req);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Imagen de post no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la imagen del post', error });
  }
};

export const deletePostImage = async (req, res) => { 
  try {
    const postImage = await postImageService.getPostImageById(req.params.id);
    try {
      deleteImage(postImage.image);
    } catch (imgErr) {
      console.warn('No se pudo eliminar la imagen (posiblemente no existe):', imgErr.message);
    }

    const deleted = await postImageService.deletePostImage(req.params.id);
    if (deleted) {
      res.status(200).json({ message: 'Imagen de post eliminada' });
    } else {
      res.status(404).json({ message: 'Imagen de post no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la imagen del post', error });
  }
};
