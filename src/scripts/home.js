import React from 'react'
import Promotion from './products/promotion'
import Chickens from './products/chickens'
import Dessert from './products/dessert'
import Drinks from './products/drinks'
import FollowUp from './products/followUp'
import Ribs from './products/ribs'
import Sousage from './products/sausage'

const Home = () => {
  return (
    <div className="all_product">
      <Promotion />
      <Chickens />
      <Sousage />
      <FollowUp />
      <Ribs />
      <Dessert />
      <Drinks />
    </div>
  )
}

export default Home;