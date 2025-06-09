import React, { useState } from 'react'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import { AppSousSidebar } from './SideCandidat'
import ChangeThem from './ChangeThem'
import { Button } from '../ui/button'
import { Heart, Search, ShoppingBag } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export default function Essai() {
    const [ showInput, setShowInput ] = useState<boolean>(false);
    const handleChangeShowInput = () => {
        setShowInput(!showInput);
        console.log(showInput);        
    };
    const [input, setInput] = useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
        };
  return (
    <SidebarProvider>
        <AppSousSidebar />
            <main className='bg-[#dcdcdc] dark:bg-[#333333] w-full transition-colors duration-1000'>
                <div className="flex justify-between items-center w-full h-10 ">
                    <div className="flex items-center justify-center bg-white w-16 ml-2 rounded-sm dark:bg-black *:hover:scale-110 ">
                        <SidebarTrigger />
                        <ChangeThem />
                    </div>
                    <div className="flex items-center mr-2">
                        <div className={`flex ${showInput === false ? 'w-9' : 'w-120'} h-9 items-center justify-end bg-white dark:bg-black  text-black mr-2 border-[1px] border-white dark:border-black rounded-lg overflow-hidden transition-all duration-1000 relative easy-in-out`}>
                        { showInput === true &&
                            <div className="flex w-full h-full bg-blue-800 justify-end">
                                <input 
                                    type="text" 
                                    value={input}
                                    onChange={handleChange}
                                    placeholder='votre recherche'
                                    className='rounded-l-md pl-3 bg-white w-full dark:bg-black dark:text-white h-full outline-none border-none focus:bg-neutral-100'
                                />
                            </div>
                        }   
                        <Button className={`rounded-l-none border-none flex h-full easy-in-out  transition-colors duration-1000 ${showInput === false ? 'bg-white  text-black dark:bg-black dark:text-white w-9 hover:bg-white hover:text-black dark:hover:bg-black transition-colors duration-1000 ' : 'w-20 dark:bg-white dark:hover:bg-white transition-colors duration-1000'} group`} onClick={handleChangeShowInput}><Search size={17} className='group-hover:scale-110' /></Button>
                    </div>
                    <div className="gap-4 flex bg-white dark:bg-black items-center justify-center h-9 w-15 rounded-lg transition-colors duration-1000 ">
                        <Heart size={17} className='hover:scale-110' />
                        <ShoppingBag size={17} className='hover:scale-110' />
                    </div>
                    </div>
                </div>
                <section className="mt-4">
                    
                </section>
            </main>
    </SidebarProvider>
  )
}
