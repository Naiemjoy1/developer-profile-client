import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["React Js", "Javascript", "Node Js", "MongoDb"];

const TextTransitionComponent = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearInterval(intervalId); // Use clearInterval here
  }, []);

  return (
    <div>
      <h1>
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h1>
    </div>
  );
};

export default TextTransitionComponent;
