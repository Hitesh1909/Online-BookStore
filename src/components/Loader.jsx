import React from 'react';

const Loader = ({ text = 'Loading...' }) => {
  return (
    <div className="text-center p-4">
      <div className="animate-spin inline-block w-6 h-6 border-4 border-blue-400 border-t-transparent rounded-full"></div>
      <p className="mt-2">{text}</p>
    </div>
  );
};

export default Loader;
