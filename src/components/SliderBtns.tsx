import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { useSwiper } from 'swiper/react';

interface SliderBtnsProps {
    containerStyles: string;
    btnStyles: string;
    iconsStyles: string;
}

export default function SliderBtns({ containerStyles, btnStyles, iconsStyles }: SliderBtnsProps) {
    const swiper = useSwiper();

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconsStyles}/>
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconsStyles}/>
            </button>
        </div>
    )
}