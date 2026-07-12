import { education } from "../../../data";
import Card from "../atoms/Card";
import SectionHeading from "../atoms/SectionHeading";

function EducationSection() {

    return (
        <div className="py-10">
            <SectionHeading id="education" title="EDUCATION" variant="banner" />

            <section className="flex justify-center px-5">
                <div className="flex flex-col gap-10 w-full max-w-3xl">
                    {education?.map((edu) => (
                        <Card key={edu.period} className="w-full">
                            <h2 className="font-mono font-bold text-lg">{edu.period}</h2>
                            <p className="font-sans text-gray-700">{edu.description}</p>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default EducationSection;
