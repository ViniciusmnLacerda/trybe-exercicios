'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('authors', [
      { name: 'Robert C Martin' },
      { name: 'Jorge Amado' },
      { name: 'Machado de Assis' },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('authors', null, {});
  }
};