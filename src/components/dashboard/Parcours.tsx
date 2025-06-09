import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Separator } from '../ui/separator'

export default function Parcours() {
  return (
    <Card className='p-1 w-60 h-50 flex flex-col bg-white shadow-neutral-300 shadow-lg dark:bg-black dark:shadow-[#222222] transition-colors duration-1000'>
        <CardHeader className='uppercase font-bold text-sm'>nom de competense</CardHeader>
        <Separator />
        <CardContent className='flex flex-col px-0 mt-0'>
            <div className="flex overflow-y-hidden scrollbar-none w-full mt-[2px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias ex amet at exercitationem necessitatibus consectetur </div>
        </CardContent>
    </Card>
  )
}
