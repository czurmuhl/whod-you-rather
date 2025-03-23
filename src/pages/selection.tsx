"use client";

import Image from "next/image";
import {useState, useEffect} from "react";


function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


export default function Selection(){
    const [leftImage, setLeftImage] = useState("")
    const [rightImage, setRightImage] = useState("")
    const [finalRound, setFinalRound] = useState(false)

    const numMen: number = 23
    let men: string[] = []
    for(let i = 1; i <= numMen; i++){
        men.push(`/images/men/${i}.jpg`)
    }
    
    useEffect(() => {
        let randomLeft: string = men[getRandomInt(0, men.length-1)]
        men = men.filter(man => man !== randomLeft)
        setLeftImage(randomLeft)
    
        let randomRight: string = men[getRandomInt(0, men.length-1)]
        men = men.filter(man => man !== randomRight)
        setRightImage(randomRight)

    }, [])

    const handleImageClick = (side: string) => {
        if(finalRound){
            return
        }

        if(men.length > 0) { 
            let randomMan: string = men[getRandomInt(0, men.length-1)]
            men = men.filter(man => man !== randomMan)

            if(side === 'left') {
                setLeftImage(randomMan)

            } else {
                setRightImage(randomMan)
            }

        } else{
            if(side === 'left'){
                setLeftImage("/images/kyle.jpg")

            } else {
                setRightImage("/images/kyle.jpg")
            }
            setFinalRound(true);
        }
    }


    return(
        <div className="h-screen grid grid-flow-col-dense grid-cols-12 grid-rows-1">
            <div id="leftImageContainer" 
                 className="col-span-4 col-start-2 col-end-6 mt-[15%] w-[500px] h-[600px] overflow-hidden relative">
                <Image alt="leftMan" 
                       className="w-full h-full object-cover object-top" 
                       src={leftImage} width={500} 
                       height={500} 
                       priority={true}
                       onClick={() => handleImageClick('left')}/>
            </div>

            <div id="orContainer" className="col-span-1 col-start-6 col-end-8">
                <p className="text-black mt-[150%] ml-[90px]" 
                   style={{
                        fontSize: "300%",
                        color: "black",
                        fontFamily: "Arial",
                        }}>OR</p>
            </div>

            <div id="rightImageContainer" 
                 className="col-span-4 col-start-8 col-end-12 mt-[15%] w-[500px] h-[600px] overflow-hidden relative">
                <Image alt="rightMan" 
                       className="w-full h-full object-cover object-top" 
                       src={rightImage} 
                       width={500} 
                       height={500} 
                       priority={true}
                       onClick={() => handleImageClick('right')}/>
            </div>
        </div>
    )
}