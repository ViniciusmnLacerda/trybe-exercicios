const express = require('express');

const bookController = require('./src/controllers/BooksController');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/books', bookController.getAll);

app.get('/books/:id', bookController.getById)

app.post('/books', bookController.create)

app.put('/books/:id', bookController.update)

app.delete('/books/:id', bookController.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));