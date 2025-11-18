import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/notifications/user/1') // Replace with actual user ID
      .then(res => setNotifications(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6">Your Notifications</h2>
      {loading ? (
        <p>Loading notifications...</p>
      ) : notifications.length === 0 ? (
        <p>No notifications available.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((note, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded shadow">
              <p className="font-semibold text-blue-600">{note.type}</p>
              <p>{note.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationPage;
