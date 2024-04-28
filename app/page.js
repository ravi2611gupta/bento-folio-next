import ExperienceCard from "@/components/pages/home/ExperienceCard";
import ExpertAreaCard from "@/components/pages/home/ExpertAreaCard";
import GreatingCard from "@/components/pages/home/GreatingCard";
import ProfileCard from "@/components/pages/home/ProfileCard";
import ProjectCard from "@/components/pages/home/ProjectCard";
import ServiceCard from "@/components/pages/home/ServiceCard";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="grid gap-6">
          <ProfileCard />
        </div>
        <div className="grid gap-6">
          <ExperienceCard />
          <ExpertAreaCard />
        </div>
        <div className="grid gap-6">
          <ProjectCard />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-2">
          <ServiceCard/>
        </div>
        <div className="col-span-1">
          <GreatingCard/>
        </div>
      </div>

    </>
  );
}
