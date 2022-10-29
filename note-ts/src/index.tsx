import { render } from "react-dom";
import { App } from "./components/App";

const rootElement =document.getElementById("root");
render(<App />, rootElement);

export const app = () => {
  return <h1>簡単メモアプリ</h1>
};