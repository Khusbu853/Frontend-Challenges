import { useState } from "react";
import { Images } from "./imagedata";

const ImageCarousel = () => {
  const [activeimg, setActiveimg] = useState(0);

  const handleprev = () => {
    setActiveimg(!activeimg ? Images.length - 1 : activeimg - 1);
  };

  const handlenext = () => {
    setActiveimg((activeimg + 1) % Images.length);
  };

  return (
    <>
      <h1 className="carousel-title">Image Carousel</h1>
      <div className="carousel-container">
        <button className="carousel-btn" onClick={handleprev}>
          Prev
        </button>
        {Images.map((url, i) => (
          <img
            key={url}
            style={{
              borderRadius: "10px",
              height: "300px",
              width: "100%",
              maxWidth: "60%",
              backgroundSize: "cover",
              objectFit: "contain",
              display: activeimg == i ? "block" : "none",
            }}
            src={url}
          />
        ))}
        <button className="carousel-btn" onClick={handlenext}>
          Next
        </button>
      </div>
    </>
  );
};

export default ImageCarousel;
