import SectionDivider from "../shared/components/atoms/SectionDevider";
import AboutSection from "../shared/components/organisms/AboutSection";
import EducationSection from "../shared/components/organisms/EducationSection";
import ExperienceSection from "../shared/components/organisms/ExperienceSection";
import Footer from "../shared/components/organisms/Footer";
import ProjectsSection from "../shared/components/organisms/ProjectsSection";
import Header from "../shared/components/templates/Header";

function HomePage() {
    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <AboutSection />

                <SectionDivider />
                <ExperienceSection />

                <EducationSection />

                {/* <SectionDivider /> */}
                
                <ProjectsSection />
                {/* 
                <SectionDivider />
                <ContactSection /> */}
            </main>

            <Footer />
        </>
    );
}

export default HomePage;