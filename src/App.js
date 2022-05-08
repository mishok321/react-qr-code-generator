import React from 'react';

import './App.css';
import QRCode from 'react-qr-code';

function App() {
  const inputClasses = `border border-gray-300 w-full h-8 p-4 font-light text-sm focus:outline-none
    focus:border-gray-600`; // перенос из-за того что строка слишком длинная и занимает много места
    // в редакторе

  const [inputValue, setInputValue] = React.useState('');

  return (
    <div className='container mx-auto w-2/4'>
      <h1 className='py-4'>
        Введите ссылку для генерации QR-кода:
      </h1>
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
