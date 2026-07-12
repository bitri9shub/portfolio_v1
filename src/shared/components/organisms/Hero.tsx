import profilePic from "../../../assets/profile.png"
import Button from "../atoms/Button"

function Hero() {
    return <section className="flex flex-col gap-8 items-center">
        <div className="relative flex justify-center items-center">
            <div className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img className="h-full w-full object-cover" src={profilePic} alt="profile picture" />
            </div>
        </div>
        <div className="flex justify-center">
            <h2 className="font-mono font-bold w-80 md:w-auto md:max-w-lg lg:max-w-xl text-2xl sm:text-3xl lg:text-4xl text-center">
                BACKEND DEVELOPER & DEVOPS ENTHUSIAST
            </h2>
        </div>
        <div className="flex justify-center">
            <p className="font-sans w-80 md:w-auto md:max-w-md lg:max-w-lg text-center text-base sm:text-lg text-neutral-700">
                "The most efficient line of code is the one you never had to write."
            </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-10">
            <Button variant="outlined" className="flex flex-row items-center gap-2 text-sm sm:text-base">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-600"></div>
                <div>STATUS: ACTIVE</div>
            </Button>
            <Button variant="outlined" className="text-sm sm:text-base">
                LAT: 34.0522 N
            </Button>
        </div>
    </section>
}
export default Hero