'use client'
import { useProjects } from "@/app/context/ProjectContext"
import { IBM_Plex_Mono } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { H1, H2 } from "./TypeStyles"
import { Bau } from "./LocalFonts"
import PivotPowerContent from "./PivotPowerContent"


interface Props {
  slug: string
  className?: string
}

const ProjectDetail: React.FC<Props> = ({ slug, className }) => {
  const { projects, orgs, byOrg } = useProjects()

  let slugParts = slug.split('-')
  const orgSlug = slugParts.shift()
  const projectSlug = slugParts.join('-')

  const org: Org | undefined = orgs.filter((o) => { console.log(o); return o.slug == orgSlug }).shift()
  if (org == undefined) {
    return (
      <div></div>
    )
  }

  const project = byOrg[org.name].filter((p) => { return p.slug == projectSlug })[0]
  if (project == undefined) {
    return (
      <div></div>
    )
  } 

  const projectHeader = (
    <div className="px-6">
      <H1 className={"mb-0 mt-4 leading-tight text-stone-800 "}><span className="">{project.title}</span></H1>
      <H2 className={"mt-0 "}>at {org.name}</H2>
      <p className={'text-2xl text-stone-500 leading-7 mt-4 mb-8 w-10/12 ' + Bau.className}>
        {project.description}
      </p>
    </div>
  )

  const projectImagesContent = (
    <div className="px-6">
      {project.images.map((img, i) => {return (
        <div key={i} className="mb-40">
          <Image
            src={img.src} alt={img.alt}
            width={2000} height={1124}
            className="transition-opacity opacity-0 duration-500"
            onLoadingComplete={(image) => {image.classList.remove('opacity-0')}}
          />
          <p className={"text-xl mt-4 ml-0 max-w-prose text-stone-700 " }>
            {img.description}
          </p>
        </div>
      )
      })}
    </div>
  )

  const projectFooter = (
    <div className="pb-40 p-6">
      <Link href="/" className={"text-4xl text-stone-600 hover:text-stone-500 active:text-stone-400 " + Bau.className}>
          <span className="underline ">All projects</span> &rarr;
        </Link>
      </div>
  )

  return (
    <div>
      {projectHeader}
      {project.slug === 'pivot-power' ? 
        <PivotPowerContent project={project} /> :
        projectImagesContent
      }
      {projectFooter}
    </div>
  )
}

export default ProjectDetail