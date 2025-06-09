
import ChangeThem from "@/components/mine/ChangeThem";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useState, type ChangeEvent } from "react";

export default function Login() {
    const [ forConnect, setForConnect ] = useState<boolean | null>(null);
    const [ isActive, setIsActive ] = useState<string | null>(null)
    const [ mail, setMail ] = useState<string>('');
    const [ connect, setConnect ] = useState<string | null>(null)
    console.log('la valeure de isActive:',isActive);
    console.log('la valeure de forconnect:',forConnect);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMail(e.target.value);
    }
    
    if (forConnect === true) {
        return(
            <div  className="w-full h-screen relative bg-no-repeat bg-[0px_-230px] bg-cover flex flex-col justify-center items-center bg-zinc-700/10 dark:bg-[#222222]">
                <h1 className="text-6xl font-bold bg5  uppercase mb-4" >Solutions</h1>
                <form className="flex flex-col inset-0 bg4 bg-white/10 w-2/3 h-3/4 z-20 backdrop-blur-2xs rounded-lg shadow-2xl shadow-neutral-400 relative dark:bg-black dark:shadow-[#232323]">
                    <h4 className="*:font-bold *:uppercase text-center text-4xl px-6 capitalize font-poppins dark:text-gray-200">envoyez votre addresse <span>mail</span> et son <span>password</span> afin de vous <span>connecter</span> !</h4>
                    <div className="mt-10 pl-6 flex flex-col">
                        <label htmlFor="mail" className="text-xl font-bold"> E-mail :</label>
                        <input 
                            type="text" 
                            id="mail"
                            value={mail}
                            onChange={handleChange}
                            className="w-[97%] h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                            placeholder="votre mail"
                        />
                    </div>
                    <div className="mt-10 pl-6 flex flex-col">
                        <label htmlFor="password" className="text-xl font-bold"> Password :</label>
                        <input 
                            type="text" 
                            id="password"
                            value={mail}
                            onChange={handleChange}
                            className="w-[97%] h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                            placeholder="votre votre password"
                        />
                    </div>
                    <span className="text-center mt-10">
                        <Button className="w-1/4 hover:bg-transparent hover:text-black hover:underline cursor-pointer duration-500" >c'est bon </Button>
                        <p className="group" >voulez vous faire un retour ? <span className="group-hover:underline cursor-pointer" onClick={() => setForConnect(null)}>cliquez ici</span></p>
                    </span>
                </form>
            </div>
        )
    };
    if (isActive === 'entreprise') {
        return(
            <div  className="w-full h-screen relative bg-no-repeat bg-[0px_-230px] bg-cover flex flex-col justify-center items-center bg-zinc-700/10 dark:bg-[#222222]">
                <h1 className="text-6xl font-bold font-Inter uppercase mb-4" >Solutions</h1>
                <form className="flex flex-col bg4 inset-0 bg-white/10 w-2/3 h-3/4 z-20 backdrop-blur-2xs rounded-lg shadow-2xl shadow-neutral-400 relative dark:bg-black dark:shadow-[#232323]">
                    <h4 className="*:font-bold *:uppercase text-center text-4xl px-6 capitalize font-poppins dark:text-gray-200">envoyez vos <span>donnees</span> afin de vous <span>enregistrer</span> !</h4>
                    <div className="flex flex-col overflow-y-scroll flex-grow">
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="nom" className="text-xl font-bold mb-2"> Nom de votre societe:</label>
                            <input 
                                type="text" 
                                id="nom"
                                value={mail}
                                onChange={handleChange}
                                className="w-[97%] h-13 hover:shadow-lg rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                placeholder="votre nom"
                            />
                        </div>
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="domain" className="text-xl font-bold mb-2"> votre domaine :</label>
                            <select name="select" id="select" className="w-[97%] hover:shadow-lg h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2 hover:rounder-b-0">
                                <option value="Informatique">Informatique</option>
                                <option value="infrastructure">infrastructure</option>
                                <option value="mecanique">mecanique</option>
                                <option value="electrique"> electrique</option>
                                <option value="electronique">electronique</option>
                                <option value="enseignement">enseignement</option>
                                <option value="responsable">responsable</option>
                                <option value="assistant">assistance</option>
                            </select>
                        </div>
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="date lieu" className="text-xl font-bold mb-2"> P.O BOX :</label>
                            <input 
                                type="text" 
                                id="lieu"
                                value={mail}
                                onChange={handleChange}
                                className="w-[97%] hover:shadow-lg h-13 rounded-lg shadow outline-none dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                placeholder="votre prenom"
                            />
                        </div>
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="select" className="text-xl font-bold mb-2"> votre ville et quartier :</label>
                            <div className="flex w-[97%] gap-4">
                                <select name="select" id="select" className="w-full hover:shadow-lg h-13 rounded-lg shadow outline-none focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2 hover:rounder-b-0">
                                    <option value="Informatique">douala</option>
                                    <option value="infrastructure">yaounde</option>
                                    <option value="mecanique">buea</option>
                                    <option value="electrique">ebolowa</option>
                                    <option value="electronique">bagangte</option>
                                    <option value="enseignement">bafoussam</option>
                                    <option value="mecanique">buea</option>
                                    <option value="electrique">ebolowa</option>
                                </select>
                                <select name="select" id="select" className="w-full hover:shadow-lg h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2 hover:rounder-b-0">
                                    <option value="Informatique">geni Informatique</option>
                                    <option value="infrastructure">geni civil</option>
                                    <option value="mecanique">geni mecanique</option>
                                    <option value="electrique"> geni electrique</option>
                                    <option value="electronique">geni electronique</option>
                                    <option value="enseignement">enseignement</option>
                                    <option value="responsable">responsable</option>
                                    <option value="assistant">assistance</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="mail" className="text-xl font-bold"> votre E-mail :</label>
                            <input 
                                type="text" 
                                id="mail"
                                value={mail}
                                onChange={handleChange}
                                className="w-[97%] h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                placeholder="votre prenom"
                            />
                        </div>
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="password" className="text-xl font-bold mb-2"> Password :</label>
                            <input 
                                type="text" 
                                id="password"
                                value={mail}
                                onChange={handleChange}
                                className="w-[97%] h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                placeholder="votre votre password"
                            />
                        </div>
                    </div>
                    <span className="text-center mt-10">
                        <Button className="w-1/4 hover:bg-transparent text-lg uppercase  hover:text-black hover:underline cursor-pointer duration-500" >c'est bon </Button>
                        <p className="group" >voulez vous faire un retour ? <span className="group-hover:underline cursor-pointer" onClick={() => {setIsActive(null),setForConnect(false)}}>cliquez ici</span></p>
                    </span>
                </form>
            </div>
        )
    };
    if (isActive === 'candidat') {
        return(
            <div  className="w-full h-screen relative bg-no-repeat bg-[0px_-230px] bg-cover flex flex-col justify-center items-center bg-zinc-700/10 dark:bg-[#222222]">
                <h1 className="text-6xl font-bold font-Inter uppercase mb-4" >Solutions</h1>
                <form className="flex flex-col inset-0 bg4 bg-white/10 w-2/3 h-3/4 z-20 backdrop-blur-2xs rounded-lg shadow-2xl shadow-neutral-400 relative dark:bg-black dark:shadow-[#232323]">
                    <h4 className="*:font-bold *:uppercase text-center text-4xl px-6 capitalize font-poppins">envoyez vos <span>donnees</span> afin de vous <span>enregistrer</span> !</h4>
                    <div className="flex flex-col overflow-y-scroll flex-grow">
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="nom" className="text-xl font-bold mb-2"> Votre Nom :</label>
                            <input 
                                type="text" 
                                id="nom"
                                value={mail}
                                onChange={handleChange}
                                className="w-[97%] h-13 hover:shadow-lg rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                placeholder="votre nom"
                            />
                        </div>
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="prenom" className="text-xl font-bold mb-2"> votre Prenom :</label>
                            <input 
                                type="text" 
                                id="prenom"
                                value={mail}
                                onChange={handleChange}
                                className="w-[97%] h-13 hover:shadow-lg rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                placeholder="votre prenom"
                            />
                        </div>
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="date lieu" className="text-xl font-bold mb-2"> votre date & lieu de naissance :</label>
                            <div className="flex gap-4 w-[97%]">
                                <input 
                                    type="date" 
                                    id="date"
                                    value={mail}
                                    onChange={handleChange}
                                    className="w-full hover:shadow-lg h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                    placeholder="votre prenom"
                                />
                                <input 
                                    type="text" 
                                    id="lieu"
                                    value={mail}
                                    onChange={handleChange}
                                    className="w-full hover:shadow-lg h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                    placeholder="votre prenom"
                                />
                            </div>
                        </div>
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="select" className="text-xl font-bold mb-2"> votre departement et role professionnel :</label>
                            <div className="flex w-[97%] gap-4">
                                <select name="select" id="select" className="w-full hover:shadow-lg h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2 hover:rounder-b-0">
                                    <option value="Informatique">geni Informatique</option>
                                    <option value="infrastructure">geni civil</option>
                                    <option value="mecanique">geni mecanique</option>
                                    <option value="electrique"> geni electrique</option>
                                    <option value="electronique">geni electronique</option>
                                    <option value="enseignement">enseignement</option>
                                    <option value="responsable">responsable</option>
                                    <option value="assistant">assistance</option>
                                </select>
                                <select name="select" id="select" className="w-full hover:shadow-lg h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2 hover:rounder-b-0">
                                    <option value="Informatique">geni Informatique</option>
                                    <option value="infrastructure">geni civil</option>
                                    <option value="mecanique">geni mecanique</option>
                                    <option value="electrique"> geni electrique</option>
                                    <option value="electronique">geni electronique</option>
                                    <option value="enseignement">enseignement</option>
                                    <option value="responsable">responsable</option>
                                    <option value="assistant">assistance</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="mail" className="text-xl font-bold"> E-mail :</label>
                            <input 
                                type="text" 
                                id="mail"
                                value={mail}
                                onChange={handleChange}
                                className="w-[97%] h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                placeholder="votre prenom"
                            />
                        </div>
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="password" className="text-xl font-bold mb-2"> Password :</label>
                            <input 
                                type="text" 
                                id="password"
                                value={mail}
                                onChange={handleChange}
                                className="w-[97%] h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                placeholder="votre votre password"
                            />
                        </div>
                    </div>
                    <span className="text-center mt-10">
                        <Button className="w-1/4 hover:bg-transparent text-lg uppercase  hover:text-black hover:underline cursor-pointer duration-500" >c'est bon </Button>
                        <p className="group" >voulez vous faire un retour ? <span className="group-hover:underline cursor-pointer" onClick={() => setIsActive(null)}>cliquez ici</span></p>
                    </span>
                </form>
            </div>
        )
    };
    if (isActive === 'ecole') {
        return(
            <div  className="w-full h-screen relative bg-no-repeat bg-[0px_-230px] bg-cover flex flex-col justify-center items-center bg-zinc-700/10 dark:bg-[#222222]">
                <h1 className="text-6xl font-bold  uppercase mb-4" >Solutions</h1>
                <form className="flex flex-col bg4 inset-0 bg-white/10 w-2/3 h-3/4 z-20 backdrop-blur-2xs rounded-lg shadow-2xl shadow-neutral-400 relative dark:bg-black dark:shadow-[#232323]">
                    <h4 className="*:font-bold *:uppercase text-center text-4xl px-6 capitalize font-poppins dark:text-gray-200">envoyez vos <span>donnees</span> afin de vous <span>enregistrer</span> !</h4>
                    <div className="flex flex-col overflow-y-scroll flex-grow">
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="nom" className="text-xl font-bold mb-2"> Votre Nom :</label>
                            <input 
                                type="text" 
                                id="nom"
                                value={mail}
                                onChange={handleChange}
                                className="w-[97%] h-13 hover:shadow-lg rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                placeholder="votre nom"
                            />
                        </div>
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="Box" className="text-xl font-bold mb-2"> P.O BOX :</label>
                            <input 
                                type="text" 
                                id="Box"
                                value={mail}
                                onChange={handleChange}
                                className="w-[97%] h-13 hover:shadow-lg rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                placeholder="votre prenom"
                            />
                        </div>
                        {/* <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="date lieu" className="text-xl font-bold mb-2"> votre date & lieu de naissance :</label>
                            <div className="flex gap-4 w-[97%]">
                                <input 
                                    type="date" 
                                    id="date"
                                    value={mail}
                                    onChange={handleChange}
                                    className="w-full hover:shadow-lg h-13 rounded-lg shadow outline-none focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                    placeholder="votre prenom"
                                />
                                <input 
                                    type="text" 
                                    id="lieu"
                                    value={mail}
                                    onChange={handleChange}
                                    className="w-full hover:shadow-lg h-13 rounded-lg shadow outline-none focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                    placeholder="votre prenom"
                                />
                            </div>
                        </div> */}
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="select" className="text-xl font-bold mb-2"> votre ville et quartier :</label>
                            <div className="flex w-[97%] gap-4">
                                <select name="select" id="select" className="w-full hover:shadow-lg h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2 hover:rounder-b-0">
                                    <option value="Informatique">geni Informatique</option>
                                    <option value="infrastructure">geni civil</option>
                                    <option value="mecanique">geni mecanique</option>
                                    <option value="electrique"> geni electrique</option>
                                    <option value="electronique">geni electronique</option>
                                    <option value="enseignement">enseignement</option>
                                    <option value="responsable">responsable</option>
                                    <option value="assistant">assistance</option>
                                </select>
                                <select name="select" id="select" className="w-full hover:shadow-lg h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2 hover:rounder-b-0">
                                    <option value="Informatique">geni Informatique</option>
                                    <option value="infrastructure">geni civil</option>
                                    <option value="mecanique">geni mecanique</option>
                                    <option value="electrique"> geni electrique</option>
                                    <option value="electronique">geni electronique</option>
                                    <option value="enseignement">enseignement</option>
                                    <option value="responsable">responsable</option>
                                    <option value="assistant">assistance</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="mail" className="text-xl font-bold"> votre E-mail :</label>
                            <input 
                                type="text" 
                                id="mail"
                                value={mail}
                                onChange={handleChange}
                                className="w-[97%] h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                placeholder="votre prenom"
                            />
                        </div>
                        <div className="mt-10 pl-6 flex flex-col">
                            <label htmlFor="password" className="text-xl font-bold mb-2"> Password :</label>
                            <input 
                                type="text" 
                                id="password"
                                value={mail}
                                onChange={handleChange}
                                className="w-[97%] h-13 rounded-lg shadow outline-none  dark:border-t-[1px] dark:shadow-md transition-all duration-500 dark:hover:shadow-gray-400 focus:shadow-2xl hover:border-[1px] focus:border-[1px] focus:bg-transparent border-gray-400 hover:border-b-transparent pl-2"
                                placeholder="votre votre password"
                            />
                        </div>
                    </div>
                    <span className="text-center mt-10">
                        <Button className="w-1/4 hover:bg-transparent text-lg uppercase  hover:text-black hover:underline cursor-pointer duration-500" >c'est bon </Button>
                        <p className="group" >voulez vous faire un retour ? <span className="group-hover:underline cursor-pointer" onClick={() => setForConnect(null)}>cliquez ici</span></p>
                    </span>
                </form>
            </div>
        )
    };
   
    
  return (
    <div className='w-full h-screen relative bg-no-repeat bg-[0px_-230px]  bg-cover flex flex-col  bg-zinc-700/10 dark:bg-[#222222]'>
        <div className="absolute z-20 text-end w-full"><ChangeThem /></div>
        <h1 className="text-6xl font-bold font-Inter uppercase mx-auto my-10 mb-4" >Solutions</h1>
        <div className="mx-auto flex flex-col inset-0 bg4 bg-white/10 w-2/3 h-3/4 z-20 backdrop-blur-2xs rounded-lg shadow-2xl shadow-neutral-400 relative dark:bg-black dark:shadow-[#232323] dark:shadow-lg">
            {typeof forConnect === 'boolean' ? (<ChevronLeft className="absolute h-14 cursor-pointer" onClick={() => {setForConnect(null),setConnect(null)}}/>):''}
            <div className="flex flex-col w-full text-gray-300">
                <p className="text-center w-full font-medium text-3xl my-4 text-gray-300">voulez vous ?:</p>
                <div className="flex w-full justify-center mt-2 text-gray-300">
                    <Button className={`mx-4 hover:bg-transparent hover:text-black hover:underline uppercase font-bold duration-500 cursor-pointer dark:hover:text-white ${connect === 'bou1' ? 'bg-transparent underline text-black dark:text-white':''}`} disabled={forConnect === false} onClick={() => {setForConnect(false); setConnect('bou1')}}>vous Inscrire</Button>
                    ou 
                    <Button className={`mx-4 hover:bg-transparent hover:text-black hover:underline uppercase font-bold duration-500 cursor-pointer dark:hover:text-white ${connect === 'bou2' ? 'bg-transparent underline text-black dark:text-white':''}`} disabled={forConnect === false} onClick={() => {setForConnect(true); setConnect('bou2')}}> vous connecter</Button>
                </div>
                {forConnect === false && (<>
                    <p className="my-4 text-center w-full font-medium text-3x text-gray-300l">qui etes vous ?:</p>
                    <div className="flex w-full justify-center mt-2">
                        <Button className={`mx-4 hover:bg-transparent hover:text-black hover:underline uppercase font-bold duration-500 cursor-pointer dark:hover:text-white ${isActive === 'entreprise' ? 'bg-transparent underline text-black':''}` }  onClick={() => { setIsActive('entreprise')}}>Entreprise ou societe</Button>
                        ou
                        <Button className={`mx-4 hover:bg-transparent hover:text-black hover:underline uppercase font-bold duration-500 cursor-pointer dark:hover:text-white ${isActive === 'candidat'? 'bg-transparent underline text-black':''}` } onClick={() => {setIsActive('candidat')}}> chercheur d'emploi </Button>
                        ou
                        <Button className={`mx-4 hover:bg-transparent hover:text-black hover:underline uppercase font-bold duration-500 cursor-pointer dark:hover:text-white ${isActive === 'ecole' ? 'bg-transparent underline text-black':''}` } onClick={() => {setIsActive('ecole')}}> Ecole & Universite</Button>
                    </div>
                </>)}
            </div>
        </div>
    </div>
  )
}
