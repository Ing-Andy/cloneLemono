import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const [ input, setInput ] = useState<string>('');
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value)
    }
  return (
    <footer className='w-full h-[500px] bg-white text-black dark:bg-black px-[-10px] flex flex-col justify-end dark:text-gray-300 rounded-t-lg shadow-3xl shadow-gray-100'>
        <div className="mb-20 flex w-full">
            <div className="flex flex-col w-1/4 px-4">
                <p className="uppercase font-bold w-full mb-2" >nom de l'entreprise</p>
                <div className="flex w-full bg3 h-40 my-2"></div>
                {/* <p className="">avec Nous, vous pourrez faire de votre vie un echafodage, et aller d'echel en echel</p> */}
                <p className="mt-2"> contacter nous </p>
                <p className="font-medium"> Tel <span className="text-[#333] dark:text-gray-400  dark:hover:text-gray-50 duration-500">: + 237 6 58 34 13 59</span></p>
                <p className="font-medium"> Mail : <Link to='https://mail.google.com/mail/u/0/#inbox' className="text-[#333] dark:text-gray-400  dark:hover:text-gray-50 duration-500">lefilsdecathy@mail.com</Link></p>
            </div>
            <div className="flex flex-grow justify-between">
                <div className="flex flex-col w-full pl-2">
                    <h4 className="dark:text-white uppercase font-bold">Information</h4>
                    <ul className="flex flex-col *:capitalize *:dark:hover:text-white text-[#333] *:hover:font-medium *:transition-font *:hover:scale-105 *:hover:text-black *:hover:pl-2 *:cursor-pointer *:duration-500 *:my-2 dark:text-gray-400">
                        <li>conitions general</li>
                        <li>accord de license</li>
                        <li>politique de confidentialite</li>
                        <li>informations sur les droits d'auteur</li>
                        <li>assistance</li>
                    </ul>
                </div>
                <div className="flex flex-col w-full pl-2">
                    <h4 className="dark:text-white uppercase font-bold">Legal</h4>
                    <ul className="flex flex-col *:capitalize *:dark:hover:text-white text-[#333] *:hover:font-medium *:transition-font *:hover:scale-105 *:hover:text-black *:hover:pl-2 *:cursor-pointer *:duration-500 *:my-2 dark:text-gray-400">
                        <li>conitions general</li>
                        <li>accord de license</li>
                        <li>politique de confidentialite</li>
                        <li>informations sur les droits d'auteur</li>
                        <li>assistance</li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="font-bold w-1/4 capitalize">dites nous un mots d'encouragement par e-mail <br />
                <div className="flex flex-col mt-2 pl-2">
                    <label htmlFor="id">Email :</label>
                    <textarea  
                        id="id"
                        value={input}
                        onChange={handleChange}
                        placeholder="votre message"
                        className="text-[#555] dark:text-gray-400 font-Inter h-30 shadow-sm dark:shadow-md pl-2 mt-2 mr-4 rounded-md hover:shadow-gray-400 dark:hover:shadow-gray-900 outline-none dark:border-[1px]"
                    />
                </div>
            </div>
        </div>
        <p className="w-full text-center">fais par andy</p>
    </footer>
  )
}
