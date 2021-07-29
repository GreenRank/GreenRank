import React, { useState }from "react";

export const About = () => {
  const [count, setCount] = useState(40841)

  return (
    <div id='about'>
      <img src='https://lh3.googleusercontent.com/proxy/Y5VnSajRc_P-JKAQZW-uAVIr6ej0KX5dc2IXIoIO_P3maf8sCMSBNlSqyU9nGVLcy2Hn6aTc-QabvwlYJm36BPI2K6ixHu4' alt='clowns' id='about-img'></img>
      <div className='about-desc'>Four cool clowns just trying to save the world...</div>
      <div id='about-count'>{ `${count.toString().slice(0,2)},${count.toString().slice(2)}` }</div>
      <button onClick={() => setCount(count+15)} className='about-desc'>
        Join us on our journey to reduce carbon emissions
      </button>
      <img src='https://media1.giphy.com/media/U1aN4HTfJ2SmgB2BBK/giphy.gif' alt='greta' id='greta'></img>
      <div className='about-desc'>sheeeeeeeesh!</div>
    </div>
  );
};
