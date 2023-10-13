import { ProjectsProvider } from "@/app/context/ProjectContext"
import ProjectDetail from "@/app/components/ProjectDetail"
import Header from "@/app/components/Header"

const ProjectWrap: React.FC = (props: any) => {

  const param = props.params
  const id: string = param.projectId
  
  return (
    <ProjectsProvider>
      <Header/>
      <ProjectDetail slug={id} className="max-w-6xl mx-auto" />
    </ProjectsProvider>
  )
}

export default ProjectWrap