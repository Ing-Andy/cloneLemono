import { Card, CardContent, CardHeader } from '../ui/card'

export default function Competence() {
  return (
    <Card className='p-1 w-60 h-50 flex flex-col bg-white shadow-neutral-300 shadow-lg dark:bg-black dark:shadow-[#222222] transition-colors duration-1000'>
        <CardHeader className='uppercase font-bold text-sm'>nom de competense</CardHeader>
        <CardContent className='flex flex-col px-0 mt-0'>
            <div className="flex items-center text-sm font-light border-[1px] h-8 dark:border-blue-950">0% <div className="flex text-xs items-center justify-center text-white transition-colors duration-1000 w-full h-1/2 mx-1 border rounded-full  bg-[linear-gradient(to_right,_#0000ff_80%,_#ffffff_20%)] dark:bg-[linear-gradient(to_right,_#0000aa_80%,_#000000_20%)]">80%</div> 100%</div>
            <div className="flex overflow-y-hidden scrollbar-none w-full mt-[2px]">&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias ex amet at exercitationem necessitatibus consectetur </div>
        </CardContent>
    </Card>
  )
}
