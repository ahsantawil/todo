'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert(
       'Items', 
       [
        {
            name: 'Be with Nodejs, mysql, express',
            TodoId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'FE with Reactjs',
            TodoId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
      ], 
    {},
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
