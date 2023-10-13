'use client'
import Link from "next/link";
import { useProjects } from "../context/ProjectContext";
import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google"
import { Inter } from "next/font/google"
import { useEffect } from "react";
const plex = IBM_Plex_Mono({ weight: ['700'], subsets: ['latin'] })
// const inter = Inter({ weight: ['500'], subsets: ['latin'] })

interface Props { }

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {orgProjects.map((project, index) => (
              <Link href={`/projects/${org.slug}-${project.slug}`} key={index}>
                <div className="overflow-hidden bg-white p-3 pb-6 rounded-md shadow-sm transition-all hover:scale-[101%] hover:shadow-md ease-in-out duration-200">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    width={1000}
                    height={750}
                    className="aspect-4/3 object-cover mb-2 transition-opacity opacity-0 duration-500 rounded overflow-hidden"
                    onLoadingComplete={(image) => {image.classList.remove('opacity-0')}}
                  />
                  <p className={"text-lg font-medium "}>{project.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        )
      })}
      {projects.length > 0 &&
        <div>
          <h2 className="pb-40 text-stone-500">More work coming soon :)</h2>
        </div>
      }
    </div>
  );
};

export default ProjectsGallery