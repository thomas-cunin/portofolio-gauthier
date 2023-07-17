import Image from 'next/image'
import portrait from 'public/img.png'
import Link from "next/link";
import nikeA from 'public/nike/2.png';
import nikeB from 'public/nike/1.png';
import nikeC from 'public/nike/3.png';
import colorCircle1 from 'public/nike/nike_circle_1.png';
import colorCircle2 from 'public/nike/nike_circle_2.png';
import colorCircle3 from 'public/nike/nike_circle_3.png';


export default function Home() {
    return (
        <>
            <div className="relative flex flex-col justify-between w-full items-center">
                <div className={'page-title'}>
                    <h2 style={{verticalAlign:'text-bottom'}}>SHOOTING FICITF POUR NIKE, THÈME BASKET-BALL</h2>
                </div>
                <div className={'galery-container'}>
                    <div className={'left-galery'}>
                        <div className={'nike-A1'}>
                            <Image src={nikeA} alt="nike-A1" width={'619'} height={'413'} className={'A1-image'}/>
                            <div className="palette">
                                <Image src={colorCircle1} alt="Couleur 1" width={'38'} height={'38'}/>
                                <Image src={colorCircle2} alt="Couleur 2" width={'38'} height={'38'}/>
                                <Image src={colorCircle3} alt="Couleur 3" width={'38'} height={'38'}/>
                            </div>
                        </div>
                        <div className={'w-full'}>
                            <Image src={nikeB} alt={'nike-B1'} width={'880'} height={'1320'}/>
                        </div>
                        <div className={'nike-A2'}>
                            <div className={'A2-description'}>
                                <p className={'A2-p'}>J’ai voulu me focaliser sur le basket, <span className={'A2-strong'}>car les mouvements et la tenue de ce sport pouvaient rendre le mannequin et le décor photogéniques.</span>
                                    <br/>J’ai imaginé créer moi- même le décor, <span className={'A2-strong'}>un terrain de basket, grâce à du scotch de couleur pour créer les bandes du terrain.</span> </p>
                            </div>
                            <Image src={nikeC} alt="nike-A2" width={'497'} height={'746'} className={'A2-image'}/>
                        </div>
                    </div>
                    <div className={'right-galery'}>
                        <Image src={nikeB} alt={'nike-B2'} width={'335'} height={'503'}/>
                        <Image src={nikeC} alt={'nike-C1'} width={'335'} height={'502'}/>
                    </div>
                </div>
            </div>

        </>
    )
}
