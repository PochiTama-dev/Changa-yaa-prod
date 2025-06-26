import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Simular __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const deleteAvatar = (req) => {
  if (req.file !== undefined) {
    const avatarPath = path.resolve(__dirname, "../uploads", req.file.filename);
    if (fs.existsSync(avatarPath)) {
      fs.unlinkSync(avatarPath);
    }
  }
};

export default deleteAvatar;
