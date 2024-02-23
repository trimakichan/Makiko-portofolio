import { useState, useEffect, useRef } from "react";

export function useTypingEffect(
    textToType, 
    interKeyStrokeDurationInMs,
    delayStartTime
) {
    const [currentPosition, setCurrentPosition] = useState(0);
    let currentPositionRef = useRef(0)

    useEffect(() => {
        const delayStart = setTimeout(() => {
            const intervalId = setInterval(() => {
        
                setCurrentPosition((value) => value + 1); 
                currentPositionRef.current += 1;
                if (currentPositionRef.current > textToType.length) {
                    clearInterval(intervalId);
                    // setCurrentPosition(0);
                    // currentPositionRef.current = 0;
                }
    
            }, interKeyStrokeDurationInMs);
    
            // return () => {
            //     // console.log('clearInterval')
            //     // clearInterval(intervalId);
        
            // };

        }, delayStartTime);

        return () => clearTimeout(delayStart); 

    }, [interKeyStrokeDurationInMs, textToType, delayStartTime])

// Note: If text.substring(0,0), then it won't show any word. If text.substring(0,1), then M is shown. 
    return textToType.substring(0, currentPosition) 
}