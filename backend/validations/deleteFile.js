import fs from "fs";
import path from "path";

export const deleteFile = (req) => {
  if (req.files) {
    if (req.files.avatar && req.files.avatar[0]) {
      const avatarPath = path.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        "../uploads",
        req.files.avatar[0].filename
      );
      fs.existsSync(avatarPath) && fs.unlinkSync(avatarPath);
    }
    if (req.files.front_document && req.files.front_document[0]) {
      const documentPath = path.resolve(
        path.dirname(new URL(import.meta.url).pathname),
        "../uploads",
        req.files.front_document[0].filename
      );
      fs.existsSync(documentPath) && fs.unlinkSync(documentPath);
    }
  }
};



export default deleteFile;
