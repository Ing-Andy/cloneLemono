import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Header() {
  const liste = [
    {
      svg: "/icons/branch.svg",
      title: "investment infrastructure",
      description: "Api first investment infrastructure",
    },
    [
      {
        svg: "/icons/branchStart.svg",
        title: "Brocker & wealth Manage",
        description: "running the backend of your investment experience",
      },
      {
        svg: "/icons/branchEnd.svg",
        title: "Bank & Emis",
        description: "Powering invesing embedded into your product",
      },
      {
        svg: "/icons/branchEnd.svg",
        title: "Software company",
        description: "bringing investing into your context",
      },
    ],
    [
      {
        svg: "/icons/branchStart.svg",
        title: "developer hub",
        description: "browser all our tecnical recources",
      },
      {
        svg: "/icons/branchEnd.svg",
        title: "guides",
        description: "demonstrative use case on top of our api",
      },
      {
        svg: "/icons/branchEnd.svg",
        title: "documentation",
        description: "detail of our platform's enpoints",
      },
    ],
    [
      {
        svg: "/icons/branchStart.svg",
        title: "company",
        description: "driven by growing investing opportunities",
      },
      {
        svg: "/icons/branchEnd.svg",
        title: "careers",
        description: "all you need to know to become a lemoneer",
      },
      {
        svg: "/icons/branchEnd.svg",
        title: "PR/Media",
        description: "Media converage and assets for your story",
      },
      {
        svg: "/icons/branchEnd.svg",
        title: "Blog",
        description: "lemono.news",
      },
    ],
  ];
  return (
    <header className="flex justify-between items-center h-20 bg-amber500 text-lg font-medium">
      <Image src="/logo.svg" alt="logo lemono" width={200} height={30} />
      <div className="flex gap-6 justify-between items-center">
        <HoverCard>
          <HoverCardTrigger className="hover:text-gray-600 cursor-pointer">
            product
          </HoverCardTrigger>
          <HoverCardContent className="p-4">
            <div className="w-full h30 hover:bg-gray-100 p-2 cursor-pointer flex rounded-lg">
              <div className="w1/4 p-2">
                <Image src={liste[0].svg} alt="image" width={40} height={40} />
              </div>
              <div className="w3/4 max-w-70">
                <h4 className="font-medium">{liste[0].title}</h4>
                <p className="text-sm">{liste[0].description}</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger className="hover:text-gray-600 cursor-pointer">
            use cases
          </HoverCardTrigger>
          <HoverCardContent className="p-4">
            {liste[1].map((el, index) => (
              <div
                key={index}
                className="w-full h30 hover:bg-gray-100 p-2 cursor-pointer flex rounded-lg"
              >
                <div className="w1/4 p-2">
                  <Image src={el.svg} alt="image" width={40} height={40} />
                </div>
                <div className="w3/4 max-w-70">
                  <h4>{el.title}</h4>
                  <p className="text-sm">{el.description}</p>
                </div>
              </div>
            ))}
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger className="hover:text-gray-600 cursor-pointer">
            developers
          </HoverCardTrigger>
          <HoverCardContent className="p-4">
            {liste[2].map((el, index) => (
              <div
                key={index}
                className="w-full h30 hover:bg-gray-100 p-2 cursor-pointer flex rounded-lg"
              >
                <div className="w1/4 p-2">
                  <Image src={el.svg} alt="image" width={40} height={40} />
                </div>
                <div className="w3/4 max-w-70">
                  <h4>{el.title}</h4>
                  <p className="text-sm">{el.description}</p>
                </div>
              </div>
            ))}
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger className="hover:text-gray-600 cursor-pointer">
            company
          </HoverCardTrigger>
          <HoverCardContent className="p-4">
            {liste[3].map((el, index) => (
              <div
                key={index}
                className="w-full mb-2 h30 hover:bg-gray-100 p-2 cursor-pointer flex rounded-lg"
              >
                <div className="w1/4 p-2">
                  <Image src={el.svg} alt="image" width={40} height={40} />
                </div>
                <div className="w3/4 max-w-70">
                  <h4>{el.title}</h4>
                  <p className="text-sm">{el.description}</p>
                </div>
              </div>
            ))}
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="flex gap-6 items-center">
        <Button
          variant={"hover"}
          className="rounded3xl p-4 border-black capitalize font-medium"
        >
          get in touch
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="capitalize font-medium p-6" asChild>
            <Button variant={"hover"}>
              en <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Button variant={"hover"}>en</Button>
            <Button variant={"hover"}>fr</Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
