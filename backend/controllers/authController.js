import * as authService from '../services/authService.js';



export const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;
    const response = await authService.requestPasswordReset(email);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const response = await authService.verifyOTP(email, otp);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword, token } = req.body;
    const response = await authService.resetPassword(email, newPassword, token);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
