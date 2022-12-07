import { INTEGER, Model, STRING } from "sequelize";
import db from '.';
import Author from './Author';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId: number;
}

Book.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  authorId: {
    type: INTEGER,
    allowNull: false,
    // field: 'author_id',
    references: {
      model: 'authors',
      key: 'id',
    }
  },
  genreId: {
    type: INTEGER,
    allowNull: false,
    // field: 'genre_id',
    references: {
      model: 'genres',
      key: 'id',
    }
  },
}, {
  sequelize: db,
  modelName: 'books',
  timestamps: false,
  // underscored: true,
});

Book.belongsTo(Author, { foreignKey: 'id' });

Author.hasMany(Book, { foreignKey: 'authorId' });

export default Book;