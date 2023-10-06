'use client'
import { createContext, useContext, useState, PropsWithChildren, useEffect } from "react";
import { Project, ProjectImage, Org } from "../api/projects/route";
// import { headers } from "next/headers";


interface ProjectsContextType {
  projects: Project[],
  byOrg: Record<string, Project[]>,
  orgs: Org[]
}

const ProjectsContext = createContext<ProjectsContextType>({
  projects: [], byOrg: {}, orgs: []
})

export const ProjectsProvider: React.FC<PropsWithChildren> = ({ children }) => {


  const [projects, setProjects] = useState<Project[]>([])
  const [byOrg, setByOrg] = useState<Record<string, Project[]>>({})
  const [orgs, setOrgs] = useState<Org[]>([])
  
  async function getProjectData() {
    // const domain = headers().get('host');
    const domain = 'localhost:3000'
    const res = await fetch(`http://${domain}/api/projects`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  
  useEffect(() => {
    const projectsByOrg: Record<string, Project[]> = {};
    async function fetch() {
      let data = await getProjectData()
      let projects: Project[] = data.projectsAndOrgs.projects
      let orgs: Org[] = data.projectsAndOrgs.orgs
      
      projects.forEach((project) => {
        if (project.org) {
          if (!projectsByOrg[project.org]) {
            projectsByOrg[project.org] = [];
          }
          projectsByOrg[project.org].push(project);
        }
      });
    
      setProjects(projects)
      setByOrg(projectsByOrg)
      setOrgs(orgs)
    }
    fetch()
  }, [])

  
  return (
    <ProjectsContext.Provider value={{
      projects: projects,
      byOrg: byOrg,
      orgs: orgs
    }}>
      {children}
    </ProjectsContext.Provider>
  );
};



export const useProjects = () => {
  return useContext(ProjectsContext)
}