import { useEffect, useState } from "react";

const Background = ({ children, bgImage }) => {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => {
      setBackgroundLoaded(true);
      document.body.style.backgroundImage = `url(${bgImage})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
    };
  }, [bgImage]);

  return (
    <div className="font-metropolis w-full min-h-screen">
      {backgroundLoaded && children}
    </div>
  );
};

export default Background;
