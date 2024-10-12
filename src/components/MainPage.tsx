import React, { FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainPage: FC<MainPageProps> = ({ Main }) => {
  /* const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
    const handleMobileChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
    };
  }, []); */

  return (
    <body >
      <Navbar />
      <main>
        <Main />
      </main>
      <Footer />
    </body>
  );
};

interface MainPageProps {
  Main: React.ComponentType;
}

export default MainPage;
