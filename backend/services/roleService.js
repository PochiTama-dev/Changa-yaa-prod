import {Role}  from '../sequelize/models/Associations.js';

export const getAllRoles = async () => {
  return await Role.findAll();
};

export const getRoleById = async (id) => {
  return await Role.findByPk(id);
};

export const createRole = async (role) => {
  return await Role.create(role);
};

export const updateRole = async (id, role) => {
  const [updated] = await Role.update(role, { where: { id } });
  if (updated) {
    return await Role.findByPk(id);
  }
  return null;
};

export const deleteRole = async (id) => {
  return await Role.destroy({ where: { id } });
}; 
