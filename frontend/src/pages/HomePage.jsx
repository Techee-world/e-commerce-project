import React from 'react'
import Home from '../componetes/home/Home'
import Categories from '../componetes/home/Categories'
import NewArrival from '../componetes/home/NewArrival'
import Ad from '../componetes/home/Ad'
import Recommend from '../componetes/home/Recommend'

function HomePage() {
  return (
    <div>
      <Home />
      <Categories />
      <NewArrival />
      <Ad />
      <p class="mx-auto mt-10 mb-5 max-w-[1200px] px-5">RECOMMENDED FOR YOU</p>
      <Recommend />
    </div>
  );
}

export default HomePage