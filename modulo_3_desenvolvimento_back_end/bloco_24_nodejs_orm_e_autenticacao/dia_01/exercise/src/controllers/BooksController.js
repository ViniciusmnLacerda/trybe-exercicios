const BookService = require('../services/BookService');

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.getById(id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(book);
};

const create = async (req, res) => {
  const newBook = req.body;
  const book = await BookService.create(newBook);

  res.status(201).json(book);
};

const update = async (req, res) => {
  const { id } = req.params;
  const bookToBeUpdated = req.body;
  const bookUpdated = await BookService.update(id, bookToBeUpdated);
  
  if (!bookUpdated) return res.status(404).json({ message: 'Book not found' });
  res.status(201).json({ message: 'Book updated' });
}

const remove = async (req, res) => {
  const { id } = req.params;

  const removed = await BookService.remove(id);

  if (!removed) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book removed' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};