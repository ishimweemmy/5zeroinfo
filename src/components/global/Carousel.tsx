import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Carousel() {
    return (
      <OwlCarousel items={1} nav autoPlay={true}>
        <div className="flex flex-col justify-center gap-3 items-baseline">
          <p className="text-[#535a70] text-md font-light lg:text-lg mb-5">
            Brook presents your services with flexible, convenient and cdpose
            layouts. You can select your favorite layouts &amp; elements for cular
            ts with unlimited ustomization possibilities. Pixel-perfect
            replica;ition of thei designers ijtls intended csents your se.
          </p>
          <span className="flex justify-center gap-3 items-baseline">
            <h1 className="text-2xl">JHON SMITH</h1>
            <p className="text-md text-[#535a70]">Gym trainer</p>
          </span>
        </div>
        <div className="flex flex-col justify-center gap-3 items-baseline">
          <p className="text-[#535a70] text-md font-light lg:text-lg mb-5">
            Brook presents your services with flexible, convenient and cdpose
            layouts. You can select your favorite layouts &amp; elements for cular
            ts with unlimited ustomization possibilities. Pixel-perfect
            replica;ition of thei designers ijtls intended csents your se.
          </p>
          <span className="flex justify-center gap-3 items-baseline">
            <h1 className="text-2xl">JHON SMITH</h1>
            <p className="text-md text-[#535a70]">Gym trainer</p>
          </span>
        </div>
        <div className="flex flex-col justify-center gap-3 items-baseline">
          <p className="text-[#535a70] text-md font-light lg:text-lg mb-5">
            Brook presents your services with flexible, convenient and cdpose
            layouts. You can select your favorite layouts &amp; elements for cular
            ts with unlimited ustomization possibilities. Pixel-perfect
            replica;ition of thei designers ijtls intended csents your se.
          </p>
          <span className="flex justify-center gap-3 items-baseline">
            <h1 className="text-2xl">JHON SMITH</h1>
            <p className="text-md text-[#535a70]">Gym trainer</p>
          </span>
        </div>
      </OwlCarousel>
    );
  }