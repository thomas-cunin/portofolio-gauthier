import Image from "next/image";
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
// @ts-ignore
export default function Home({params: {letter}}) {
    // find the letter in the alphabet array
    const letterIndex = fullAlphabetArray.findIndex((letterObject) => letterObject.letter === letter || letterObject.letter.toLowerCase() === letter)
    return (
        <>
            <div className="relative flex flex-col justify-between w-full items-center">
                <div className={'page-title'} style={{marginTop:'75px'}}>
                    <div className={'big-letter-container'}>
                        <div className={'big-letter relative'}>
                            <Image src={fullAlphabetArray[letterIndex].image} alt={`Lettre ${alphabetArray[letterIndex].letter}`} width={954} height={954}/>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}