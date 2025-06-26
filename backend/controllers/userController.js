import * as userService from "../services/userService.js";
import fs from "fs";
import { validationResult } from "express-validator";
import {
  registerPersistences,
  updatePersistences,
} from "../validations/persistences.js";
import deleteFile from "../validations/deleteFile.js";
import deleteAvatar from "../validations/deleteAvatar.js";
import CryptoJS from "crypto-js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el usuario", error });
  }
};

export const getUserByEmail = async (req, res) => {
  try {
    const user = await userService.getUserByEmail(req.params.email);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el usuario", error });
  }
};

export const createUser = async (req, res) => {
  // const errors = validationResult(req);
  // const validations = registerPersistences(errors, req);
  // if (!errors.isEmpty()) {
  //   deleteFile(req);
  //   res.status(400).json(validations);
  // } else if (
  //   req.files.avatar === undefined ||
  //   req.files.front_document === undefined
  // ) {
  //   res.status(400).json(validations);
  // } else if (
  //   req.files.avatar[0].size > 1000000 ||
  //   req.files.front_document[0].size > 1000000
  // ) {
  //   res.status(400).json(validations);
  // } else if (req.invalidImages && req.invalidImages.length > 0) {
  //   res.status(400).json({
  //     message: "Algunas imágenes no son válidas y no se subirán",
  //     invalidImages: req.invalidImages,
  //   });
  // } else {
  try {
    const user = await userService.createUser(req);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario", error });
    // }
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);

    if (user) {
      if (req.file && user.avatar) {
        fs.existsSync(user.avatar) && fs.unlinkSync(user.avatar);
      }

      const updated = await userService.updateUser(req.params.id, req);

      if (updated) {
        res.status(200).json(updated);
        console.log(updated)
        console.log(req.file)
      } else {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el usuario", error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Eliminar usuario sin preocuparse por la gestión de archivos
    const deleted = await userService.deleteUser(req.params.id);

    if (deleted) {
      res.status(200).json({ message: "Usuario eliminado" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    res.status(500).json({ message: "Error al eliminar el usuario", error });
  }
};

export const validateUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(200).json({
      emailValue: errors.mapped().email
        ? errors.mapped().email.value
        : req.body.email,
      emailError: errors.mapped().email
        ? errors.mapped().email.msg
        : "Correo válido!!",
      passValue: errors.mapped().pass
        ? errors.mapped().pass.value
        : req.body.pass,
      passError: errors.mapped().pass && errors.mapped().pass.msg,
    });
  } else {
    try {
      const users = await userService.getAllUsers();
      let result = null;
      users.forEach((user) => {
        const decryptedPassword = CryptoJS.AES.decrypt(
          user.pass,
          "Changa-Yaa"
        ).toString(CryptoJS.enc.Utf8);
        if (
          req.body.email === user.email &&
          req.body.pass === decryptedPassword
        ) {
          result = user;
        }
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el usuario" });
    }
  }
};