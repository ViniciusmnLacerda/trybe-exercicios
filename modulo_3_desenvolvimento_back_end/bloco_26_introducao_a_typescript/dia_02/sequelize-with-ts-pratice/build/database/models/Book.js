"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Author_1 = __importDefault(require("./Author"));
class Book extends sequelize_1.Model {
}
Book.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    authorId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        // field: 'author_id',
        references: {
            model: 'authors',
            key: 'id',
        }
    },
    genreId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        // field: 'genre_id',
        references: {
            model: 'genres',
            key: 'id',
        }
    },
}, {
    sequelize: _1.default,
    modelName: 'books',
    timestamps: false,
    // underscored: true,
});
Book.belongsTo(Author_1.default, { foreignKey: 'id' });
Author_1.default.hasMany(Book, { foreignKey: 'authorId' });
exports.default = Book;