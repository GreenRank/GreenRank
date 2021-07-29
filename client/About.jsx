import React from "react";
import { useHistory } from "react-router";

export const About = () => {
  let count = 0;
  const history = useHistory();

  // fetch()
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     count = data.count;
  //   });

  const goBack = () => history.push('/Home')

  return (
    <div id='about'>
      <button onClick={goBack} id='go-back'>go back</button>
      <img src='https://lh3.googleusercontent.com/proxy/ZR9JToynrdlcEQ1medMETPVnOea6BQqd-rLUxI1QOguJ2GVhHHArSI_gQRmLPXGTH0neeDFzIQx_B5A9cbjgPXLh0QYsCCOge0fZV-LckCAGme4EvohnSNwARAy79KzcPjEuIsY3kSjgP5uMX0BwTpp5pPSTyU-iGgeMS6fa1w' alt='clowns' id='about-img'></img>
      <div className='about-desc'>Four cool clowns just trying to save the world...</div>
      <div id='about-count'>{ count }</div>
      <button onClick={count++} className='about-desc'>
        Join us on our journey to reduce carbon emissions
      </button>
      <img src='https://media1.giphy.com/media/U1aN4HTfJ2SmgB2BBK/giphy.gif' alt='greta' id='greta'></img>
    </div>
  );
};
