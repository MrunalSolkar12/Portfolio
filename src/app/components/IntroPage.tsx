import React, { useState, useEffect } from "react";
import {Slide,Fade,Hinge} from "react-awesome-reveal";

export const IntroPage:React.FC=()=>{
    const [showTextAnimation, setShowTextAnimation] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setShowTextAnimation(false);
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);


    return(
        <>
            <div className={`intro-container  bg-white  ${showTextAnimation ? "show" : ""}`}>
                
                <h1 className={`text-animation md:pl-28 md:w-96 text-3xl md:text-5xl lg:text-7xl text-black font-extrabold font-sans ${showTextAnimation ? "show" : ""}`}>
                <Slide  duration={500} fraction={0.5}>
                    Mrunal 
                    </Slide>
                    <Slide  duration={700} fraction={0.5}>
                    Solkar
                    </Slide>
                    <Slide  duration={900} fraction={0.5}>
                        @folio
                    </Slide>
                    <Slide  duration={1100} fraction={0.5}>
                    2024
                    </Slide></h1>
                
            </div>  
        </>
    );

}