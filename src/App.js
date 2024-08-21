import { useEffect, useState } from "react";
import React from "react";
import "./App.css";

import Left from "./components/Left";
import Right from "./components/Right";
import {
  usePopupImage,
  useSectionObserver,
  scrollToSection,
} from "./components/Script";
import PreLoader from "./components/PreLoader";

function App() {
  const { popupImage, openPopup, closePopup } = usePopupImage();
  useSectionObserver();

  return (
    <div className="App">
      <PreLoader />
      <div className="container">
        <Left scrollToSection={scrollToSection} />
        <Right
          popupImage={popupImage}
          openPopup={openPopup}
          closePopup={closePopup}
        />
      </div>
    </div>
  );
}

export default App;
