import Hero from "../organisms/Hero"
import Navbar from "../organisms/Navbar"

function Header() {
    return <>
        <div>
            <div className="border border-b-4">
                <div className="mx-auto container">
                    <Navbar />
                </div>
            </div>
        </div>
        <div className="container mx-auto">
            <div className="pt-10 md:pt-16 lg:pt-20 px-5">
                <Hero />
            </div>
        </div>
    </>
}
export default Header