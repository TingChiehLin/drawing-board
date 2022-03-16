import { FC } from "react";

interface ColorSelectorProps {
    customStyle: string
    changeColorHandler: () => void
}


const ColorSelector:FC<ColorSelectorProps> = ({customStyle, changeColorHandler}) => {
    return (
        <div className={customStyle}
            onClick={changeColorHandler}
        >    
        </div>
    )
}

export default ColorSelector;