import ReactDOM from "react-dom/client";
import "./styles/global.less";
import "./i18n";
import { Main } from "./components/Main";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Main />);
