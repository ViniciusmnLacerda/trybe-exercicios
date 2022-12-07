import sequelize from 'sequelize';
import Author from './database/models/Author';
import Book from './database/models/Book';

(async () => {
  const authorsBooks = await Author.findAll({
    raw: true,
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'books'],
    ],
    group: 'authors.name',
    order: [
      ['books', 'DESC'],
      ['name', 'ASC'],
    ],
  });

  console.log(authorsBooks);

  process.exit(0);
})();