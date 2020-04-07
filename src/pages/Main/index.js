import React, { useState } from 'react';
import Scanner from './Scanner/index';
import Results from './Scanner/Results';


function Main() {
  const [isbn, setIsbn] = useState(); // * Test with isbn = 9788576082675
  return (
    <>
      <Scanner onScan={setIsbn} />
      {isbn && <Results isbn={isbn} />}

    </>
  )
}

export default Main;