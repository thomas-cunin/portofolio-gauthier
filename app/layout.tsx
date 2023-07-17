'use client'

import { usePathname } from 'next/navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";
import Image from "next/image";
import backIcon from 'public/back-icon.png';
import backIconBlack from 'public/back-icon-black.png';
//import next navigation

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const pathname = usePathname();
    let isHome = false;
    let pageData = {
        title: 'Nolwenn Gauthier',
        description: 'Directrice Artistique Junior & Designer Graphique',
        background: '#FFFFFF',
        theme: 'light',
        backgroundImage: '',
    }

        if (pathname === '/') {
        pageData = {

        ... pageData,
            title: 'Nolwenn Gauthier',
            description: 'Directrice Artistique Junior & Designer Graphique',
            background: '#FFFFFF',
            theme: 'light',
        };
        isHome = true;
    } else if (pathname.includes('/web')) {
        pageData = {

        ... pageData,
            title: 'Alphabet Vogue',
            description: 'Directrice Artistique Junior & Designer Graphique',
            background: '#7379A5',
            theme: 'dark',
        }
    } else if (pathname.includes('/photo')) {
        pageData = {
            title: 'Photographie Nike',
            description: 'Directrice Artistique Junior & Designer Graphique',
            background: '',
            theme: 'dark',
            backgroundImage: 'url(/nike/gray_bg.png)',
        }
    }
const lightOrDark = (theme:String) => {
    if (theme === 'light') {
        return 'dark-text dark-border bg-white'
    } else {
        return 'ligth-text light-border'
    }
}
  return (
      <html lang="fr">
        <head>
            <meta name="description" content={pageData.description}/>
            <meta name="og:title" content={pageData.title}/>
            <title>{pageData.title}</title>
        </head>
      <body className={inter.className} style={pageData.background ? {backgroundColor : pageData.background} : {backgroundImage : pageData.backgroundImage} }>
      <div className={"flex items-center justify-between pt-4 pb-2 px-8 border-b-2 " + lightOrDark(pageData.theme)}>
        <a href="#" className="block">
          <img src="path/to/your/logo.png" alt="Logo" className="w-8 h-8"/>
        </a>

        <div className="flex space-x-6">
          <Link href="/cv" className={"navbar-title text-black " + lightOrDark(pageData.theme)}>CV</Link>
            <Link href="/web" className={"navbar-title text-black " + lightOrDark(pageData.theme)}>Web</Link>
          <a href="#" className={"navbar-title text-black " + lightOrDark(pageData.theme)}>Print</a>
          <a href="#" className={"navbar-title text-black " + lightOrDark(pageData.theme)}>Web</a>
          <Link  href="/photo" className={"navbar-title text-black " + lightOrDark(pageData.theme)}>Photographie</Link>
          <a href="#" className={"navbar-title text-black " + lightOrDark(pageData.theme)}>Scénographie</a>
        </div>
      </div>
      <div className={'relative'}>
        <div className={'back-button-container'} style={{display: isHome ? 'none' : 'block'}}>
            <Link href={'/'}>
            <div className={'back-button'}>
                {
                    pageData.theme === 'dark' ? (
                        <Image src={backIcon} alt={'Retour à la page d\'accueil'} width={34} height={66}/>
                    ) : (
                        <Image src={backIconBlack} alt={'Retour à la page d\'accueil'} width={34} height={66}/>
                    )
                }
            </div>
            </Link>
        </div>
      {children}
      </div>
      </body>
      </html>
  )
}
