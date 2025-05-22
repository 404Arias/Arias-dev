/*
	Installed from https://reactbits.dev/default/
*/

import "../hojas-de-estilo/ShinyText.css";

const ShinyText = ({
  text,
  text1,
  text2,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      style={{ animationDuration }}
    >
      {text}
      {text1}
      {text2}
    </div>
  );
};

export default ShinyText;
