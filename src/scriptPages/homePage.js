import React from 'react'
import Promotion from '../scripts/products/promotion'
import Chickens from '../scripts/products/chickens'
import Dessert from '../scripts/products/dessert'
import Drinks from '../scripts/products/drinks'
import FollowUp from '../scripts/products/followUp'
import Ribs from '../scripts/products/ribs'
import Sousage from '../scripts/products/sausage'

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