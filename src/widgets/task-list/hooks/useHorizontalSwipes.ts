import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export const useHorizontalSwipes = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const SwipeHandlers = useSwipeable({ 
        onSwipedLeft: 
        ({ event }) => {
        if(event.currentTarget && event.currentTarget instanceof HTMLElement){
            if (Math.ceil(event.currentTarget.childElementCount / 4) >= currentSlide + 2) {
            event.currentTarget.style.transform = `translateX(calc(${(currentSlide+1) * -100}% - ${(currentSlide+1)*8}px))`;
            setCurrentSlide(currentSlide + 1)
            }
        }  
        },         
        onSwipedRight:  
        ({ event }) => {
        if(event.currentTarget && event.currentTarget instanceof HTMLElement){
            if (currentSlide-1 >=  0) {
            event.currentTarget.style.transform = `translateX(calc(${(currentSlide-1) * -100}% - ${(currentSlide-1)*8}px))`;
            setCurrentSlide(currentSlide - 1)
            }
        }
        }
    })

    const refPassthrough = (el: HTMLUListElement | null) => {
        SwipeHandlers.ref(el);
    }

    return [SwipeHandlers, refPassthrough, currentSlide] as const
}