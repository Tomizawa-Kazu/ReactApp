import { useState } from "react";
import { ColoredMessage } from "./components/coloredMessage";
import { CssModules } from "./components/CssModules";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";

export const App = () => {
    console.log("レンダリング");
    const [num, setNum] = useState(0);

    const onClickButton = () => {
        alert();
        setNum(num + 1);
    };

    const contentPinkStyle = {
        color: "pink",
        fontsize: "20px"
    };

    return (
        <div>
            {console.log("TEST")}
            <h1 style={{ color: "red" }}>こんにちは！</h1>
            <ColoredMessage color="blue">お元気ですか？？</ColoredMessage>
            <ColoredMessage color="pink">元気です！！</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>

            <CssModules></CssModules>

            <StyledJsx></StyledJsx>

            <StyledComponents></StyledComponents>
        </div>
    );
};
