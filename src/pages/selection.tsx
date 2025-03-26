"use client";

import Image from "next/image";
import {useState, useEffect} from "react";
import { useRouter } from 'next/router';


function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


export default function Selection(){
    const [leftImage, setLeftImage] = useState<string>("")
    const [rightImage, setRightImage] = useState<string>("")
    const [finalRound, setFinalRound] = useState<boolean>(false)
    const [images, setImages] = useState<string[]>([])
    const router = useRouter();

    
    useEffect(() => {
        const numMen: number = 23;
        const men: string[] = [];
        sessionStorage.clear()
    
        // Generate the array of image paths
        for (let i = 1; i <= numMen; i++) {
          men.push(`images/men/${i}.jpg`);
        }
    
        // Pick random images for left and right
        const randomLeftIndex: number = getRandomInt(0, men.length - 1);
        const randomLeft: string = men[randomLeftIndex];
        
        // Remove the random left image from the array
        const filtered: string[] = men.filter(man => man !== randomLeft);
    
        const randomRightIndex: number = getRandomInt(0, filtered.length - 1);
        const randomRight: string = filtered[randomRightIndex];
    
        // Set the final images state and the selected left and right images
        setImages(filtered.filter(man => man !== randomRight));  // Remove the random right image as well
        setLeftImage(randomLeft);
        setRightImage(randomRight);

    }, [])

    const handleImageClick = (side: string) => {
        if(finalRound){
            const winningImg: string = side === 'left' ? leftImage : rightImage;
            sessionStorage.setItem("winningImg", winningImg)

            router.push({
                pathname: '/winner',
              });        
        }

        if(images.length > 0) { 
            const randomMan: string = images[getRandomInt(0, images.length-1)]

            if(side === 'left') {
                setRightImage(randomMan)

            } else {
                setLeftImage(randomMan)
            }
            
            const filtered: string[] = images.filter(man => man !== randomMan)
            setImages(filtered)
        } else{
            if(side === 'left'){
                setRightImage("images/kyle.jpg")

            } else {
                setLeftImage("images/kyle.jpg")
            }
            setFinalRound(true);
        }
    }


    return(
        <div className="h-screen grid grid-flow-col-dense grid-cols-12 grid-rows-1">
            <div id="leftImageContainer" 
                 className="col-span-4 col-start-2 col-end-6 mt-[15%] h-[75%] overflow-hidden relative">
                <Image alt="leftMan" 
                       className="w-full h-full object-cover object-top" 
                       src={leftImage} 
                       width={500} 
                       height={500} 
                       priority={true}
                       onClick={() => handleImageClick('left')}/>
            </div>

            <div id="orContainer" className="col-span-1 col-start-6 col-end-8 text-center">
                <p className="text-black pt-[50vh]" 
                   style={{
                        fontSize: "300%",
                        color: "black",
                        fontFamily: "Arial",
                        }}>OR</p>
            </div>

            <div id="rightImageContainer" 
                 className="col-span-4 col-start-8 col-end-12 mt-[15%] h-[75%] overflow-hidden relative">
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