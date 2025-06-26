import {
  User,
  Role,
  UsersProfession,
  UsersCategory,
  Profession,
  Category,
} from "../sequelize/models/Associations.js";
import CryptoJS from "crypto-js";

export const getAllUsers = async () => {
  return await User.findAll({
    include: [
      { model: Role },
      { model: UsersProfession, include: { model: Profession } },
      { model: UsersCategory, include: { model: Category } },
    ],
  });
};

export const getUserById = async (id) => {
  return await User.findByPk(id, {
    include: [
      { model: Role },
      { model: UsersProfession, include: { model: Profession } },
      { model: UsersCategory, include: { model: Category } },
    ],
  });
};

export const getUserByEmail = async (email) => {
  return await User.findOne({
    where: { email },
    include: [
      { model: Role },
      { model: UsersProfession, include: { model: Profession } },
      { model: UsersCategory, include: { model: Category } },
    ],
  });
};

export const createUser = async (userData) => {
  return await User.create({
    id_role: userData.body.id_role,
    email: userData.body.email,
    pass: CryptoJS.AES.encrypt(userData.body.pass, "Changa-Yaa").toString(),
    name: userData.body.name,
    surname: userData.body.surname,
    legend: userData.body.legend,
    phone: userData.body.phone,
    address: userData.body.address,
    location: userData.body.location,
    latitude: userData.body.latitude,
    longitude: userData.body.longitude,
    alternative_address: userData.body.alternative_address,
    alternative_location: userData.body.alternative_location,
    alternative_latitude: userData.body.alternative_latitude,
    alternative_longitude: userData.body.alternative_longitude,
    front_document: userData.files.front_document[0].path,
    avatar: userData.files.avatar[0].path,
    banner: userData.body.banner,
    availability: userData.body.availability || null,
  });
};

export const updateUser = async (id, userData) => {
  if (userData.file !== undefined) {
    const [updated] = await User.update(
      {
        id_role: userData.body.id_role,
        email: userData.body.email,
        pass: CryptoJS.AES.encrypt(userData.body.pass, "Changa-Yaa").toString(),
        name: userData.body.name,
        surname: userData.body.surname,
        legend: userData.body.legend,
        phone: userData.body.phone,
        address: userData.body.address,
        location: userData.body.location,
        latitude: userData.body.latitude,
        longitude: userData.body.longitude,
        alternative_address: userData.body.alternative_address,
        alternative_location: userData.body.alternative_location,
        alternative_latitude: userData.body.alternative_latitude,
        alternative_longitude: userData.body.alternative_longitude,
        avatar: userData.file.path,
        banner: userData.body.banner,
        availability: userData.body.availability || null,
      },
      {
        where: { id: id },
      }
    );
    if (updated) {
      return await User.findByPk(id, {
        include: [
          { model: Role },
          { model: UsersProfession, include: { model: Profession } },
          { model: UsersCategory, include: { model: Category } },
        ],
      });
    }
  } else {
    const [updated] = await User.update(
      {
        id_role: userData.body.id_role,
        email: userData.body.email,
        pass: CryptoJS.AES.encrypt(userData.body.pass, "Changa-Yaa").toString(),
        name: userData.body.name,
        surname: userData.body.surname,
        legend: userData.body.legend,
        phone: userData.body.phone,
        address: userData.body.address,
        location: userData.body.location,
        latitude: userData.body.latitude,
        longitude: userData.body.longitude,
        alternative_address: userData.body.alternative_address,
        alternative_location: userData.body.alternative_location,
        alternative_latitude: userData.body.alternative_latitude,
        alternative_longitude: userData.body.alternative_longitude,
        banner: userData.body.banner,
        availability: userData.body.availability || null,
      },
      {
        where: { id: id },
      }
    );
    if (updated) {
      return await User.findByPk(id, {
        include: [
          { model: Role },
          { model: UsersProfession, include: { model: Profession } },
          { model: UsersCategory, include: { model: Category } },
        ],
      });
    }
  }
  return null;
};

export const deleteUser = async (id) => {
  return await User.destroy({ where: { id: id } });
};
