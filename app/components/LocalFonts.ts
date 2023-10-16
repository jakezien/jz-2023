import localFont from "next/font/local"

export const Bau = localFont({
  src: [
    {
      path: '../fonts/BauPro-Regular.otf',
      weight: '400'
    },
    {
      path: '../fonts/BauPro-Medium.otf',
      weight: '500'
    },
    {
      path: '../fonts/BauPro-Bold.otf',
      weight: '700'
    }
  ]
}) 
