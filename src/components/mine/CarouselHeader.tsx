import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Heart, Sun } from "lucide-react"
import { Link } from "react-router-dom"
import Autoplay from "embla-carousel-autoplay"
import { useRef, useState } from "react"
import { Button } from "../ui/button"
import ChangeThem from "./ChangeThem"



export default function CarouselHeader() {
    const [ api, setApi ] = useState<CarouselApi>();
    const listStyle = [
        {
            id: 1,
            content: {
                title: "Bienvenue sur notre plateforme !",
                text: "Trouvez le job de vos rêves ou le candidat idéal.",
            },
            bgClass: "bg-gradient-to-r from-blue-200 to-indigo-200",
        },
        {
            id: 2,
            content: {
                title: "Des milliers d'offres d'emploi",
                text: "Découvrez des opportunités uniques chaque jour.",
            },
            bgClass: "bg-gradient-to-r from-green-200 to-teal-200",
        },
        {
            id: 3,
            content: {
                title: "Connectez-vous avec les meilleures entreprises",
                text: "Votre carrière commence ici !",
            },
            bgClass: "bg-gradient-to-r from-purple-200 to-pink-200",
        },
        {
            id: 4,
            content: {
                title: "Facile et Intuitif",
                text: "Postulez en quelques clics ou trouvez votre équipe idéale.",
            },
            bgClass: "bg-gradient-to-r from-yellow-200 to-orange-200",
        },
    ] 
    // let chemin = listStyle[0] === 1 ? '/src/images/carrousselle1Dark.avif' : listStyle[0] === 2 ? '/src/images/carrousselle1.avif' : listStyle[0] === 3 ? '/src/images/carrousselle2.avif' : listStyle[0] === 4 ? '/src/images/loupe-fond-bleu_176503-1379.avif' : '';
    const plugin = useRef(Autoplay({delay: 6000,stopOnInteraction: true}));
  return (
    <div className=' overflow-hidden flex flex-col items-center rounded-b-xl rounded-t-none'>
        <div className="w-full h-full ">
            <Carousel opts={{align: 'center',loop:true}} plugins={[plugin.current]} className="bg-white bg2 dark:bg1 text-white shadow-3xl shadow-gray-500 dark:shadow-[#070707] rounded-md w-full h-[500px] overflow-hidden flex flex-col">
                <NavigationMenu className="mb-5 w-full ">
                    <NavigationMenuList className=" *:text-gray-300 *:hover:text-black max-w-full">
                            <NavigationMenuItem className="">
                                <Link to="/">Home</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="">
                                <Link to="/Entreprise">Entreprise</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="">
                                <Link to="/candidate">candidate</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="">
                                <Link to="/us">us</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="">
                                <Link to="/"><Heart /></Link>
                            </NavigationMenuItem>
                            <ChangeThem />
                            {/* <Button className="bg-transparent hover:scale-110 hover:bg-transparent hover:text-white"><Sun /></Button> */}
                    </NavigationMenuList>
                </NavigationMenu>
                <CarouselContent className="*:text-gray-200 h-full">
                    <CarouselItem >
                        <h2 className="text-4xl uppercase pl-10">bienvenue chez andyLand pour les Chomeures !</h2>
                        <div className="w-3/4 bg-transparent pl-15 text-2xl mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dignissimos dolorum! Eaque, blanditiis sunt dignissimos repellendus ipsam iure doloremque fuga voluptatibus enim maxime molestias aspernatur qui repellat quis tempora deleniti officia explicabo voluptates vitae adipisci ex sed facere praesentium minima!</div>
                        <div className="flex pl-15 gap-4">
                            <Button className="bg-transparent text-gray-200 shadow-md backdrop-blur-3xl cursor-pointer dark:border w-40 mt-6 hover:backdrop-blur-sm hover:bg-violet-950 hover:scale-105 hover:text-pink-700 duration-300"> Sign In </Button>
                            <Button className="bg-violet-950  text-pink-700 shadow-md backdrop-blur-3xl cursor-pointer dark:border w-40 mt-6 hover:backdrop-blur-sm hover:bg-transparent hover:scale-105 hover:text-gray-200 duration-300"> Sign Up </Button>
                        </div>
                    </CarouselItem>
                    <CarouselItem >
                        <h2 className="text-4xl uppercase pl-10">bienvenue chez FredLand pour les Chomeures !</h2>
                        <div className="w-3/4 bg-transparent pl-15 text-2xl mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dignissimos dolorum! Eaque, blanditiis sunt dignissimos repellendus ipsam iure doloremque fuga voluptatibus enim maxime molestias aspernatur qui repellat quis tempora deleniti officia explicabo voluptates vitae adipisci ex sed facere praesentium minima!</div>
                        <div className="flex pl-15 gap-4">
                            <Button className="bg-transparent text-gray-200 shadow-md backdrop-blur-3xl cursor-pointer dark:border w-40 mt-6 hover:backdrop-blur-sm hover:bg-violet-950 hover:scale-105 hover:text-pink-700 duration-300"> Sign In </Button>
                            <Button className="bg-violet-950  text-pink-700 shadow-md backdrop-blur-3xl cursor-pointer dark:border w-40 mt-6 hover:backdrop-blur-sm hover:bg-transparent hover:scale-105 hover:text-gray-200 duration-300"> Sign Up </Button>
                        </div>
                    </CarouselItem>
                    <CarouselItem >
                        <h2 className="text-4xl uppercase pl-10">bienvenue chez yvanLand pour les Chomeures !</h2>
                        <div className="w-3/4 bg-transparent pl-15 text-2xl mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dignissimos dolorum! Eaque, blanditiis sunt dignissimos repellendus ipsam iure doloremque fuga voluptatibus enim maxime molestias aspernatur qui repellat quis tempora deleniti officia explicabo voluptates vitae adipisci ex sed facere praesentium minima!</div>
                        <div className="flex pl-15 gap-4">
                            <Button className="bg-transparent text-gray-200 shadow-md backdrop-blur-3xl cursor-pointer dark:border w-40 mt-6 hover:backdrop-blur-sm hover:bg-violet-950 hover:scale-105 hover:text-pink-700 duration-300"> Sign In </Button>
                            <Button className="bg-violet-950  text-pink-700 shadow-md backdrop-blur-3xl cursor-pointer dark:border w-40 mt-6 hover:backdrop-blur-sm hover:bg-transparent hover:scale-105 hover:text-gray-200 duration-300"> Sign Up </Button>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    </div>
  )
}
