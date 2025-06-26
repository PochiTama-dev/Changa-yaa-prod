import * as criminalRecordService from '../services/criminalRecordService.js';

export const getAllCriminalRecords = async (req, res) => {
  try {
    const criminalRecords = await criminalRecordService.getAllCriminalRecords();
    res.status(200).json(criminalRecords);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los antecedente', error });
  }
};

export const getCriminalRecordById = async (req, res) => {
  try {
    const criminalRecord = await criminalRecordService.getCriminalRecordById(req.params.id);
    if (criminalRecord) {
      res.status(200).json(criminalRecord);
    } else {
      res.status(404).json({ message: 'Antecedente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el antecedente', error });
  }
};

export const createCriminalRecord = async (req, res) => {
  try {
    const criminalRecord = await criminalRecordService.createCriminalRecord(req);
    res.status(201).json(criminalRecord);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el antecedente', error });
  }
};

export const updateCriminalRecord = async (req, res) => {
  try {
    const criminalRecord = await criminalRecordService.getCriminalRecordById(req.params.id);
    deleteImage(criminalRecord.certificate);
    const updated = await criminalRecordService.updateCriminalRecord(req.params.id, req);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Antecedente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el antecedente', error });
  }
};

export const deleteCriminalRecord = async (req, res) => {
  try {
    const criminalRecord = await criminalRecordService.getCriminalRecordById(req.params.id);
    deleteImage(criminalRecord.certificate);
    const deleted = await criminalRecordService.deleteCriminalRecord(req.params.id);
    if (deleted) {
        res.status(200).json({ message: 'Antecedente eliminado' });
    } else {
      res.status(404).json({ message: 'Antecedente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el antecedente', error });
  }
};
