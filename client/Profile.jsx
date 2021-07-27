import React from 'react'
import { PieChart } from 'recharts'

const getUserData = (id) => {
  fetch('/userStats')
  .then(res => res.json())
  .then(data => console.log(data)) //set userProfile state)
}

export const Profile = () => {
  return (
    <div>
      
    </div>
  )
}
