import Image from 'next/image'
import Vue1 from 'public/scene/Vue1.jpg'
import Dessin1 from 'public/scene/Dessin1.jpg'
import Dessin2 from 'public/scene/2.jpg'
import Dessin3 from 'public/scene/3.jpg'
import Dessin4 from 'public/scene/4.jpg'
import Vue2 from 'public/scene/Vue2.jpg'
import Vue3 from 'public/scene/Vue3.jpg'
import Vue4 from 'public/scene/Vue4.jpg'
import Vue5 from 'public/scene/Vue5.jpg'
import colorCircle1 from 'public/scene/scene_circle_1.png';
import colorCircle2 from 'public/scene/scene_circle_2.png';
import colorCircle3 from 'public/scene/scene_circle_3.png';

export default function Home() {
    return (
        <>
            <div className="relative flex flex-col justify-between w-full items-center">
                <div className={'page-title'}>
                    <h2 style={{verticalAlign: 'text-bottom', color: '#8E6638'}}>POP-UP STORE POUR LA MARQUE SACAI</h2>
                </div>
                <div className={'flex flex-row w-full scene-container-A'}>
                    <Image src={Vue1} alt="Scene 1" className={'image-A1'} height={716} width={1154}/>
                    <div className={'sub-container'}>
                        <Image src={Dessin1} alt={'Dessin 1'} className={'image-B1'}/>
                        <Image src={Dessin2} alt={'Dessin 2'} className={'image-B2'}/>
                        <div className="palette">
                            <Image src={colorCircle1} alt="Couleur 1" width={'38'} height={'38'}/>
                            <Image src={colorCircle2} alt="Couleur 2" width={'38'} height={'38'}/>
                            <Image src={colorCircle3} alt="Couleur 3" width={'38'} height={'38'}/>
                        </div>
                    </div>
                </div>
                <div className={'scene-container-B'}>
                    <Image src={Vue2} alt="Scene 2"/>
                </div>
                <div className={'flex flex-row w-full scene-container-C'}>
<div className="sub-container">
                        <Image src={Dessin3} alt={'Dessin 3'} className={'image-A1'}/>
                        <Image src={Dessin4} alt={'Dessin 4'} className={'image-A2'}/>
</div>
                    <Image src={Vue3} alt="Scene 3" className={'image-B1'}/>
                </div>
                <div className={'scene-container-D'}>
                    <Image src={Vue4} alt="Scene 4"/>
                </div>
                <div className="scene-container-E">
                    <Image src={Vue5} alt="Scene 5" className={'image-A1'}/>
                    <div className="sub-container">
                        <p>
                            Un Pop up immersif et rigoureux, respectueux d’une <span className={'strong'}>trame prédéfinie (trame de la fenêtre), composé de bois et de marbre.</span>
<br/>
                            Rigueur, technique et stabilité sont les mots d’ordre du Pop up. Je souhaite que celui-ci <span className={'strong'}>conserve son adn mode en gardant une certaine dimension Tokoite, mais également en reflétant le contemporain de la marque.</span>
                            <br/>
                            En partant de l’agencement de la vitrine, <span className={'strong'}>je reprends les espacements des fenêtres qui vont constituer ma trame.</span> Les portants, les présentoirs, le sol suivront cette trame. Elle rerpésente la stabilité.
                            <br/>
                            Les espaces entre les portants, pour laisser passer les clients, <span className={'strong'}>apporteront une rupture, une disruption, caractéristique de Sacai.</span>
                        </p>
                    </div>
                </div>

            </div>

        </>
    )
}
