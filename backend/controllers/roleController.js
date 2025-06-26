import * as roleService from '../services/roleService.js';

export const getAllRoles = async (req, res) => {
  try {
    const roles = await roleService.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los roles', error  });
  }
};

export const getRoleById = async (req, res) => {
  try {
    const role = await roleService.getRoleById(req.params.id);
    if (role) {
      res.status(200).json(role);
    } else {
      res.status(404).json({ message: 'Rol no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el rol', error });
  }
};

export const createRole = async (req, res) => {
  try {
    const role = await roleService.createRole(req.body);
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el rol', error });
  }
};

export const updateRole = async (req, res) => {
  try {
    const updated = await roleService.updateRole(req.params.id, req.body);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Role no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el rol', error });
  }
};

export const deleteRole = async (req, res) => {
  try {
    const deleted = await roleService.deleteRole(req.params.id);
    if (deleted) {
      res.status(200).json({ message: 'Rol eliminado' });
    } else {
      res.status(404).json({ message: 'Rol no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el rol', error  });
  }
};
