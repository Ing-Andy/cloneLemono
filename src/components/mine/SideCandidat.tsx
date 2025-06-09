import { Landmark, User2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


export function SideCandidat() {
    // Menu items.
    const items = [
      {
        title: "Profile",
        url: "#",
        icon: User2,
      },
      {
        title: "Parcours",
        url: "#",
        icon: Landmark,
      },
    ]
    // console.log('andy est le meilleur ');
    
  return (
    <Sidebar className="flex left-48 justify-end shadow-lg shadow-[#ededed] dark:shadow-[#121212] border-none dark:bg-black transition-colors duration-1000">
      <SidebarContent className=" dark:text-white transition duration-1000">
        <SidebarGroup className="p-0">
          <SidebarGroupContent className="">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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
    </Sidebar>
  )
}