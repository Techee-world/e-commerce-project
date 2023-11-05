import React, { useEffect } from 'react'
import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";
import bigSofa from "../../assets/images/product-bigsofa.png";
import chair from "../../assets/images/product-chair.png";
import sofa from "../../assets/images/product-sofa.png";
import kitchen from "../../assets/images/kitchen.png";
import matrass from "../../assets/images/matrass.png";
import bedroom from "../../assets/images/bedroom.png";

function NewArrival() {

 useEffect(() => {
   if (document.querySelector(".splide")) {
     let splide = new Splide(".splide", {
       type: "loop",
       focus: 0,
       gap: "1rem",
       perPage: 4,
       breakpoints: {
         640: {
           perPage: 2,
         },
         480: {
           perPage: 1,
         },
       },
     });

     splide.mount();
     
   }
 }, []);
 const cardList = [
  {img: bigSofa, name: 'GUYER CHAIR',price:'$45.00',outPrice: '$500.00'},
  {img: chair, name: 'PURPLE CHAIR',price:'$45.00',outPrice: '$500.00'},
  {img: sofa, name: 'LARGE SOFA',price:'$45.00',outPrice: '$500.00'},
  {img: kitchen, name: 'PERFECTO KITCHEN',price:'$45.00',outPrice: '$500.00'},
  {img: matrass, name: 'MATRASS COMFORT +',price:'$45.00',outPrice: '$500.00'},
  {img: bedroom, name: 'QUEEN SIZE BED',price:'$45.00',outPrice: '$500.00'}
 ]
  return (
    <div>
      <p class="mx-auto mt-10 mb-5 max-w-[1200px] px-5">TOP NEW ARRIVAL</p>
      <section
      class="splide mx-auto max-w-[1200px] px-5 py-2"
      aria-label="Splide Basic HTML Example"
    >
      <div class="splide__track">
        <ul class="splide__list mx-auto max-w-[1200px] flex">
          {cardList.map((items)=>
          <li class="splide__slide">
            <div class="flex flex-col">
              <img
                class=""
                src={items.img}
                alt="sofa image"
              />

              <div>
                <p class="mt-2">{items.name}</p>
                <p class="font-medium text-violet-900">
                 {items.price}
                  <span class="text-sm text-gray-500 line-through"
                    >{items.outPrice}</span>
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
          </li>
          )}

        </ul>
      </div>
    </section>
    </div>
  );
}

export default NewArrival