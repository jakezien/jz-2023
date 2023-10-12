'use client'
import { useProjects } from "@/app/context/ProjectContext"
import { IBM_Plex_Mono } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
const plex = IBM_Plex_Mono({ weight: ['400', '700'], subsets: ['latin'] })

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

  return (
    <div className={"px-6 " + className}>
      <h1 className={"mb-0 leading-tight " + plex.className}>{project.title}</h1>
      <h2 className="mt-0 text-stone-500">at {org.name}</h2>
      <p className={"text-xl leading-tight text-stone-500 max-w-prose ml-0 mt-8 mb-16 " + plex.className}>
        {project.description}
      </p>
      <div className="">
        {project.images.map((img, i) => {return (
          <div key={i} className="mb-40">
            <Image
              src={img.src} alt={img.alt}
              width={2000} height={1124}
              className="transition-opacity opacity-0 duration-500"
              onLoadingComplete={(image) => {image.classList.remove('opacity-0')}}
            />
            <p className="mt-4 ml-0 max-w-prose">
              {img.description}
            </p>
          </div>
        )})}
      </div>
      <div className="pb-40">

        <Link href="/" className={"text-xl " + plex.className}>
          <span className="underline">All projects</span> &rarr;
        </Link>

      </div>
    </div>
  )
}

export default ProjectDetail