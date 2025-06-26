import { Resend } from 'resend';

const resend = new Resend('re_NqwoMHPV_HbjPk6GgkVDU7bh4eNdNqZ9V');

export const sendRecoveryEmail = async (email, check) => {
    try {
        const data = await resend.emails.send({
            from: 'Changa-Yaa <soporteChanga-Yaa@resend.dev>',
            to: [email],
            subject: 'Recuperación de contraseña',
            html: `<strong>Código de verificación: ${check}</strong>`,
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
