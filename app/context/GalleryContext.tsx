'use client'
import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction, PropsWithChildren } from "react";
import { Project, ProjectImage } from "../api/projects/route";


interface GalleryContextType {
  allItems: GalleryItem[],
  currentItem: GalleryItem,
  setCurrentItem: Dispatch<SetStateAction<GalleryItem>>,
  nextItem: GalleryItem,
  setNextItem: Dispatch<SetStateAction<GalleryItem>>,
  prevItem: GalleryItem,
  setPrevItem: Dispatch<SetStateAction<GalleryItem>>,
  translation: number,
  setTranslation:  Dispatch<SetStateAction<number>>,
}

export interface GalleryItem {
  project: Project,
  projectIndex: number,
  image: ProjectImage,
  imageIndex: number
}

let defaultGalleryItem = {
  project: { title: "", images: []},
  projectIndex: 0,
  image: { src: "", alt: ""},
  imageIndex: 0
}

const defaultContextValue: GalleryContextType = {
  allItems: [],
  currentItem: defaultGalleryItem,
  setCurrentItem: () => { },
  nextItem: defaultGalleryItem,
  setNextItem: () => { },
  prevItem: defaultGalleryItem,
  setPrevItem: () => { },
  translation: 0,
  setTranslation: () => {}
}

const GalleryContext = createContext<GalleryContextType>(defaultContextValue)

interface GalleryProviderProps {
  projects: Project[]
}

export const GalleryProvider: React.FC<PropsWithChildren<GalleryProviderProps>> = ({ projects, children }) => {

  const allItems = projects.flatMap((project, projectIndex) => {
    return project.images.map((image, imageIndex) => {
      return {
        project: project,
        projectIndex: projectIndex,
        image: image,
        imageIndex: imageIndex
      }
    })
  })

  const [currentItem, setCurrentItem] = useState<GalleryItem>(defaultGalleryItem);
  const [nextItem, setNexttItem] = useState<GalleryItem>(defaultGalleryItem);
  const [prevItem, setPrevItem] = useState<GalleryItem>(defaultGalleryItem)
  const [translation, setTranslation] = useState<number>(0.0);

  useEffect(() => {
    setCurrentItem(allItems[0])
  }, [])

  return (
    <GalleryContext.Provider value={{
      allItems: allItems,
      currentItem: currentItem,
      setCurrentItem: setCurrentItem,
      nextItem: nextItem,
      setNextItem: setNexttItem,
      prevItem: prevItem,
      setPrevItem: setPrevItem,
      translation: translation,
      setTranslation: setTranslation
    }}>
      {children}
    </GalleryContext.Provider>
  );
};



export const useGallery = () => {
  return useContext(GalleryContext)
}