import React from "react";
import BasicsOfMotion from "./components/BasicsOfMotion";
import "./index.css";
import Gestures from "./components/Gestures";
import AnimationControls from "./components/AnimationControls";
import ViewBasedAnimation from "./components/ViewBasedAnimation";
import ScrollAnimation from "./components/ScrollAnimation";

const App = () => {
  return (
    <div>
      {/* <BasicsOfMotion /> */}
      {/* <Gestures /> */}
      {/* <AnimationControls /> */}
      {/* <ViewBasedAnimation /> */}
      <ScrollAnimation />
    </div>
  );
};

export default App;
