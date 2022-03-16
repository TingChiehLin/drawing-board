import { FC } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import ColorSelector from "../components/ColorSelector";
import { colorActions } from "../store/color-slice";
import { resetActions } from "../store/reset-slice";

const ToolBar:FC = () => {
    const dispatch = useDispatch()

    const changeRedHandler = () => dispatch(colorActions.changeRedColor())
    const changePurpleHandler = () => dispatch(colorActions.changePurpleColor())
    const changeOrangeHandler = () => dispatch(colorActions.changeOrangeColor())

    const resetTimeHnadler = () => dispatch(resetActions.restTimeHandler())

    return (
        <>
            <div className="h-48 flex justify-center items-center gap-4">
                <ColorSelector customStyle="w-24 h-24 bg-red-500 rounded-full cursor-pointer" changeColorHandler={changeRedHandler}/>
                <ColorSelector customStyle="w-24 h-24 bg-purple-500 rounded-full cursor-pointer"  changeColorHandler={changePurpleHandler}/>
                <ColorSelector customStyle="w-24 h-24 bg-orange-500 rounded-full cursor-pointer"  changeColorHandler={changeOrangeHandler}/>
                <Button text={"Reset"} customStyle="px-6 py-2 bg-green-500 rounded-full" clickHnadler={resetTimeHnadler}/>
            </div>
        </>
    )
}

export default ToolBar;