'use client'
import { createContext, useContext, useState, PropsWithChildren, useEffect } from "react";

interface FavesContextType {
  faves: Fave[]
}

const FavesContext = createContext<FavesContextType>({
  faves: []
})

export const FavesProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const [faves, setFaves] = useState<Fave[]>([])
  
  async function getFavesData() {
    const domain = process.env.NEXT_PUBLIC_SITE_URL
    const url = `${domain}/api/faves`
    console.log(domain, url)
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  
  useEffect(() => {
    async function fetch() {
      let data = await getFavesData()
      let faves: Fave[] = data.faves[0]
      console.log('hi', faves)
    
      setFaves(faves)
    }
    fetch()
  }, [])

  
  return (
    <FavesContext.Provider value={{
      faves: faves,
    }}>
      {children}
    </FavesContext.Provider>
  );
};



export const useFaves = () => {
  return useContext(FavesContext)
}