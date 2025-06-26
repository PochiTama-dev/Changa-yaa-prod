import { log } from 'console';
import { CriminalRecord, User, Role } from '../sequelize/models/Associations.js';

export const getAllCriminalRecords = async () => {
    return await CriminalRecord.findAll({
        include: [{ model: User, include: [{ model: Role }] }]
    });
};

export const getCriminalRecordById = async (id) => {
    return await CriminalRecord.findByPk(id, {
        include: [{ model: User, include: [{ model: Role }] }]
    });
};

export const createCriminalRecord = async (criminalRecord) => {
    try {
      const files = criminalRecord.files;
      const userId = criminalRecord.body.id_user;
  
      const recordsToInsert = files.map((file) => ({
        id_user: userId,
        certificate: file.path,
      }));
  
      // Insertar todos de una sola vez
      await CriminalRecord.bulkCreate(recordsToInsert);
  
      console.log('Registros creados correctamente');
    } catch (error) {
      console.error('Error al crear registros:', error);
    }
  };
  

export const updateCriminalRecord = async (id, criminalRecord) => {
    const [updated] = await CriminalRecord.update({ certificate: criminalRecord.file.path }, { where: { id } });
    if (updated) {
      return await CriminalRecord.findByPk(id, {
        include: [{ model: User, include: [{ model: Role }] }]
      });
    }
    return null;
  };

export const deleteCriminalRecord = async (id) => {
    return await CriminalRecord.destroy({ where: { id } });
};
