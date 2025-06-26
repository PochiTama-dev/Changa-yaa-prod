import * as requestService from '../services/requestService.js';

export const getAllRequests = async (req, res) => {
    try {
        const requests = await requestService.getAllRequests();
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las solicitudes', error });
    }
};

export const getRequestById = async (req, res) => {
    try {
        const request = await requestService.getRequestById(req.params.id);
        if (request) {
            res.status(200).json(request);
        } else {
            res.status(404).json({ message: 'Solicitud no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la solicitud', error });
    }
};

export const getRequestByIdContractingUser = async (req, res) => {
    console.log(req.params.idContractingUser);
    
  try {
    const request = await requestService.getRequestByIdContractingUser(req.params.idContractingUser);
    if (request) {
      res.status(200).json(request);
    } else {
      res.status(404).json({ message: 'Solicitud no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la Solicitud', error });
  }
};

export const getRequestByIdContractedUser = async (req, res) => {
  try {
    const request = await requestService.getRequestByIdContractedUser(req.params.idContractedUser);
    if (request) {
      res.status(200).json(request);
    } else {
      res.status(404).json({ message: 'Solicitud no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la Solicitud', error });
  }
};

export const createRequest = async (req, res) => {
    try {
        const request = await requestService.createRequest(req.body);
        res.status(201).json(request);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la solicitud', error });
    }
};

export const updateRequest = async (req, res) => {
    try {
        const updated = await requestService.updateRequest(req.params.id, req.body);
        if (updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({ message: 'Solicitud no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la solicitud', error });
    }
};

export const deleteRequest = async (req, res) => {
    try {
        const deleted = await requestService.deleteRequest(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Solicitud eliminada' });
        } else {
            res.status(404).json({ message: 'Solicitud no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la solicitud', error });
    }
};
