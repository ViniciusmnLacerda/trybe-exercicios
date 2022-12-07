'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        title: 'Código Limpo',
        authorId: 1,
        genreId: 1
      },
      {
        title: 'Capitães da Areia',
        authorId: 2,
        genreId: 2
      },
      {
        title: 'Dom Casmurro',
        authorId: 3,
        genreId: 3
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};