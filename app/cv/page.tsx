import Image from 'next/image'
import portrait from 'public/img.png'


export default function CV() {
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
                        <p>Votre texte centré</p>
                    </div>
                </div>
            </div>

        </>
    )
}
