'use client'
import { useProjects } from "../context/ProjectContext";
import Image from "next/image";

interface Props {

}

const ProjectsGallery: React.FC<Props> = ({}) => {
  const { projects, orgs, byOrg } = useProjects();

  return (
    <div className="px-4">
      <h1>Work</h1>
      {Object.entries(byOrg).map(([org, orgProjects]) => (
        <div key={org} className="mb-16 md:flex md:flex-row">
          <div className="md:w-1/4 flex-shrink-0 pr-8">
            <h2>{org}</h2>
            <p>{orgs.filter((o) => { return org == o.name })[0].description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {orgProjects.map((project, index) => (
              <div key={index} className="overflow-hidden">
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  width={1000}
                  height={750}
                  className="aspect-4/3 object-cover"
                />
                <p>{project.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGallery