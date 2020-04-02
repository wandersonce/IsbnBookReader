import React, { useState } from 'react';
import Scanner from './Scanner/index';
import Results from './Scanner/Results';


function Main() {
  const [isbn, setIsbn] = useState('9788576082675');
  return (
    <>
      {/* <Scanner onScan={setIsbn} /> */}
      <Results isbn={isbn} />
    </>
  )
}

export default Main;