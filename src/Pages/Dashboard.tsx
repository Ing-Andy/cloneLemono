import ChangeThem from "@/components/mine/ChangeThem";
import MainHeader from "@/components/mine/MainHeader";
import { AppSidebar } from "@/components/mine/SIdeBar";
import { SideCandidat } from "@/components/mine/SideCandidat";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  
  const [menu, setMenu] = useState<string | null>(null);
  const reciveMenu = (text: string) => {
    setMenu(text);
  }
  
  
  return (
    <SidebarProvider>
      <AppSidebar Text={reciveMenu} />
      <main className="w-full">
        {menu === "Candidats" ? (
          <SidebarProvider className="bg-neutral-200 dark:bg-[#333333] transition *:duration-1000 ">
            <SideCandidat />
            <main className="w-full mx-1 py-1 overflow-scroll scrollbar-none relative h-full flex flex-col">
              <MainHeader />
              <section className="overflow-hidden transition duration-500 h-screen">
                <Outlet />
              </section>
            </main>
          </SidebarProvider>
        ) : (
          ""
        )}
      </main>
    </SidebarProvider>
  );
}

// <SidebarProvider className='transitions-color duration-1000 overflow-hidden '>
//     <div className="flex"><AppSidebar /></div>
//     <main className='w-full dark:bg-transparent overflow-hidden'>
//          <SidebarProvider className='bg-[#232323] shadow-lg dark:shadow-[#000000]'>
//                 <AppSousSidebar />
//                     <main className='bg-[#dcdcdc] dark:bg-[#333333] w-full transition-colors duration-1000 h-screen overflow-scroll scrollbar-none static '>
//                         <div className="flex justify-between items-center flex-grow  h-10 bg-transparent backdrop-blur-sm fixed w-full border ">
//                             <div className="flex items-center justify-center bg-[#f9f9f9] w-16 ml-2 rounded-sm shadow-sm dark:shadow-black  dark:bg-[#1a1a1a] *:hover:scale-110 overflow-hidden ">
//                                 <SidebarTrigger />
//                                 <ChangeThem />
//                             </div>
//                             <div className="flex items-center mr-2   ">
//                             {/* <div className="flex items-center justify-center bg-[#f9f9f9] w-16 ml-2 rounded-sm shadow-sm dark:shadow-black  dark:bg-[#1a1a1a] *:hover:scale-110 overflow-hidden "> */}
//                                 <div className={`flex ${showInput === false ? 'w-9' : 'w-120'} cursor-pointer h-9 items-center justify-end bg-[#f9f9f9] shadow-sm dark:shadow-black dark:bg-[#1a1a1a]  text-black mr-2 border-[1px] border-[#f9f9f9] dark:border-black rounded-lg overflow-hidden transition-all duration-1000 fixed easy-in-out `}>
//                                 { showInput === true &&
//                                     <div className="flex w-full h-full bg-blue-800 justify-end">
//                                         <input
//                                             type="text"
//                                             value={input}
//                                             onChange={handleChange}
//                                             placeholder='votre recherche'
//                                             className='rounded-l-md pl-3 bg-[#f9f9f9] w-full dark:bg-[#1a1a1a] dark:text-[#f9f9f9] h-full outline-none border-none focus:bg-neutral-100 transition-colors duration-1000'
//                                         />
//                                     </div>
//                                 }
//                                 <Button className={`rounded-l-none border-none flex h-full easy-in-out  transition-colors duration-1000 ${showInput === false ? 'bg-[#f9f9f9]  text-black dark:bg-[#1a1a1a]  dark:text-white w-9 hover:bg-white hover:text-black dark:hover:bg-[#1a1a1a] transition-colors duration-1000 ' : 'w-20 dark:bg-white dark:text-black dark:hover:bg-white transition-colors duration-1000'} group`} onClick={handleChangeShowInput}><Search size={17} className='group-hover:scale-110' /></Button>
//                             </div>
//                             <div className="gap-4 flex bg-[#f9f9f9] dark:bg-[#1a1a1a] shadow-sm dark:shadow-black items-center justify-center h-9 w-15 rounded-lg transition-colors duration-1000  ">
//                             {/* <div className="flex items-center justify-center bg-[#f9f9f9] w-16 ml-2 rounded-sm shadow-sm dark:shadow-black  dark:bg-[#1a1a1a] *:hover:scale-110 overflow-hidden "> */}
//                                 <Heart size={17} className='hover:scale-110 hover:bg-neutral-100' />
//                                 <ShoppingBag size={17} className='hover:scale-110 hover:bg-neutral-100' />
//                             </div>
//                             </div>
//                         </div>
//                         <Outlet />
//                     </main>
//             </SidebarProvider>
//     </main>
// </SidebarProvider>
