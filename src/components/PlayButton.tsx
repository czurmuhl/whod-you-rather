"use client";
import Button from '@mui/material/Button';
import { SxProps, Theme } from '@mui/system';


interface PlayButtonProps{
    className: string
    sx?: SxProps<Theme>
}


const PlayButton: React.FC<PlayButtonProps> = (props: PlayButtonProps) => {
    return (
        <>
        <div id="playButton" className={props.className}>
            <Button variant="outlined" sx={{...props.sx}}>PLAY</Button>
        </div>
        </>
    )
}

export default PlayButton