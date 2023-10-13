interface Project {
  slug: string
  title: string
  images: ProjectImage[]
  description?: string
  org?: string
  press?: Press[]
  date?: string
}