import React, { useState } from 'react';

function internetWarning() {

    const [ hasInternet, setInternetStatus ] = useState(false);

    let text;

    if (navigator.onLine){
        setInternetStatus(true);
    }
    else {
        setInternetStatus(false);
    }

    if (hasInternet) {
        return null;
    }
    else {  
        return (
          <div>
              <h1 className='mt-10 text-center font-bold hover:text-xl text-large hover:duration-500 duration-500 hover:text-gray-300'>Please connect to the internet to play!</h1>
         </div>
        );
    }
}

export default internetWarning;