import * as postPostulateService from '../services/postPostulateService.js';

export const getAllPostPostulates = async (req, res) => {
  try {
    const postPostulates = await postPostulateService.getAllPostPostulates();
    res.status(200).json(postPostulates);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las postulaciones de los posts', error });
  }
};

export const getPostPostulateById = async (req, res) => {
  try {
    const postPostulate = await postPostulateService.getPostPostulateById(req.params.id);
    if (postPostulate) {
      res.status(200).json(postPostulate);
    } else {
      res.status(404).json({ message: 'Postulación de post no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la postulación del post', error });
  }
};

export const getPostPostulateByIdPostulate = async (req, res) => {
  try {
    const post = await postPostulateService.getPostPostulateByIdPostulate(req.params.idPostulate);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el post', error });
  }
};

export const getPostPostulateByIdPost = async (req, res) => {
  try {
    const post = await postPostulateService.getPostPostulateByIdPost(req.params.idPost);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el post', error });
  }
};



export const createPostPostulate = async (req, res) => {
  try {
    const postPostulate = await postPostulateService.createPostPostulate(req.body);
    res.status(201).json(postPostulate);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la postulación del post', error });
  }
};

export const updatePostPostulate = async (req, res) => {
  try {
    const updated = await postPostulateService.updatePostPostulate(req.params.id, req.body);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ message: 'Postulación de post no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la postulación del post', error });
  }
};

export const deletePostPostulate = async (req, res) => {
  try {
    const deleted = await postPostulateService.deletePostPostulate(req.params.id);
    if (deleted) {
        res.status(200).json({ message: 'Postulación de post eliminada' });
    } else {
      res.status(404).json({ message: 'Postulación de post no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la postulación del post', error });
  }
};
