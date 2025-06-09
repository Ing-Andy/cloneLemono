import { useTheme } from "@/Contexts/ThemeContext"
import { Button } from "../ui/button"
import { Moon, Sun } from "lucide-react";

export default function ChangeThem() {
    const { theme, setTheme } = useTheme();
    const handleChangeThem = () => {
        setTheme(theme === 'dark' ? 'ligth' : 'dark')
    }

  return (
    <Button  onClick={handleChangeThem} className="bg-transparent hover:bg-neutral-100 w-7 dark:hover:bg-transparent text-black dark:text-white ">{theme === 'dark' ? (<Sun />):(<Moon />)}</Button>
  )
}
