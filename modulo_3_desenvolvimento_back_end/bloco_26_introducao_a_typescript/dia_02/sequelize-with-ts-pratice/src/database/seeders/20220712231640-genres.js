'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('genres', [
      { genre: 'Programação' },
      { genre: 'Romance' },
      { genre: 'Realismo' },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genres', null, {});
  }
};