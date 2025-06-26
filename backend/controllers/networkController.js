import * as networkService from '../services/networkService.js';

export const getAllNetworks = async (req, res) => {
  try {
    const networks = await networkService.getAllNetworks();
    res.status(200).json(networks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las redes', error });
  }
};

export const getNetworkById = async (req, res) => {
  try {
    const network = await networkService.getNetworkById(req.params.id);
    if (network) {
      res.status(200).json(network);
    } else {
      res.status(404).json({ message: 'Red no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la red', error });
  }
};

export const createNetwork = async (req, res) => {
  try {
    const network = await networkService.createNetwork(req.body);
    res.status(201).json(network);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la red', error });
  }
};

export const updateNetwork = async (req, res) => {
  try {
    const updated = await networkService.updateNetwork(req.params.id, req.body);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Red no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la red', error });
  }
};

export const deleteNetwork = async (req, res) => {
  try {
    const deleted = await networkService.deleteNetwork(req.params.id);
    if (deleted) {
        res.status(200).json({ message: 'Red eliminada' });
    } else {
      res.status(404).json({ message: 'Red no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la red', error });
  }
};
