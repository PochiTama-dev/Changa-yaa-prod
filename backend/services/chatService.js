import { Chat, User, Role } from '../sequelize/models/Associations.js';

export const getAllChats = async () => {
    return await Chat.findAll({
        include: [
            { model: User, as: 'sender', include: [{ model: Role }] },
            { model: User, as: 'receiver', include: [{ model: Role }] },
        ]
    });
};

export const getChatById = async (id) => {
    return await Chat.findByPk(id, {
        include: [
            { model: User, as: 'sender', include: [{ model: Role }] },
            { model: User, as: 'receiver', include: [{ model: Role }] },
        ]
    });
};

export const createChat = async (chat) => {
    console.log(chat.file)
    try {
        return await Chat.create({
            id_sender_user: chat.body.id_sender_user,
            id_receiver_user: chat.body.id_receiver_user,
            message: chat.body.message && chat.body.message,
            image_reference: chat.file && chat.file.fieldname === 'image_reference' ? chat.file.path : null,
            video_reference: chat.file && chat.file.fieldname === 'video_reference' ? chat.file.path : null,
            audio_reference: chat.body.audio_reference && chat.body.audio_reference
        });
    } catch (error) {
        console.log(error);
    }
};

export const updateChat = async (id, chat) => {
    const [updated] = await Chat.update(chat, { where: { id } });
    if (updated) {
      return await Chat.findByPk(id, {
        include: [
            { model: User, as: 'sender', include: [{ model: Role }] },
            { model: User, as: 'receiver', include: [{ model: Role }] },
        ]
      });
    }
    return null;
};

export const deleteChat = async (id) => {
    return await Chat.destroy({ where: { id } });
};

export const markChatAsSeen = async (chatId) => {
    const [updated] = await Chat.update(
        { reviewed: 1 },
        { where: { id: chatId } }
    );
    if (updated) {
        return await Chat.findByPk(chatId, {
            include: [
                { model: User, as: 'sender', include: [{ model: Role }] },
                { model: User, as: 'receiver', include: [{ model: Role }] },
            ]
        });
    }
    return null;
};