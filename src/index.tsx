import ReactDOM from "react-dom/client";
import "./styles/global.less";
import "./i18n";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";

const App = () => {
 return (
  <HashRouter>
   <Routes>
    <Route path="/" element={<Navigate to="/en" replace />} />
    <Route path="/:lang" element={<Main />} />
   </Routes>
  </HashRouter>
 );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
