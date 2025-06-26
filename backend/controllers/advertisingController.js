import * as advertisingService from '../services/advertisingService.js';
import fs from 'fs';

export const getAllAdvertisings = async (req, res) => {
  try {
    const advertisings = await advertisingService.getAllAdvertisings();
    res.status(200).json(advertisings);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los avisos publicitarios...', error });
  }
};

export const getAdvertisingById = async (req, res) => {
  try {
    const advertising = await advertisingService.getAdvertisingById(req.params.id);
    if (advertising) {
      res.status(200).json(advertising);
    } else {
      res.status(404).json({ message: 'Aviso publicitario no encontrado...' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el aviso publicitario...', error });
  }
};

export const createAdvertising = async (req, res) => {
  try {
    const advertising = await advertisingService.createAdvertising(req);
    res.status(201).json(advertising);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el aviso...', error });
  }
};

export const updateAdvertising = async (req, res) => {
  try {
    const updated = await advertisingService.updateAdvertising(req);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'El aviso no pudo ser modificado...' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el aviso publicitario...', error });
  }
};

export const deleteAdvertising = async (req, res) => {
  try {
    const advertising = await advertisingService.getAdvertisingById(req.params.id);
    fs.existsSync(advertising.image) && fs.unlinkSync(advertising.image);
    const deleted = await advertisingService.deleteAdvertising(req.params.id);
    if (deleted) {
      res.status(200).json({ message: 'Publicidad eliminada con exito!' });
    } else {
      res.status(404).json({ message: 'Aviso publicitario no encontrado...' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el aviso publicitario...', error });
  }
};