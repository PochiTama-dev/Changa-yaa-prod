import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Simular __dirname para ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta absoluta a /uploads
const uploadDir = path.resolve(__dirname, "../uploads");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // <- Usamos la ruta absoluta
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

export default upload;
