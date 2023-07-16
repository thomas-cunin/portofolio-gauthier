import Image from 'next/image'
import portrait from 'public/img.png'
import Link from "next/link";
import nikeA from 'public/nike/2.png';
import nikeB from 'public/nike/1.png';
import nikeC from 'public/nike/3.png';


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
                            <Image src={nikeA} alt="nike-A1" width={'619'} height={'413'}/>
                        </div>
                        <div className={'w-full'}>
                            <Image src={nikeB} alt={'nike-B1'} width={'880'} height={'1320'}/>
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
