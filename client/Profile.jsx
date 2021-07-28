import React from 'react'
import { PieChart } from 'recharts'



const getUserData = (id) => {}

export const Profile = ({ id, googleId }) => {

  console.log('inside profile')

  fetch(`/scores/getUserResults/:id`)
  // fetch(`/scores/getUserResults/:${googleId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })


  return (
    <div>
      merp
    </div>
  )

}