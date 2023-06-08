import React from 'react';

import QRCode from 'react-qr-code';

function App() {
  const inputClasses = `border border-gray-300 w-full h-8 p-4 font-light text-sm focus:outline-none
    focus:border-gray-600 mt-10`;

  const [inputValue, setInputValue] = React.useState('');

  return (
    <div className='container mx-auto w-2/4'>
      <input
        onChange={e => setInputValue(e.target.value)}
        placeholder='https://www.youtube.com/watch?v=0MRJBbylyzs'
        className={inputClasses} />
        <QRCode
          className='mx-auto mt-28'
          value={inputValue} />
    </div>
  );
}

export default App;
