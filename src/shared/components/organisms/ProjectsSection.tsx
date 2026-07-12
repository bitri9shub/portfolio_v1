import { projects } from "../../../data";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import SectionHeading from "../atoms/SectionHeading";
// import { apiServices } from "../../../api/services";
// import { useFetchData } from "../../hooks/useFetchData";

function ProjectsSection() {
    // const { data: projects, isLoading } = useFetchData(apiServices.getProjects);

    return (
        <div className="bg-black my-10 p-5 text-white border-white">
            <SectionHeading id="projects" title="PROJECTS" variant="inline" />

            <section className="flex justify-center px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-10 w-full max-w-3xl">
                    {projects?.map((project) => (
                        <Card
                            key={project.name}
                            variant="outlined"
                        >
                            <div className="flex flex-col gap-5 h-full">
                                <div className="flex items-center justify-between">
                                    <div className="font-bold font-mono text-lg">
                                        {project.name}
                                    </div>
                                    <div className="text-gray-100 border-1 p-2">
                                        {project.year}
                                    </div>
                                </div>
                                <p className="flex-1">{project.description}</p>
                                <a href={project.url} target="_blank">
                                    <Button
                                        variant="outlined"
                                        className="w-full font-bold hover:text-white hover:bg-black hover:cursor-pointer hover:border-2 hover:border-white"
                                    >
                                        <div rel="noopener noreferrer">
                                            View Project
                                        </div>
                                    </Button>
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ProjectsSection;
