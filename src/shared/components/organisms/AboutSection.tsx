import { aboutTexts } from "../../../data";
import Card from "../atoms/Card";
import SectionHeading from "../atoms/SectionHeading";


function AboutSection() {

    return (
        <>
            <SectionHeading id="about" title="ABOUT ME" variant="banner" />

            <section className="flex justify-center px-5">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-3xl">
                  
                        {aboutTexts?.map((text, index) => (
                            <Card key={index} className="font-sans text-neutral-700 flex-1">
                                {text}
                            </Card>
                        ))}
                </div>
            </section>
        </>
    );
}

export default AboutSection;
