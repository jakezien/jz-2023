import { Children, PropsWithChildren } from "react";
import { Bau } from "./LocalFonts";

interface Props {
  className?: string
}

export const H1: React.FC<PropsWithChildren<Props>> = ({className, children}) => {

  const classes = [
    'font-bold text-5xl tracking-tight ',
    Bau.className,
    className ?? ''
  ]

  
  return (
    <h1 className={classes.join(' ')}>
      {children}
    </h1>
  )
}

export const H2: React.FC<PropsWithChildren<Props>> = ({className, children}) => {

  const classes = [
    'font-bold text-2xl leading-tight text-stone-600 tracking-[-0.0125em]',
    Bau.className,
    className ?? ''
  ]

  
  return (
    <h2 className={classes.join(' ')}>
      {children}
    </h2>
  )
}



