import * as postService from '../services/postService.js';

export const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los posts', error });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el post', error });
  }
};

export const getPostByIdUser = async (req, res) => {
  try {
    const post = await postService.getPostByIdUser(req.params.idUser);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el post', error });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el post', error });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updated = await postService.updatePost(req.params.id, req.body);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Post no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el post', error });
  }
};

export const deletePost = async (req, res) => {
  try {
    const deleted = await postService.deletePost(req.params.id);
    if (deleted) {
        res.status(200).json({ message: 'Post eliminado' });
    } else {
      res.status(404).json({ message: 'Post no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el post', error });
  }
};
