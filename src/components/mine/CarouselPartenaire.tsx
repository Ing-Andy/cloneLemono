import React, { useRef } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Link } from 'react-router-dom'

export default function CarouselPartenaire() {
    const plugin = useRef(Autoplay({delay:3000,stopOnInteraction: true}))
  return (
    <Carousel className='w-full rounded pl-4' opts={{align:'start'}} plugins={[plugin.current]}>
        <CarouselContent className='mx-2 flex justify-start *:h-50 *:mr-5 *:max-w-1/4 *:rounded-md *:border-[1px] bg1 *:overflow-hidden *:group '>
            <CarouselItem>
              <div className="*group-hover:scale-120 max-h-full">
                <h3 className='text-center text-xl text-white w-full font-extrabold' >Jfn-Hui</h3>
                <p className="flex mb-4 w-1/2 text-gray-400">Nous sommes une l'ecole superieur de la technologie et de l'innovation situer a DOUALA</p>
                <span className='group'>voir <Link to='' className='uppercase hover:text-gray-100 group-hover:underline duration-300 '>jfn</Link></span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="*group-hover:scale-120 max-h-full">
                <h3 className='text-center text-xl text-white w-full font-extrabold' >SOPPO Sarl</h3>
                <p className="flex mb-4 w-1/2 text-gray-400">Nous sommes une entreprise de geni-civil et tout ce qui concerne l'infra-structure </p>
                <span className='group'>voir <Link to='' className='uppercase hover:text-gray-100 group-hover:underline duration-300 '>Soppo sarl</Link></span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="*group-hover:scale-120 max-h-full">
                <h3 className='text-center text-xl text-white w-full font-extrabold' >N - M - D</h3>
                <p className="flex mb-4 w-1/2 text-gray-400">Nous sommes une entreprise aerospastiale la premiere d'afrique central </p>
                <span className='group'>voir <Link to='' className='uppercase hover:text-gray-100 group-hover:underline duration-300 '>N - M - D</Link></span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="*group-hover:scale-120 max-h-full">
                <h3 className='text-center text-xl text-white w-full font-extrabold' >MBOA TECH</h3>
                <p className="flex mb-4 w-1/2 text-gray-400">Nous sommes une start up de creation lien en main de sites, applications web et mobile</p>
                <span className='group'>voir <Link to='' className='uppercase hover:text-gray-100 group-hover:underline duration-300 '>MBOA TECH</Link></span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="*group-hover:scale-120 max-h-full">
                <h3 className='text-center text-xl text-white w-full font-extrabold' >Nextventure</h3>
                <p className="flex mb-4 w-1/2 text-gray-400">Nous sommes une start up de creation lien en main de sites, applications web et mobile</p>
                <span className='group'>voir <Link to='' className='uppercase hover:text-gray-100 group-hover:underline duration-300 '>Nextventure</Link></span>
              </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}
