import Card from "../atoms/Card";
// import { apiServices } from "../../../api/services";
// import { useFetchData } from "../../hooks/useFetchData";
import type { IconType } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { socialLinks } from "../../../data";

// Note: In a real backend scenario, the backend would return a string identifier for the icon, 
// and the frontend maps it to a React component. We'll simulate that mapping here in case it's needed.
const iconMap: Record<string, IconType> = {
    FaLinkedin: FaLinkedin,
    FaGithub: FaGithub,
};

function Footer() {
    // const { data: socialLinks, isLoading } = useFetchData(apiServices.getSocialLinks);

    return (
        <footer className="container mx-auto font-mono pb-15 px-5">
            <section className="flex flex-col gap-10">
                <div className="flex justify-center">
                    <h2>
                        <span className="border-b-3 font-bold inline-block text-xl sm:text-2xl">
                            LET'S CONNECT
                        </span>
                    </h2>
                </div>

                <div className="flex justify-center">
                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                        {socialLinks?.map((link) => {
                            // Assume link.icon could be a string if it came from the backend, or the function if it's from fallback
                            const Icon = typeof link.icon === 'string' ? iconMap[link.icon as string] || FaGithub : link.icon;
                            return (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Card className="flex gap-2 hover:bg-neutral-200 transition-colors duration-200 cursor-pointer">
                                        <Icon size={24} />
                                        {link.platform}
                                    </Card>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            <p className="text-center mt-10 text-sm sm:text-base">
                @2026 BITWISE_MINIMALIST. ALL PIXELS RESERVED :p
            </p>
        </footer>
    );
}

export default Footer;
