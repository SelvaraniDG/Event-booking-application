const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Event = sequelize.define('Event', {
  event_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2)
  },
  date: {
    type: DataTypes.DATE
  },
  age_group: {
    type: DataTypes.STRING
  },
  venue: {
    type: DataTypes.STRING
  },
  category: {
    type: DataTypes.STRING
  },
  image_url: {
    type: DataTypes.STRING
  },
  created_by: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'user_id'
    }
  }
});

module.exports = Event;