import Tesseract from "tesseract.js";

const forbiddenPatterns = [
  /https?:\/\/[^\s]+/g, // Links
  /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, // Emails
  /\b\d{10,}\b/g, // Números de teléfono
  /\b\d{1,5}\s(?:[A-ZÁÉÍÓÚÑa-záéíóúñ]+(?:\s[A-ZÁÉÍÓÚÑa-záéíóúñ]+)*)(?:\s#?\d{1,5}[A-Za-z]?)?\b/g, // Direcciones
];

export const validateImageContent = async (imagePath) => {
  try {
    const {
      data: { text },
    } = await Tesseract.recognize(imagePath, "eng+spa");
    console.log("Texto extraído:", text.trim());

    if (!text.trim()) {
      console.log("El texto extraído está vacío o contiene solo espacios.");
      return true;
    }

    for (const pattern of forbiddenPatterns) {
      if (pattern.test(text)) {
        console.log("Patrón prohibido detectado:", pattern);
        return false;
      }
    }
    return true;
  } catch (error) {
    console.error("Error al reconocer el texto de la imagen:", error);
    return false;
  }
};
