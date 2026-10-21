import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Routing } from "./routing/Routing";

export function App() {

  return (
    <div className="layout">
      <Header />
      <Routing/>
      <Footer/>
    </div>
  );
}

