import Image from "next/image";

interface HeartProperties{
    width: string
    height: string
    backgroundColor: string
    title?: string
    subtitle?: string
}

const Heart: React.FC<HeartProperties> = (props: HeartProperties) => {
    return (
       <>
            <div 
                className="relative mt-4 ml-4 -rotate-45" 
                style={{
                    width: props.width, 
                    height: props.height, 
                    backgroundColor: props.backgroundColor
                }}
            >
                <div 
                    className="absolute rounded-full" 
                    style={{
                        width: '100%', 
                        height: '100%', 
                        backgroundColor: props.backgroundColor, 
                        left: '50%',
                    }}
                ></div> 
                <div 
                    className="absolute rounded-full" 
                    style={{
                        width: '100%', 
                        height: '100%', 
                        backgroundColor: props.backgroundColor, 
                        top: '-50%' 
                    }}
                ></div> 
            </div>

            <div id="bachelorette" className="absolute flex justify-center items-center pb-[420px]">
                <Image src="/images/melrose.png" alt="melrose" width={420} height={150}></Image>
            </div>

            <div className="absolute inset-0 flex justify-center items-center">
                <p id="titleHeader" 
                    className="text-black text-8xl" 
                    style={{
                        fontStretch: "ultra-expanded",
                        letterSpacing: '5px',
                        fontFamily: "Noto Serif Display",
                        }}>
                    
                    {props.title}
                </p>
            </div>

            <div className="absolute inset-0 flex justify-center items-center -rotate-10">
                <p id="titleSubtitle" 
                   className="text-black font-bold pt-100" 
                   style={{
                        fontSize: "400%",
                        color: "purple",
                        fontFamily: "Parisienne, cursive",
                        }}>
                        
                    {props.subtitle}
                </p>
            </div>

        </>
    )
}

export default Heart