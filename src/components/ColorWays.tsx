import { Colorway } from "../data/interfaces";

interface Props {
  totalColor: number;
  differentColor: Colorway[];
  currentImage: string;
  changeCurrentImage: (currentImage: string) => void;
}

const ColorWays = ({
  totalColor,
  differentColor,
  currentImage,
  changeCurrentImage,
}: Props) => {
  const handleMouseEnter = (colorwayImage: string) => {
    if (currentImage !== colorwayImage) changeCurrentImage(colorwayImage);
  };

  let moreColors = false;

  if (differentColor.length > 4) {
    differentColor = differentColor.slice(0, 4);
    moreColors = true;
  }

  return (
    <section className="mt-3 grid grid-cols-8 items-center justify-center max-sm:grid-cols-5">
      {differentColor.map((colorWays) => (
        <div
          key={colorWays.cloudProductId}
          className="h-10 w-10 overflow-hidden"
        >
          <img
            className="object-contain"
            src={colorWays.images.portraitURL}
            alt={colorWays.images.portraitURL}
            onMouseEnter={() => handleMouseEnter(colorWays.images.portraitURL)}
          />
        </div>
      ))}
      {moreColors && (
        <p className="mt-2 font-montserrat text-lg font-bold text-slate-gray">
          +{totalColor - 4}
        </p>
      )}
    </section>
  );
};

export default ColorWays;
