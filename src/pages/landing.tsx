
import Heart from "@/components/Heart"
import PlayButton from "@/components/PlayButton"

export default function Landing(){

    const heartColor: string = "#F5F5DC"
    const title: string = "Who'd You Rather?..."
    const subtitle: string = "Bachelorette!"
    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <Heart widthPercent="22%" 
                    heightPercent="41%" 
                    backgroundColor={heartColor} 
                    title={title} 
                    subtitle={subtitle}/>
                <PlayButton />
            </div>
        </>

    )
}