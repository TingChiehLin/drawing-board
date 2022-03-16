import { FC } from "react";
import DrawingBoard from "./layouts/DrawingBoard";
import Header from "./layouts/Header";
import ToolBar from "./layouts/ToolBar";

const App:FC = () => {
  return (
    <div className="">
        <Header/>
        <ToolBar/>
        <DrawingBoard/>
    </div>
  );
}

export default App;
