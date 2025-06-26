import * as chatService from '../services/chatService.js';
import { io } from '../app.js';

export const getAllChats = async (req, res) => {
  try {
    const chats = await chatService.getAllChats();
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los chats', error });
  }
};

export const getChatById = async (req, res) => {
  try {
    const chat = await chatService.getChatById(req.params.id);
    if (chat) {
      res.status(200).json(chat);
    } else {
      res.status(404).json({ message: 'Chat no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el chat', error });
  }
};

export const createChat = async (req, res) => {
   try {
     const chat = await chatService.createChat(req);
     // Emitir evento a través de Socket.IO cuando se crea un nuevo chat
     io.emit('chatCreated', chat);
     res.status(201).json(chat);
   } catch (error) {
     res.status(500).json({ message: 'Error al crear el chat', error });
   }
};

export const updateChat = async (req, res) => {
  try {
    const updated = await chatService.updateChat(req.params.id, req.body);
    if (updated) {
      // Emitir evento a través de Socket.IO cuando se actualiza un chat
      io.emit('chatUpdated', updated);
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Chat no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el chat', error });
  }
};

// ejemplo: marcar como visto
export const markChatAsSeen = async (req, res) => {
  try {
    const chat = await chatService.markChatAsSeen(req.params.id);

    if (chat) {
      const receiverRoom = chat.id_sender_user.toString();
      const data = { id: chat.id };

      console.log(`✅ Emitiendo 'chatSeen' a sala: ${receiverRoom}`);
      console.log('📦 Contenido emitido:', data);

      io.to(receiverRoom).emit('chatSeen', data);

      res.status(200).json(chat);
    } else {
      res.status(404).json({ message: 'Chat no encontrado' });
    }
  } catch (error) {
    console.error('❌ Error en markChatAsSeen:', error);
    res.status(500).json({ message: 'Error al marcar como visto', error });
  }
};



export const deleteChat = async (req, res) => {
  try {
    const deleted = await chatService.deleteChat(req.params.id);
    if (deleted) {
        // Emitir evento a través de Socket.IO cuando se elimina un chat
        io.emit('chatDeleted', { message: 'Chat eliminado' });
        res.status(200).json({ message: 'Chat eliminado' });
    } else {
      res.status(404).json({ message: 'Chat no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el chat', error });
  };
};
