import { check, body } from 'express-validator';
import { User } from '../sequelize/models/Associations.js';

export default [
  check('id_role')
    .trim()
    .notEmpty()
    .bail()
    .isNumeric()
    .bail()
    .withMessage('El tipo de usuario es obligatorio.'),

  check('phone')
    .trim()
    .notEmpty()
    .bail()
    .withMessage('*Completa con números, sín espacios, hasta 10 dígitos comenzando con cero.')
    .matches(/^[0-9]*$/i)
    .bail()
    .withMessage('El número de celular es obligatorio.'),

  check('email')
    .trim()
    .notEmpty()
    .bail()
    .withMessage('Ingrese su email.')
    .matches(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)
    .bail()
    .withMessage('Debe ingresar un email válido.'),

  body('email')
    .custom( async (value, {req}) => {
      const user = await  User.findOne({ where: { email: value } }) 
      if(user && Number(user.id) !== Number(req.params.id)){
        return Promise.reject('Este email ya está en uso...');
      }
    }),
    
  check('pass')
    .trim()
    .notEmpty()
    .bail()
    .withMessage('Olvidó escribir una contraseña.')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/i)
    .bail()
    .withMessage('De 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número.'),

  

  check('name')
    .trim()
    .notEmpty()
    .bail()
    .withMessage('Completa con tus nombres.')
    .isLength({min: 3, max: 50})
    .bail()
    .withMessage('Escribe entre 3 y 50 caracteres.')
    .matches(/^[a-zA-Z\sñáéíóúü ]*$/i)
    .bail()
    .withMessage('Complete solo con letras del alfabeto.'),

  check('surname')
    .trim()
    .notEmpty()
    .bail()
    .withMessage('Completa con tus apellidos.')
    .isLength({min: 3, max: 50})
    .bail()
    .withMessage('Escribe entre 3 y 20 caracteres.')
    .matches(/^[a-zA-Z\sñáéíóúü ]*$/i)
    .bail()
    .withMessage('Complete solo con letras del alfabeto.'),

  check('address')
    .trim()
    .notEmpty()
    .bail()
    .withMessage('Necesario para el funcionamiento de la app.'),

  check('alternative_address')
    .trim()
    .notEmpty()
    .bail()
    .withMessage('Necesario para el funcionamiento de la app.'),

  body('alternative_address')
    .custom((value, {req}) => value === req.body.address ? false : true)
    .bail()
    .withMessage('Proporciona un domicilio diferente al anterior')
];