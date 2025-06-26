import { User } from "../sequelize/models/Associations.js";
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import CryptoJS from "crypto-js";

dotenv.config();

// Configuración de transporte de nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Función para generar un código de 6 dígitos
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();



// Solicitar recuperación de contraseña
export const requestPasswordReset = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('El email no está registrado.');

  const otp = generateOTP();
  const expires = new Date(Date.now() + 10 * 60 * 1000); // Expira en 3 minutos

  await User.update(
    { resetCode: otp, resetCodeExpires: expires },
    { where: { email } }
  );

  // Enviar correo con el código
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Recuperación de contraseña - Código de verificación',
    text: `
  Hola,
  
  Recibimos una solicitud para restablecer la contraseña de tu cuenta. 
  
  Tu código de verificación es: ${otp}
  
  ⚠️ Por razones de seguridad, **no compartas este código con nadie**. Nadie del equipo de soporte te pedirá este código.
  
  Este código es válido por 3 minutos. Si no solicitaste este cambio, puedes ignorar este mensaje.
  
  Atentamente,
  El equipo de soporte.
    `.trim()
  });
  

  return { message: 'Código enviado al email.' };
};

// Verificar código OTP
export const verifyOTP = async (email, otp) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.resetCode !== otp || new Date(user.resetCodeExpires) < new Date()) {
    throw new Error('Código inválido o expirado.');
  }

  // Generar token para cambiar contraseña
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '15m' });
  console.log(token);

  return { message: 'Código verificado.', token };
};

// Cambiar contraseña
export const resetPassword = async (email, newPassword, token) => {
  try {
    console.log(process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    if (decoded.email !== email) throw new Error('Token inválido.');

    const hashedPassword = CryptoJS.AES.encrypt(newPassword, "Changa-Yaa").toString();

    await User.update(
      { pass: hashedPassword, resetCode: null, resetCodeExpires: null },
      { where: { email } }
    );

    return { message: 'Contraseña actualizada exitosamente.' };
  } catch (error) {
    throw new Error('Token expirado o inválido.');
  }
};
