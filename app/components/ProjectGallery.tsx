'use client'
import Link from "next/link";
import { useProjects } from "../context/ProjectContext";
import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google"
import { Bau } from "./LocalFonts";
import {H1, H2} from "./TypeStyles";

interface Props { }

const ProjectsGallery: React.FC<Props> = ({ }) => {
  const { projects, orgs, byOrg } = useProjects();

  return (
    <div className="px-4">
      <H1 className="mb-4 text-stone-600 ">Work</H1>
      {Object.entries(byOrg).map(([orgName, orgProjects]) => {
        const org: Org = orgs.filter((o) => { return orgName == o.name })[0]
        return (
        <div key={org.slug} className="mb-16 md:flex md:flex-row">
          <div className="md:w-1/4 flex-shrink-0 pr-8">
              <H2 className={" text-stone-600 mt-0 mb-1"}>
                {org.name}
              </H2>
              <p className={"mb-4 leading-[1.15rem] text-base text-stone-500 w-7/8 tracking-[0.025em] " + Bau.className}>
                {org.description}
              </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-1.5 gap-y-2">
            {orgProjects.map((project, index) => (
              <Link href={`/projects/${org.slug}-${project.slug}`} key={index}>
                <div className="overflow-hidden bg-white rounded-md shadow-sm transition-all hover:scale-[101%] hover:shadow-md ease-in-out duration-200">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    width={1000}
                    height={750}
                    className="aspect-4/3 object-cover transition-opacity opacity-0 duration-500 "
                    onLoadingComplete={(image) => {image.classList.remove('opacity-0')}}
                  />
                  <p className={"text-lg p-2 pb-8 w-[85%] leading-5 mt-1 text-stone-600 font-medium  " + Bau.className}>{project.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        )
      })}
      {projects.length > 0 &&
        <div>
          <H1 className="mb-4 text-stone-300 ">More work coming soon :)</H1>

          <p className={"pb-40 text-stone-300 text-4xl tracking-[-0.04em] " + Bau.className}></p>
        </div>
      }
    </div>
  );
};

export default ProjectsGallery