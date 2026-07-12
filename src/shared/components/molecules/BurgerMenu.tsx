import { Menu, X } from "lucide-react"

interface BurgerMenuProps {
    isOpen: boolean;
    className?: string;
}

function BurgerMenu({ isOpen, className = "" }: BurgerMenuProps){
    return <div className={`relative w-6 h-6 flex items-center justify-center ${className}`} >
        <Menu className={`absolute transition-all duration-300 ${
            isOpen 
            ? "opacity-0 rotate-90 scale-50"
            : "opacity-100 rotate-0 scale-100"
        }`} />
        <X className={`absolute transition-all duration-300 ${
            isOpen 
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-50"
        }`} />
    </div>
}

export default BurgerMenu