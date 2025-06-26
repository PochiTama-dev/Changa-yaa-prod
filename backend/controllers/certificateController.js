import * as certificateService from '../services/certificateService.js';
import { deleteImage } from '../validations/imagesValidator.js';

export const getAllCertificates = async (req, res) => {
  try {
    const certificates = await certificateService.getAllCertificates();
    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los certificados', error });
  }
};

export const getCertificateById = async (req, res) => {
  try {
    const certificate = await certificateService.getCertificateById(req.params.id);
    if (certificate) {
      res.status(200).json(certificate);
    } else {
      res.status(404).json({ message: 'Certificado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el certificado', error });
  }
};
export const getCertificateByIdUser = async (req, res) => {
  try {
    const certificate = await certificateService.getCertificateByIdUser(req.params.idUser);
    if (certificate) {
      res.status(200).json(certificate);
    } else {
      res.status(404).json({ message: 'Certificado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el certificado', error });
  }
};

export const createCertificate = async (req, res) => {
  try {
    const certificate = await certificateService.createCertificate(req);
    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el certificado', error });
  }
};

export const updateCertificate = async (req, res) => {
  try {
    const certificate = await certificateService.getCertificateById(req.params.id);
    deleteImage(certificate.certificate);
    const updated = await certificateService.updateCertificate(req.params.id, req);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Certificado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el certificado', error });
  }
};

export const deleteCertificate = async (req, res) => {
  try {
    const certificate = await certificateService.getCertificateById(req.params.id);
    deleteImage(certificate.certificate);
    const deleted = await certificateService.deleteCertificate(req.params.id);
    if (deleted) {
      res.status(200).json({ message: 'Certificado eliminado' });
    } else {
      res.status(404).json({ message: 'Certificado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el certificado', error });
  }
};
