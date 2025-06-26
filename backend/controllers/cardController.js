import * as cardService from '../services/cardService.js';

export const getAllCards = async (req, res) => {
  try {
    const cards = await cardService.getAllCards();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las tarjetas', error });
  }
};

export const getCardById = async (req, res) => {
  try {
    const card = await cardService.getCardById(req.params.id);
    if (card) {
      res.status(200).json(card);
    } else {
      res.status(404).json({ message: 'Tarjeta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la tarjeta', error });
  }
};

export const createCard = async (req, res) => {
  try {
    const card = await cardService.createCard(req.body);
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la tarjeta', error });
  }
};

export const updateCard = async (req, res) => {
  try {
    const updated = await cardService.updateCard(req.params.id, req.body);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Tarjeta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la tarjeta', error });
  }
};

export const deleteCard = async (req, res) => {
  try {
    const deleted = await cardService.deleteCard(req.params.id);
    if (deleted) {
      res.status(200).json({ message: 'Tarjeta eliminada' });
    } else {
      res.status(404).json({ message: 'Tarjeta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la tarjeta', error });
  }
};
