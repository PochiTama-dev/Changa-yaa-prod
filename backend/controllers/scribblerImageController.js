import * as scribblerImageService from "../services/scribblerImageService.js";
import { deleteImage } from "../validations/imagesValidator.js";

export const getAllScribblerImages = async (req, res) => {
  try {
    const scribblerImages = await scribblerImageService.getAllScribblerImages();
    res.status(200).json(scribblerImages);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las imágenes de los dibujantes",
      error,
    });
  }
};

export const getScribblerImageById = async (req, res) => {
  try {
    const scribblerImage = await scribblerImageService.getScribblerImageById(
      req.params.id
    );
    if (scribblerImage) {
      res.status(200).json(scribblerImage);
    } else {
      res.status(404).json({ message: "Imagen de dibujante no encontrada" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener la imagen del dibujante", error });
  }
};

export const createScribblerImage = async (req, res) => {
  try {
    if (req.invalidImages.length > 0) {
      return res.status(400).json({
        message: "Algunas imágenes no son válidas y no se subirán",
        invalidImages: req.invalidImages,
      });
    }

    const scribblerImage = await scribblerImageService.createScribblerImage(
      req
    );
    res.status(201).json(scribblerImage);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear la imagen del dibujante", error });
  }
};

export const updateScribblerImage = async (req, res) => {
  try {
    const scribblerImage = await scribblerImageService.getScribblerImageById(
      req.params.id
    );
    deleteImage(scribblerImage.image);
    const updated = await scribblerImageService.updateScribblerImage(
      req.params.id,
      req
    );
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: "Imagen de dibujante no encontrada" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar la imagen del dibujante", error });
  }
};

export const deleteScribblerImage = async (req, res) => {
  try {
    const scribblerImage = await scribblerImageService.getScribblerImageById(
      req.params.id
    );
    deleteImage(scribblerImage.image);
    const deleted = await scribblerImageService.deleteScribblerImage(
      req.params.id
    );
    if (deleted) {
      res.status(200).json({ message: "Imagen de dibujante eliminada" });
    } else {
      res.status(404).json({ message: "Imagen de dibujante no encontrada" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar la imagen del dibujante", error });
  }
};
