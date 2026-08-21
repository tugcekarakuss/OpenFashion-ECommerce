import Divider from "../common/Divider"
import Prada from "../../assets/images/home/brands/Prada.svg"
import Burberry from "../../assets/images/home/brands/Burberry.svg"
import Boss from "../../assets/images/home/brands/Boss.svg"
import Cartier from "../../assets/images/home/brands/Catier.svg"
import Gucci from "../../assets/images/home/brands/Gucci.svg"
import Tiffany from "../../assets/images/home/brands/TiffanyCo.svg"
export default function Brands() {
  return (
    <div className="max-w-7xl mx-auto">
      <Divider />
      <section className="grid grid-cols-3 place-items-center gap-8 px-4 py-10 sm:gap-10 lg:grid-cols-6 lg:gap-12 lg:py-14">
        <div className="flex h-6 w-24 items-center justify-center">
          <img
            className="max-h-full max-w-full object-contain"
            src={Prada}
            alt="Prada"
          />
        </div>

        <div className="flex h-6 w-24 items-center justify-center sm:h-8 sm:w-32 lg:h-12 lg:w-40">
          <img
            className="max-h-full max-w-full object-contain"
            src={Burberry}
            alt="Burberry"
          />
        </div>

        <div className="flex h-6 w-24 items-center justify-center sm:h-8 sm:w-32 lg:h-12 lg:w-40">
          <img
            className="max-h-full max-w-full object-contain"
            src={Boss}
            alt="Boss"
          />
        </div>

        <div className="flex h-6 w-24 items-center justify-center sm:h-8 sm:w-32 lg:h-12 lg:w-40">
          <img
            className="max-h-full max-w-full object-contain"
            src={Cartier}
            alt="Cartier"
          />
        </div>

        <div className="flex h-6 w-24 items-center justify-center sm:h-8 sm:w-32 lg:h-12 lg:w-40">
          <img
            className="max-h-full max-w-full object-contain"
            src={Gucci}
            alt="Gucci"
          />
        </div>

        <div className="flex h-6 w-24 items-center justify-center sm:h-8 sm:w-32 lg:h-12 lg:w-40">
          <img
            className="max-h-full max-w-full object-contain"
            src={Tiffany}
            alt="Tiffany"
          />
        </div>
      </section>




      <Divider />


    </div>
  )
}
