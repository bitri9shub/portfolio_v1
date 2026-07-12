import { experiences } from "../../../data";
import Card from "../atoms/Card";
import SectionHeading from "../atoms/SectionHeading";

function ExperienceSection() {

    return (
        <>
            <SectionHeading id="experience" title="EXPERIENCE" variant="inline" />

            <div className="flex justify-center px-5">
                <div className="flex flex-col gap-10 w-full max-w-3xl">
                    {experiences?.map((exp) => (
                        <Card key={exp.company} className="w-full">
                            <h2 className="font-mono font-bold text-lg">{exp.period}</h2>
                            <h3 className="font-mono font-bold text-gray-800 text-md">{exp.company}</h3>
                            <p className="font-sans text-gray-700">{exp.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ExperienceSection;
