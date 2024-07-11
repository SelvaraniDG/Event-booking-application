const { DataTypes } = require('sequelize');
const sequelize = require('../index');
const User = require('./user');
const Event = require('./event');

const Booking = sequelize.define('Booking', {
  booking_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  num_tickets: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ticket_buyer_name: {
    type: DataTypes.STRING
  },
  payment_status: {
    type: DataTypes.STRING
  }
});

Booking.belongsTo(User, { foreignKey: 'user_id' });
Booking.belongsTo(Event, { foreignKey: 'event_id' });

module.exports = Booking;