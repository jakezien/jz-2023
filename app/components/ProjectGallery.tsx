'use client'
import Link from "next/link";
import { useProjects } from "../context/ProjectContext";
import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google"
const plex = IBM_Plex_Mono({ weight: ['700'], subsets: ['latin'] })

interface Props {

}

const ProjectsGallery: React.FC<Props> = ({ }) => {
  const { projects, orgs, byOrg } = useProjects();

  return (
    <div className="px-4">
      <h1 className={"" + plex.className}>Work</h1>
      {Object.entries(byOrg).map(([orgName, orgProjects]) => {
        const org: Org = orgs.filter((o) => { return orgName == o.name })[0]
        return (
        <div key={org.slug} className="mb-16 md:flex md:flex-row">
          <div className="md:w-1/4 flex-shrink-0 pr-8">
              <h2 className="leading-tight text-stone-700 text-stone mt-0">
                {org.name}
              </h2>
              <p className="mb-4 leading-tight text-stone-500 ">
                {org.description}
              </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {orgProjects.map((project, index) => (
              <Link href={`/projects/${org.slug}-${project.slug}`} key={index}>
                <div className="overflow-hidden mb-4">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    width={1000}
                    height={750}
                    className="aspect-4/3 object-cover mb-2"
                  />
                  <p>{project.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        )
      })}
      <div>
        <h2 className="pb-40 text-stone-500">More work coming soon :)</h2>
      </div>
    </div>
  );
};

export default ProjectsGallery