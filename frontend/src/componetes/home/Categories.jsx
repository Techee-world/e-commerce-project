import React from 'react'
import bedroom from '../../assets/images/bedroom.png'
import matrass from "../../assets/images/matrass.png";
import outdoors from "../../assets/images/outdoors.png";
import bigsofa from "../../assets/images/product-bigsofa.png";
import kitchen from "../../assets/images/kitchen.png";
import living from "../../assets/images/living-room.png";

function Categories() {
    const imgArray = [
      { img: bedroom, text: "Bedroom" },
      { img: matrass, text: "Matrass" },
      { img: outdoors, text: "Outdoors" },
      { img: bigsofa, text: "Sofa" },
      { img: kitchen, text: "Kitchen" },
      { img: living, text: "Living room" },
    ];
  return (
    <div>
      <h2 class="mx-auto mb-5 max-w-[1200px] px-5">SHOP BY CATHEGORY</h2>
      <section class="mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-3 lg:gap-5">
        {imgArray.map((items)=>
        <span>
          <div class="relative cursor-pointer">
            <img
              class="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
              src={items.img}
              alt="bedroom cathegory image"
            />
            <p class="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
              {items.text}
            </p>
          </div>
        </span>
        )}

      </section>
    </div>
  );
}

export default Categories