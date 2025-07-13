import React, {useState, useEffect, useLayoutEffect, useRef} from "react";

function TooltipButton(){
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = ()=>{
        setShowTooltip(true)
    }
    const handleMouseLeave = ()=>{
        setShowTooltip(false)
    }
    const refTooltip = useRef();
    const refBtn = useRef();
    useLayoutEffect(()=>{
        if(showTooltip && refBtn.current && refTooltip.current){
            const proTooltip = refTooltip.current.getBoundingClientRect();
            const proBtn = refBtn.current.getBoundingClientRect();
            console.log('Vị trí tooltip TRƯỚC khi thay đổi:', refTooltip.current.getBoundingClientRect(), refBtn.current.getBoundingClientRect());

            // Thay đổi style
            refTooltip.current.style.bottom = `${proBtn.height}px`;

            // Lấy lại vị trí SAU khi thay đổi
            console.log('Vị trí tooltip SAU khi thay đổi:', refTooltip.current.getBoundingClientRect());
        }
    },[showTooltip])
    return(
        <>
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    margin:80,
                    position: 'relative'
                }}
                ref={refBtn}
            >
            Hover me!
                {showTooltip && <div
                    ref={refTooltip}
                    style={{
                        position: 'absolute',
                        left: 0,
                        bottom:0,
                        width:200
                    }}
                >this is Tooltip</div>}
            </button>
        </>
    )
}
export default TooltipButton;