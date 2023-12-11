import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {}

type WordColor = {
    word: string,
    color: string,
}

const words: Array<WordColor> = [
    { word: 'demographics', color: 'text-primary-dull' },
    { word: 'geographical location', color: 'text-primary-soft' },
    { word: 'natural resources', color: 'text-accent-dark' },
    { word: 'economic activity', color: 'text-accent' },
    { word: 'religious sects', color: 'text-my-purple-medium' },
    { word: 'ethnic history', color: 'text-orange-500' },
    { word: 'education levels', color: 'text-rose-400' },
    { word: 'access to markets', color: 'text-amber-700' },
    { word: 'sociocultural landscape', color: 'text-sky-400' },
    { word: 'unique fabrics.', color: 'text-primary'}
]

const AnimatedWord = ( { word, color } : WordColor ) => {
    const [isAppearing, setIsAppearing] = React.useState(true);
  
    // Example logic to change the state, triggering the removal animation
    React.useEffect(() => {
        if ( word == 'unique fabrics.' ) {
            setIsAppearing(true);
        } else {
            const timer = setTimeout(() => setIsAppearing(false), 1000);
            return () => clearTimeout(timer);
        }
    }, []);
  
    const animationStyle = {
      animation: isAppearing ? 'slideIn 0.5s ease-in-out forwards' : 'slideOut 0.5s ease-in-out forwards'
    };
  
    return (
      <span className={` ${ color } inline-block font-bold`} style={animationStyle}>
        { word }
      </span>
    );
  };



const DropInWords = (props: Props) => {
    const [currentWordIndex, setCurrentWordIndex ] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            console.log("currentWordIndex", currentWordIndex);
            if (currentWordIndex < words.length - 1) {
                const newIndex = currentWordIndex + 1;
                setCurrentWordIndex(newIndex);
            }
        }, 2000);
    
        // Clear the interval if the index reaches the end of the array
        if (currentWordIndex === words.length - 1) {
            clearInterval(interval);
        }
    
        // Cleanup function to clear the interval when the component unmounts or the index changes
        return () => clearInterval(interval);
    }, [currentWordIndex]);

    return (
        <div className=' leading-[5vh]'>
            Central to our approach is the recognition that every population has a complex mosaic of characteristics derived from its &nbsp;

            { words.map((word, index) => {
                if ( index == currentWordIndex ) {
                    return (
                        <AnimatedWord key={index} word={word.word} color={word.color} />
                    )
                }
            })}
            
        </div>
    )
}

export default DropInWords