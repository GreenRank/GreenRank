import React from 'react'
import { PieChart } from 'recharts'


// INSERT INTO scores("googleId", score, mobility_vehicles, consumption_food, consumption_shopping, household_area, household_building, household_heating)
// VALUES (110466235164956177628, 1000, 1000, 1000, 1000, 1000, 1000, 1000)

//raubern 110466235164956177628
//walker 104839810786696328275
//nitin 107255365807708839204
//ian 101352106495401777171


const getUserData = (id) => {}

export const Profile = () => {

  fetch('getUserResults')
    .then(res => res.json())
    .then(data => console.log(data)) //set userProfile state)


  return (
    <div>
      
    </div>
  )

}