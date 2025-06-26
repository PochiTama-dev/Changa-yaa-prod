import { check, body } from 'express-validator';
import { User } from '../sequelize/models/Associations.js';
import CryptoJS from "crypto-js";

export default [
  check('email')
    .trim()
    .notEmpty()
    .bail()
    .withMessage('No olvides ingresar tu email...')
    .matches(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)
    .bail()
    .withMessage('Debe ingresar un email válido.'),

  body('email')
    .custom(async (value) => {
      const user = await User.findOne({ where: { email: value } })
      if (!user) {
        return Promise.reject('Correo no registrado...');
      }
    }),

  check('pass')
    .trim()
    .notEmpty()
    .bail()
    .withMessage('Olvidaste ingresar tu contraseña...'),

  body('pass')
    .custom(async (value, { req }) => {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (user) {
        const decryptedPassword = CryptoJS.AES.decrypt(user.dataValues.pass, "Changa-Yaa").toString(CryptoJS.enc.Utf8);
            if (value !== decryptedPassword) {
          return Promise.reject('Contraseña erronea...');
        } else {
          return true;
        }
      } else {
        return Promise.reject('Contraseña erronea...');
      }
    })
];