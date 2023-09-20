import Image from "next/image";
import Image1 from 'public/kiabi/mockup.jpg';
import Logo from 'public/kiabi/logo.png';
import Image2 from 'public/kiabi/situation.jpg';
import Image3 from 'public/kiabi/affiche.jpg';
import Circle1 from 'public/kiabi/color-circle-1.png';
import Circle2 from 'public/kiabi/color-circle-2.png';
import Circle3 from 'public/kiabi/color-circle-3.png';
import Appli from 'public/kiabi/Appli.png';
export default function Home() {
    return (
        <>
            <div className="relative flex flex-col justify-between w-full items-center">
                <div className={'page-title'}>
                    <h2 style={{verticalAlign: 'text-bottom', color: '#957952'}}>REFONTE DE L’IDENTITÉ VISUELLE DE KIABI SELON UN NOUVEAU POSITIONNEMENT PREMIUM</h2>
                </div>
                <div className={'k-image-A1'}>
                    <Image src={Image1} alt={``} width={954} height={954}/>
                </div>
                <div className={'k-container'}>
                    <div className="sub-container-B1">
                        <Image src={Logo} alt="" width={410} height={187}/>
                        <div className={'palette'}>
                            <Image src={Circle1} alt={""} width={45} height={45}/>
                            <Image src={Circle2} alt={""} width={45} height={45}/>
                            <Image src={Circle3} alt={""} width={45} height={45}/>
                        </div>
                    </div>
                    <div className="sub-container-B2">
                        <p className={'b2-p1'}>Refonte de l’identité visuelle de Kiabi dans un nouveau positionnement premium, avec pour <span className={"strong"}>concept la famille, un style bohème chic, et une baseline qui reflète l’intemporel de la marque.</span>
                        </p>
                        <Image src={Appli} alt={''} height={600} width={900} />
                        <p className={'b2-p2'}>L’application permet de suivre en direct les défilés au sein des boutiques et de pouvoir acheter <span className={"strong"}>en ligne les articles portés lors du défilé. A la fin du défilé, les clients peuvent venir récupérer leurs commandes. </span></p>
                    </div>
                </div>
                <div className="k-image-A2">
                    <Image src={Image2} alt={``} width={954} height={954}/>
                </div>
                <div className="k-big-image-container">
                    <div className="k-big-image">
                        <Image src={Image3} alt={``} width={954} height={954}/>
                    </div>
                </div>
            </div>

        </>
    )
}