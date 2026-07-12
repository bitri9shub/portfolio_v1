import { Search } from "lucide-react"

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

function SearchInput(props: SearchInputProps) {
    return <div className="flex items-center gap-2.5 h-11 px-3.5 bg-gray-100 border border-gray-200 rounded-lg">
        <Search className="w-[18px] h-[18px] text-gray-500" />
        <input
            type="text"
            placeholder="Search"
            className="flex-1 font-mono text-gray-800 placeholder:text-gray-500 focus:outline-none"
            {...props}
        />
    </div>
}

export default SearchInput