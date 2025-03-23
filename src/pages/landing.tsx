
import Heart from "@/components/Heart"
import PlayButton from "@/components/PlayButton"

export default function Landing(){

    const heartColor: string = "#F5F5DC"
    const hotPink: string = '#FF69B4'
    const darkerPink: string = '#FF1493'
    const lightHotPink: string = '#FF69B4'
    const title: string = "Who'd You Rather?..."
    const subtitle: string = "Bachelorette Edition!"
    return (
        <>
          <div className="relative">
            <div className="h-screen flex items-center justify-center">
                <Heart widthPercent="24%" 
                    heightPercent="42%" 
                    backgroundColor={heartColor} 
                    title={title} 
                    subtitle={subtitle}/>
            </div>
            <PlayButton className="absolute top-[80%] left-3/4" 
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
          </div>
        </>
    )
}