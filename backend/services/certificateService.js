import { Certificate, User,Role } from '../sequelize/models/Associations.js';

export const getAllCertificates = async () => {
    return await Certificate.findAll({
        include: [{ model: User, include: [{ model: Role }] }]
    });
};

export const getCertificateById = async (id) => {
    return await Certificate.findByPk(id, {
        include: [{ model: User, include: [{ model: Role }] }]
    });
};

export const getCertificateByIdUser = async (idUser) => {
    return await Certificate.findAll({
      where: { id_user: idUser },
      include: [{ model: User, include: [{ model: Role }] }]
    });
  };

export const createCertificate = async (data) => {
    
    if (Array.isArray(data.body.title)) {
        const users = [...data.body.id_user];
        const titles = [...data.body.title];
        const jobs = [...data.body.job];
        const images = [...data.files];
    
        const certificates = users.map((user) => {
            return { id_user: user};
        });
        certificates.map((certificate, i) => {
            return certificate['title'] = titles[i];
        });
        certificates.map((certificate, i) => {
            return certificate['job'] = jobs[i];
        });
        certificates.map((certificate, i) => {
            return certificate['certificate'] = images[i].path;
        });
    
        return await Certificate.bulkCreate(certificates);
    } else {
        return await Certificate.create({ 
            id_user: data.body.id_user,
            title: data.body.title,
            job: data.body.job,
            certificate: data.files[0].path 
        });
    }
};

export const updateCertificate = async (id, certificate) => {
    certificate.files.forEach(async (file) => {
        await Certificate.update({ certificate: file.path }, { where: { id } });
    });
    return await Certificate.findAll({ 
        include: [{ model: User, include: [{ model: Role }]}],
        where: { id }
    });
};

export const deleteCertificate = async (id) => {
    return await Certificate.destroy({ where: { id } });
};
