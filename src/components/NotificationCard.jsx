import React from 'react';

const NotificationCard = ({ type, message }) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <p className="font-semibold text-blue-600">{type}</p>
      <p>{message}</p>
    </div>
  );
};

export default NotificationCard;
