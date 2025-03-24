"use client";
import Image from 'next/image'
import PlayButton from '@/components/PlayButton';
import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function Winner() {
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

    const numRings = 30;  // Adjust the number of rings (images)

    return (
        <>
            {/* Raining Rings in Background */}
            <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
                {/* Render falling engagement rings */}
                {Array.from({ length: numRings }).map((_, i) => (
                    <img
                        key={i}
                        src="/images/engagement_ring.jpg"
                        alt="Engagement Ring"
                        className="absolute opacity-70 animate-fall"
                        style={{
                            top: `${Math.random() * -100}vh`, // Start off-screen
                            left: `${Math.random() * 100}vw`,
                            width: `${Math.random() * 150 + 50}px`, // Random size
                            animationDuration: `${Math.random() * 5 + 5}s`, // Random fall speed
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}

                {/* Winner Content */}
                <div className="z-10 text-center">
                    <h1 className="text-6xl font-bold text-black drop-shadow-lg">
                        Winner!
                    </h1>

                    {/* Winner Image */}
                    <div id="winnerImage" className="flex justify-center items-center mt-8">
                        {image ? (
                            <Image className="rounded-lg shadow-lg" src={image} alt="Winner" width={400} height={400} />
                        ) : (
                            <Image className="rounded-lg shadow-lg" src="/images/men/19.jpg" alt="Winner" width={400} height={400} />
                        )}
                    </div>

                    {/* Play Again Button */}
                    <div id="playAgain" className="mt-12">
                        <Link href="/selection">
                            <PlayButton
                                className="text-center"
                                text="PLAY AGAIN"
                                sx={{
                                    backgroundColor: hotPink,
                                    color: '#FFFFFF',
                                    border: '2px solid #FF1493',
                                    width: "200px",
                                    height: "50px",
                                    fontSize: "20px",
                                    fontFamily: "Comic Sans MS",
                                    '&:hover': {
                                        backgroundColor: darkerPink,
                                        borderColor: lightHotPink,
                                    },
                                }}
                            />
                        </Link>
                    </div>
                </div>

                {/* Animation Styles */}
                <style jsx>{`
                    @keyframes fall {
                        0% {
                            transform: translateY(-100vh) rotate(0deg);
                            opacity: 0;
                        }
                        100% {
                            transform: translateY(100vh) rotate(360deg);
                            opacity: 1;
                        }
                    }
                    .animate-fall {
                        animation-name: fall;
                        animation-timing-function: linear;
                        animation-iteration-count: infinite;
                    }
                `}</style>
            </div>
        </>
    )
}
