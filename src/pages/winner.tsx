import Image from 'next/image'
import PlayButton from '@/components/PlayButton';
import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function Winner(){

    const hotPink: string = '#FF69B4'
    const darkerPink: string = '#FF1493'
    const lightHotPink: string = '#FF69B4'
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        const savedImage = sessionStorage.getItem('winningImg');
        if (savedImage) {
          setImage(savedImage);
        }
      }, []);

    return(
        <>
            <div className="text-center mt-[10px]">
                <h1 style={{
                            fontSize: "400%",
                            color: "black",
                            fontFamily: "Arial",
                            }}>Winner!</h1>
            </div>

            <div id="winnerImage" className="flex justify-center items-center mt-[40px]">
                {image ? (
                    <Image className="text-center" src={image} alt="Winner" width={300} height={300} />

                ) : (
                   <Image src="/images/men/19.jpg" alt="Winner" width={300} height={300} />
                )}
            </div>

            <div id="playAgain" className="flex justify-center items-center mt-[50px]">
                <Link href="/selection">
                    <PlayButton className="text-center" 
                                text="PLAY AGAIN"
                                sx={{
                                backgroundColor: hotPink, 
                                color: '#FFFFFF', // White text color
                                border: '2px solid #FF1493', // Border color
                                width: "200px",
                                height: "50px",
                                fontSize: "20px",
                                fontFamily: "Comic Sans MS",
                                '&:hover': {
                                    backgroundColor: darkerPink,
                                    borderColor: lightHotPink, // Change border color on hover (light hot pink)
                                },
                            }}/>
                </Link>
            </div>
        </>
    )

}