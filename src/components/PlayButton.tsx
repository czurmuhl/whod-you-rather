import Button from '@mui/material/Button';
import { SxProps, Theme } from '@mui/system';


interface PlayButtonProps{
    className: string
    text: string
    sx?: SxProps<Theme>
}


const PlayButton: React.FC<PlayButtonProps> = (props: PlayButtonProps) => {
    return (
        <>
        <div id="playButton" className={props.className}>
            <Button variant="outlined" sx={{...props.sx}}>{props.text}</Button>
        </div>
        </>
    )
}

export default PlayButton