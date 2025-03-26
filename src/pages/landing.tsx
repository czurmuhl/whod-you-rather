
import Heart from "@/components/Heart"
import PlayButton from "@/components/PlayButton"
import Link from "next/link"

export default function Landing(){

    const heartColor: string = "#F5F5DC"
    const hotPink: string = '#FF69B4'
    const darkerPink: string = '#FF1493'
    const lightHotPink: string = '#FF69B4'
    const title: string = "Who'd You Rather?..."
    const subtitle: string = "Bachelorette Edition!"
    return (
        <>
          <iframe style={{borderRadius: "12px", zIndex: 1, pointerEvents: 'auto'}}
            src="https://open.spotify.com/embed/track/5G2f63n7IPVPPjfNIGih7Q?utm_source=generator&theme=0&autoplay=true" 
            width="20%" 
            height="100" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
           />

          <div className="relative">          
            <div className="h-screen flex items-center justify-center">
                <Heart width="360px" 
                    height="360px" 
                    backgroundColor={heartColor} 
                    title={title} 
                    subtitle={subtitle}/>
            </div>
            <Link href="/selection">
                <PlayButton className="absolute top-8/10 left-3/4 overflow-hidden" 
                            text="PLAY"
                            sx={{
                            backgroundColor: hotPink, 
                            color: '#FFFFFF', // White text color
                            border: '2px solid #FF1493', // Border color
                            width: "150px",
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