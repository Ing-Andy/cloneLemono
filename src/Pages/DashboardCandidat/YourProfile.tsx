import Competence from "@/components/dashboard/Competence";
import Parcours from "@/components/dashboard/parcours";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React, { useState } from "react";

export default function YourProfile() {
  const [loading, setLoading] = useState<boolean>(true);
  const [view, setView] = useState<string | null>(null);
  // const handleLoading = () => {
  //     setLoading(!loading);
  // }
  return (
    <div className="flex flex-col flex-grow  px-2 py-10 w-full h-full bg-transparent overflow-scroll scrollbar-none  dark:bg-transparent relative">
      <div className="flex flex-col">
        <div className="flex flex-col py-2 pb-4 bg-[#f9f9f9] dark:bg-[#1a1a1a] w-full mb-4 rounded-md shadow-lg shadow-[#dcdcdc] dark:shadow-black dark:shadow-md h-85 transition-colors duration-1000 overflow-hidden">
          <div className="px-2">
            <div className="flex justify-between w-full">
              <div className="flex flex-col justify-center items-center">
                <div className="w-60 h-60 rounded-full bg-[#333]"></div>
                <Button className="shadow-md shadow-gray-400 dark:shadow-2xl dark:shadow-[#333333] mt-[-1px] bg-[#333] hover:bg-black dark:bg-neutral-200 dark:hover:bg-white transition duration-500">
                  {" "}
                  Modifier votre profil
                </Button>
              </div>
              <div className="flex flex-col justify-between w-60 rounded-sm bg-neutral-200 dark:bg-[#232323] dark:text-white px-1 duration-1000">
                <table className="uppercase text-sm border-separate border-spacing-y-2">
                  <tbody>
                    <tr>
                      <td>nom :</td>
                      <td className="font-bold font-serif pl-2">
                        Nzoupet Nangop
                      </td>
                    </tr>
                    <tr>
                      <td>prenom :</td>
                      <td className="font-bold font-serif pl-2">andy bryan</td>
                    </tr>
                    <tr>
                      <td>Age :</td>
                      <td className="font-bold font-serif pl-2 lowercase">
                        22 ans
                      </td>
                    </tr>
                    <tr>
                      <td>metier :</td>
                      <td className="font-bold font-serif pl-2">
                        front-end dev
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-end w-full">
                  <p className="w-full text-sm font-serif capitalize">
                    {" "}
                    je suis un jeune devellopeur nee en 2003 a
                    nkolo 2 -mfou je vie dans la ville de douala et pour
                    l'emploi je suis pret a me deplacer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" px-2">
            <NavigationMenu className="flex justify-center items-end">
              <NavigationMenuList>
                <NavigationMenuItem className="hover:bg-transparent">
                  <NavigationMenuTrigger
                    with="no"
                    className={`h-8 dark:bg-transparent dark:hover:bg-transparent hover:underline bg-transparent font-bold capitalize font-serif ${
                      view === "competences" ? "underline" : ""
                    }`}
                    onClick={() => setView("competences")}
                  >
                    ma competence
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover:bg-transparent">
                  <NavigationMenuTrigger
                    with="no"
                    className={`h-8 dark:bg-transparent dark:hover:bg-transparent hover:underline bg-transparent font-bold capitalize font-serif ${
                      view === "parcous" ? "underline" : ""
                    }`}
                    onClick={() => setView("parcours")}
                  >
                    mon parcours
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem className="hover:bg-transparent">
                  <NavigationMenuTrigger
                    with="no"
                    className={`h-8 dark:bg-transparent dark:hover:bg-transparent hover:underline bg-transparent font-bold capitalize font-serif ${
                      view === "postes" ? "underline" : ""
                    }`}
                    onClick={() => setView("postes")}
                  >
                    mes postes
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex flex-col p-2 bg-[#f9f9f9] dark:bg-[#1a1a1a] w-full  mb-4 rounded-md shadow-lg shadow-[#dcdcdc] dark:shadow-black dark:shadow-md transition-colors duration-1000 ">
          {view === null ? (
            ""
          ) : view === "competences" ? (
            <ul className="flex justify-center flex-wrap gap-4">
              <li>
                <Competence />
              </li>
              <li>
                <Competence />
              </li>
              <li>
                <Competence />
              </li>
              <li>
                <Competence />
              </li>
              <li>
                <Competence />
              </li>
              <li>
                <Competence />
              </li>
            </ul>
          ) : view === "parcours" ? (
            <ul className="flex justify-center flex-wrap gap-4">
              <li>
                <Parcours />
              </li>
              <li>
                <Parcours />
              </li>
              <li>
                <Parcours />
              </li>
              <li>
                <Parcours />
              </li>
              <li>
                <Parcours />
              </li>
              <li>
                <Parcours />
              </li>
            </ul>
          ) : view === "postes" ? (
            <ul className="flex justify-center flex-wrap gap-4">
              <li>
                <Competence />
              </li>
              <li>
                <Competence />
              </li>
              <li>
                <Competence />
              </li>
              <li>
                <Competence />
              </li>
              <li>
                <Competence />
              </li>
              <li>
                <Competence />
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
