import Image from 'next/image'
import portrait from 'public/img.png'
import Link from "next/link";

const fullAlphabet = {
    'a': {
        letter: 'A',
        image: '/alphabet/A.jpg',
    },
    'b': {
        letter: 'B',
        image: '/alphabet/B.jpg',
    },
    'c': {
        letter: 'C',
        image: '/alphabet/C.jpg',
    },
    'd': {
        letter: 'D',
        image: '/alphabet/D.jpg',
    },
    'e': {
        letter: 'E',
        image: '/alphabet/E.jpg',
    },
    'f': {
        letter: 'F',
        image: '/alphabet/F.jpg',
    },
    'g': {
        letter: 'G',
        image: '/alphabet/G.jpg',
    },
    'h': {
        letter: 'H',
        image: '/alphabet/H.jpg',
    },
    'i': {
        letter: 'I',
        image: '/alphabet/I.jpg',
    },
    'j': {
        letter: 'J',
        image: '/alphabet/J.jpg',
    },
    'k': {
        letter: 'K',
        image: '/alphabet/K.jpg',
    },
    'l': {
        letter: 'L',
        image: '/alphabet/L.jpg',
    },
    'm': {
        letter: 'M',
        image: '/alphabet/M.jpg',
    },
    'n': {
        letter: 'N',
        image: '/alphabet/N.jpg',
    },
    'o': {
        letter: 'O',
        image: '/alphabet/O.jpg',
    },
    'p': {
        letter: 'P',
        image: '/alphabet/P.jpg',
    },
    'q': {
        letter: 'Q',
        image: '/alphabet/Q.jpg',
    },
    'r': {
        letter: 'R',
        image: '/alphabet/R.jpg',
    },
    's': {
        letter: 'S',
        image: '/alphabet/S.jpg',
    },
    't': {
        letter: 'T',
        image: '/alphabet/T.jpg',
    },
    'u': {
        letter: 'U',
        image: '/alphabet/U.jpg',
    },
    'v': {
        letter: 'V',
        image: '/alphabet/V.jpg',
    },
    'w': {
        letter: 'W',
        image: '/alphabet/W.jpg',
    },
    'x': {
        letter: 'X',
        image: '/alphabet/X.jpg',
    },
    'y': {
        letter: 'Y',
        image: '/alphabet/Y.jpg',
    },
    'z': {
        letter: 'Z',
        image: '/alphabet/Z.jpg',
    },
}
const alphabet = {
    'a': {
        letter: 'A',
        image: '/alphabet/A.jpg',
    },
    'b': {
        letter: 'B',
        image: '/alphabet/B.jpg',
    },
    'c': {
        letter: 'C',
        image: '/alphabet/C.jpg',
    },
    'd': {
        letter: 'D',
        image: '/alphabet/D.jpg',
    },
    'e': {
        letter: 'E',
        image: '/alphabet/E.jpg',
    },
    'f': {
        letter: 'F',
        image: '/alphabet/F.jpg',
    },
    'g': {
        letter: 'G',
        image: '/alphabet/G.jpg',
    },
    'h': {
        letter: 'H',
        image: '/alphabet/H.jpg',
    },
    'i': {
        letter: 'I',
        image: '/alphabet/I.jpg',
    },
    'j': {
        letter: 'J',
        image: '/alphabet/J.jpg',
    },
    'k': {
        letter: 'K',
        image: '/alphabet/K.jpg',
    },
    'l': {
        letter: 'L',
        image: '/alphabet/L.jpg',
    },
    'm': {
        letter: 'M',
        image: '/alphabet/M.jpg',
    },
    // 'n': {
    //     letter: 'N',
    //     image: '/alphabet/N.jpg',
    // },
    'o': {
        letter: 'O',
        image: '/alphabet/O.jpg',
    },
    'p': {
        letter: 'P',
        image: '/alphabet/P.jpg',
    },
    'q': {
        letter: 'Q',
        image: '/alphabet/Q.jpg',
    },
    'r': {
        letter: 'R',
        image: '/alphabet/R.jpg',
    },
    's': {
        letter: 'S',
        image: '/alphabet/S.jpg',
    },
    't': {
        letter: 'T',
        image: '/alphabet/T.jpg',
    },
    'u': {
        letter: 'U',
        image: '/alphabet/U.jpg',
    },
    'v': {
        letter: 'V',
        image: '/alphabet/V.jpg',
    },
    // 'w': {
    //     letter: 'W',
    //     image: '/alphabet/W.jpg',
    // },
    // 'x': {
    //     letter: 'X',
    //     image: '/alphabet/X.jpg',
    // },
    // 'y': {
    //     letter: 'Y',
    //     image: '/alphabet/Y.jpg',
    // },
    // 'z': {
    //     letter: 'Z',
    //     image: '/alphabet/Z.jpg',
    // },
}
const alphabetArray = Object.values(alphabet)
const fullAlphabetArray = Object.values(fullAlphabet)

export default function Home() {
    console.log(alphabetArray)
    return (
        <>
            <div className="relative flex flex-col justify-between w-full items-center">
                <div className={'page-title'}>
                    <h2 style={{verticalAlign:'text-bottom'}}>CRÉATION D’UN ALPHABET FICTIF POUR LA MARQUE VOGUE</h2>
                </div>
                <div className={'letters-list'}
                     style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '20px'}}>
                    {Object.values(alphabet).map((lettre, index) => (
                        <div key={index}>
                            <Link href={`#`}>
                            <img src={lettre.image} alt={`Lettre ${lettre.letter}`} style={{width: '100%'}}/>
                            </Link>
                            </div>
                    ))}
                </div>
                <div className={'big-letter-container'}>

                    <div className={'big-letter relative'}>
                        <div className={'letter-description-top'}>
                            <p>Pour le compte Instagram de <span className={'vogue-upper'}></span>VOGUE,
                                réaliser un alphabet <span className={'strong'}>mettant en scène
                                    un produit, un style, une matière ou une personnalité</span> suivant la lettre. </p>
                        </div>
                        <Image src={fullAlphabetArray[22].image} alt={`Lettre ${alphabetArray[0].letter}`} width={954} height={954}/>
                    </div>
                    <div className={'letter-footer'}>
                        <p>
                            Chaque lettre est remplie de la matière du produit qu’elle représente. Comme c’est le cas <span className={'strong'}>ici pour le W de Wetsuit, qui est incorporé de la matière de la combinaison.</span> Le mot représenté sera écrit en premier dans la description.
                        </p>
                    </div>
                </div>
                <div className={'big-letter-container letter-with-bottom-margin'}>
                    <div className={'big-letter relative'}>
                        <Image src={fullAlphabetArray[23].image} alt={`Lettre ${alphabetArray[1].letter}`} width={954} height={954}/>
                    </div>
                </div>
                <div className={'big-letter-container letter-with-bottom-margin'}>
                    <div className={'big-letter relative'}>
                        <Image src={fullAlphabetArray[24].image} alt={`Lettre ${alphabetArray[2].letter}`} width={954} height={954}/>
                    </div>
                </div>
                <div className={'big-letter-container'}>
                    <div className={'big-letter relative'}>
                        <video autoPlay loop muted>
                            <source src="/alphabet/letters_animation_parrallax.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

        </>
    )
}
