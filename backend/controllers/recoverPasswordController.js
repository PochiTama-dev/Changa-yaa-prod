import { sendRecoveryEmail } from '../services/recoverPasswordService.js';

export const recoverPassword = async (req, res) => {
    const email = req.params.email;
    const check = req.query.check; 

    if (!email || !check) {
        return res.status(400).json({ error: 'Email y código de verificación son requeridos' });
    }

    try {
        const data = await sendRecoveryEmail(email, check);
        res.status(200).json(data);
    } catch (error) {
        console.error('Error al enviar correo:', error);
        res.status(400).json({ error: 'Error al enviar correo de recuperación' });
    }
};
