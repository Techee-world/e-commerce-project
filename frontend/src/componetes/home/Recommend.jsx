import React from 'react'
import chair from '../../assets/images/product-chair.png'
import sofa from '../../assets/images/product-sofa.png'
import kitchen from '../../assets/images/kitchen.png'
import living from '../../assets/images/living-room.png'
import bedroom from '../../assets/images/bedroom.png'
import header from '../../assets/images/header-bg.jpeg'
import outdoors from '../../assets/images/outdoors.png'
import bigsofa from '../../assets/images/product-bigsofa.png'

function Recommend() {
const recommendListCard = [
  { img: chair, name: "CHAIR", price: "$45.00", outPrice: "$500.00" },
  { img: sofa, name: "SOFA", price: "$45.00", outPrice: "$500.00" },
  { img: kitchen, name: "GUYER KITCHEN", price: "$45.00", outPrice: "$500.00" },
  { img: living, name: "GUYER ROOM", price: "$45.00", outPrice: "$500.00" },
  { img: bedroom, name: "BEDROOM", price: "$45.00", outPrice: "$500.00" },
  { img: header, name: "LIVING GUYER", price: "$45.00", outPrice: "$500.00" },
  { img: outdoors, name: "STREET CHAIR", price: "$45.00", outPrice: "$500.00" },
  { img: bigsofa, name: "WHITE SOFA", price: "$45.00", outPrice: "$500.00" },
];

  return (
    <div>
      {/* <p class="mx-auto mt-10 mb-5 max-w-[1200px] px-5">RECOMMENDED FOR YOU</p> */}
      <section class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4">
        {recommendListCard.map((items)=>
        <div class="flex flex-col">
          <div class="relative flex">
            <img class="" src={items.img} alt="sofa image" />
            <div class="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100">
              <a href="product-overview.html">
                <span class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>
              </a>
              <span class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-4 w-4"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </span>
            </div>

            <div class="absolute right-1 mt-3 flex items-center justify-center bg-amber-400">
              <p class="px-2 py-2 text-sm">&minus; 25&percnt; OFF</p>
            </div>
          </div>

          <div>
            <p class="mt-2">{items.name}</p>
            <p class="font-medium text-violet-900">
              {items.price}
              <span class="text-sm text-gray-500 line-through">{items.outPrice}</span>
            </p>

            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-4 w-4 text-yellow-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-4 w-4 text-yellow-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-4 w-4 text-yellow-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-4 w-4 text-yellow-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-4 w-4 text-gray-200"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="text-sm text-gray-400">(38)</p>
            </div>

            <div>
              <button class="my-5 h-10 w-full bg-violet-900 text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        )}



      </section>
    </div>
  );
}

export default Recommend