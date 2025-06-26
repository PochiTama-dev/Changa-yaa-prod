import * as productService from '../services/productService.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto', error });
  }
};

export const createProduct = async (req, res) => {
    try {
      const product = await productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el producto', error });
    }
  };
  
    export const updateProduct = async (req, res) => {
    try {
      const updated = await productService.updateProduct(req.params.id, req.body);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el producto', error });
    }
  };
  
    export const deleteProduct = async (req, res) => {
    try {
      const deleted = await productService.deleteProduct(req.params.id);
      if (deleted) {
        res.status(200).json({ message: 'Producto eliminado' });
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el producto', error });
    }
  };