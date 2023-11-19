import { Parallax } from "react-parallax";

const Cover = ({ img, title, des }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-300}
      >
        <div className="hero h-[80vh]">
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-m bg-black/60 px-20 py-16 w-[800px] ">
              <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
              <p className="mb-5">{des}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
