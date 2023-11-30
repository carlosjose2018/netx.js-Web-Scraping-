"use client"


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";



const heroImagem = [
  {imgUrl:'/assets/images/hero-1.svg', alt:'smart watch'},
  {imgUrl:'/assets/images/hero-2.svg', alt:'Bolsa'},
  {imgUrl:'/assets/images/hero-3.svg', alt:'Abajú'},
  {imgUrl:'/assets/images/hero-4.svg', alt:'Philips'},
  {imgUrl:'/assets/images/hero-5.svg', alt:'Cadeira'}
]
const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
       <Carousel
    showThumbs={false}
    autoPlay
    infiniteLoop
    interval={2000}
    showArrows={false}
    showStatus={false}
    >
     
      {
        heroImagem.map((hero) =>(
          <div>
           <Image
           key={hero.alt}
           src={hero.imgUrl}
           alt={hero.alt}
           width={484}
           height={484}
           className="object-contain"
          /> 
          <p>{hero.alt}</p>
          </div>
          
        ))
      }
    </Carousel>
    <Image
    src="/assets/icons/hand-drawn-arrow.svg"
    width={175}
    height={175}
    alt="Arrow"
    className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
    />
    </div>
   
  )
}

export default HeroCarousel