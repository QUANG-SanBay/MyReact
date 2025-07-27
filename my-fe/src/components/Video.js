import video1 from '../media/bg.3e78e80.mp4'
import {forwardRef, useRef, useImperativeHandle } from 'react';

function Video(props, ref){
    const videoRef = useRef()
    useImperativeHandle(ref, ()=>(
        {
            play(){
                videoRef.current.play()
            },
            pause(){
                videoRef.current.pause()
            }

        }
    ))
    return(
        <video
            ref={videoRef}
            style={{
                width: '50%',
            }}
        >
            <source src={video1} type='video/mp4'/>
        </video>
    )
}
export default forwardRef(Video);