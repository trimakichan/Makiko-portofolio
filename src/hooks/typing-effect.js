import { useState, useEffect, useRef } from "react";

export function useTypingEffect(
    textToType, //Makiko
    interKeyStrokeDurationInMs
) {
    const [currentPosition, setCurrentPosition] = useState(0);
    let currentPositionRef = useRef(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('interval')
            setCurrentPosition((value) => value + 1); 
            currentPositionRef.current += 1;
            if (currentPositionRef.current > textToType.length) {
                clearInterval(intervalId);
            }


        }, interKeyStrokeDurationInMs);

        return () => {
            clearInterval(intervalId);
            setCurrentPosition(0);
            currentPositionRef.current = 0;
        }
    }, [interKeyStrokeDurationInMs, textToType])

    return textToType.substring(0, currentPosition)
}