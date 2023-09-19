'use client'

import { usePathname } from 'next/navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";
import Image from "next/image";
import backIcon from 'public/back-icon.png';
import backIconBlack from 'public/back-icon-black.png';
import logoLigth from 'public/NG_logo.png';
import logoDark from 'public/NG_logo_white.png';
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
    } else if (pathname.includes('/scenographie')) {
            pageData = {
                ... pageData,
                title: 'Scénographie',
                description: 'Directrice Artistique Junior & Designer Graphique',
                background: '#FFFFFF',
                theme: 'light',
            }
        }
    else if (pathname.includes('/print')) {
        pageData = {
            ... pageData,
            title: 'CV',
            description: 'Directrice Artistique Junior & Designer Graphique',
            background: '#CBCCC0',
            theme: 'light',
        }   }
const lightOrDark = (theme:String) => {
    if (theme === 'light') {
        return 'dark-text dark-border bg-white'
    } else {
        return 'ligth-text light-border'
    }}

    const lightOrDarkLogo = (theme:String) => {
        if (theme === 'light') {
            return logoLigth
        } else {
            return logoDark
        }
    }

  return (
      <html lang="fr">
        <head>
            <meta name="description" content={pageData.description}/>
            <meta name="og:title" content={pageData.title}/>
            <title>{pageData.title}</title>
            <link rel="stylesheet" href="https://use.typekit.net/hau7afk.css"/>
        </head>
      <body className={inter.className} style={pageData.background ? {backgroundColor : pageData.background} : {backgroundImage : pageData.backgroundImage} }>
      <div className={"flex items-center justify-between pt-4 pb-2 px-8 border-b " + lightOrDark(pageData.theme)}>
        <a href="#" className="block">
          <Image src={lightOrDarkLogo(pageData.theme)} alt="Logo" width={24} height={24}/>
        </a>

        <div className="flex space-x-6 navbar-titles">
          <Link href="/cv" className={"navbar-title text-black " + lightOrDark(pageData.theme)}>CV</Link>
            <Link href="/web" className={"navbar-title text-black " + lightOrDark(pageData.theme)}>Web</Link>
          <Link href="/print" className={"navbar-title text-black " + lightOrDark(pageData.theme)}>Print</Link>
          {/*<a href="#" className={"navbar-title text-black " + lightOrDark(pageData.theme)}>Web</a>*/}
          <Link  href="/photo" className={"navbar-title text-black " + lightOrDark(pageData.theme)}>Photographie</Link>
            <Link  href="/scenographie" className={"navbar-title text-black " + lightOrDark(pageData.theme)}><a href="#" className={"navbar-title text-black " + lightOrDark(pageData.theme)}>Scénographie</a> </Link>
        </div>
      </div>
      <div className={'relative'}>
        <div className={'back-button-container'} style={{display: isHome ? 'none' : 'block'}}>
            <Link href={/\/web\/[a-zA-Z]/.test(pathname) ? '/web' : '/'}>
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
