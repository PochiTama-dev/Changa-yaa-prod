import * as professionService from '../services/professionService.js';

export const getAllProfessions = async (req, res) => {
  try {
    const professions = await professionService.getAllProfessions();
    res.status(200).json(professions);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las profesiones', error });
  }
};

export const getProfessionById = async (req, res) => {
  try {
    const profession = await professionService.getProfessionById(req.params.id);
    if (profession) {
      res.status(200).json(profession);
    } else {
      res.status(404).json({ message: 'Profesión no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la profesión', error });
  }
};

export const createProfession = async (req, res) => {
  try {
    const profession = await professionService.createProfession(req.body);
    res.status(201).json(profession);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la profesión', error });
  }
};

export const updateProfession = async (req, res) => {
  try {
    const updated = await professionService.updateProfession(req.params.id, req.body);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Profesión no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la profesión', error });
  }
};

export const deleteProfession = async (req, res) => {
  try {
    const deleted = await professionService.deleteProfession(req.params.id);
    if (deleted) {
        res.status(200).json({ message: 'Profesión eliminado' });
    } else {
      res.status(404).json({ message: 'Profesión no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la profesión', error });
  }
};
