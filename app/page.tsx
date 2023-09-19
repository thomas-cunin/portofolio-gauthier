import Image from 'next/image'
import portrait from 'public/img.png'
import Link from "next/link";
export default function Home() {
    return (
        <>
        <div style={{height: 'calc(100vh - 58px)'}} className="flex flex-row justify-between w-full">
            <div className="relative h-full">
                <Image src={portrait} alt="Portrait" className={'h-full w-auto'}/>
            </div>
            <div className="flex-grow bg-white relative flex items-center justify-center">
                <div className="infos-short flex flex-col max-w-sm">
                    <h2>Nolwenn GAUTHIER</h2>
                    <h4>Directrice Artistique Junior & Designer Graphique
                    </h4>
                    <p></p>
                </div>
            </div>
        </div>
            <div className="relative w-full h-auto">
                <div className="relative aspect-[16/9] overflow-hidden">
                    <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                        <source src="" type="video/mp4"/>
                    </video>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
                        <div className="flex flex-row justify-center items-center gap-28">
                            <div>
                                <Link href={'/web'}>
                                <button className="video-front-button text-black">
                                    WEB
                                </button>
                                </Link>
                            </div>
                            <div>
                                {/*<Link href={'/rebranding'}>*/}
                                <button className="video-front-button text-black">
                                    REBRANDING
                                </button>
                                {/*</Link>*/}
                            </div>
                            <div>
                                <Link href={'/photo'}>
                                <button className="video-front-button text-black">
                                    PHOTOGRAPHIE
                                </button>
                                </Link>
                            </div>
                            <div>
                                <button className="video-front-button text-black">
                                    SCÉNOGRAPHIE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
