import { Button } from "../ui/button"

type propsBlockOptions = {
    titre: string,
    smDescription: string,
    description: string,
    lien: string,
}

export default function BlockOptions({ titre, smDescription, description, lien }:propsBlockOptions) {
  return (
    <div className="h-[300px] rounded-md py-6 pl-2 w-full border-[1px] shadow-sm shadow-[04px 10px rgba(255,255,255,0.2)] hover:shadow-lg bg-white dark:hover:shadow-neutral-900  hover:shadow-gray-300 dark:bg-black hover:z-30 hover:static">
        <div className="flex flex-col justify-between w-full h-full hover:scale-105 duration-300 hover:overflow-hidden group">
            <div className="flex flex-col pl-4">
                <h3 className='uppercase text-black dark:text-gray-50 font-bold'>{titre}</h3>
                <p className='mt-[-3px] text-xs text-[#12121] font-bold'>{smDescription}</p>
                <hr className='bg-black dark:bg-gray-700 my-4 group-hover:mr-2 duration-300' />
            </div>
            <p className="text-md font-bold text-gray-600 dark:text-gray-300 pl-4 ">{description}</p>
            <span className="w-full flex justify-center">
                <Button className="shadow-sm  dark:hover:shadow-[#333] cursor-pointer hover:bg-transparent hover:underline hover:shadow-none hover:text-black dark:text-black dark:hover:text-white duration-500">enregistrer {lien}</Button>
            </span>
        </div>
    </div>
  )
}
