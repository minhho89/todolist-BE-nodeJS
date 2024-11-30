'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { DataTypes } = Sequelize;
    await queryInterface.createTable('tasks', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prioprity: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'Low',
      },
      description: {  
        type: DataTypes.TEXT,
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 'false',
        field: 'is_done',
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'updated_at',
      },
      dueDate: {
        type: DataTypes.DATE,
        field: 'due_date',
        allowNull: true,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('tasks');
  }
};
