import { BriefcaseBusiness, Building2, Calendar, GraduationCap, Home, Inbox, LucideUsers2, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useState } from "react"

type monProps = {
  Text: (text: string) => void,
};

export function AppSidebar({ Text }: monProps) {
    const [text, setText] = useState<string | null>(null);
    // Menu items.
    const items = [
      {
        title: "Entreprises",
        url: "#",
        icon: Building2,
      },
      {
        title: "Ecoles",
        url: "#",
        icon: GraduationCap,
      },
      {
        title: "Candidats",
        url: "#",
        icon: LucideUsers2,
      },
      {
        title: "Consultants",
        url: "#",
        icon: BriefcaseBusiness,
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings,
      },
    ]
    // console.log('andy est le meilleur ');
    
  return (
    <Sidebar className="shadow-md shadow-neutral-400 bg-white dark:shadow-[#121212] border-none dark:bg-black transition-colors duration-500 absolute z-30">
      <SidebarContent className="bg-white dark:bg-black transition-colors duration-1000 w-full">
        <SidebarGroup className="py-0">
          <SidebarGroupContent className="">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`hover:bg-transparent ${text === item.title ?'underline' : ''} hover:underline`} onClick={() => {setText(item.title);Text(item.title)}}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarGroupLabel className="dark:text-white text-2xl font-bold font-serif flex justify-center tracking-widest uppercase">Solution</SidebarGroupLabel>
    </Sidebar>
  )
}