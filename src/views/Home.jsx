import men from "@/assets/images/men.jpg";
import women from "@/assets/images/women.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid overflow-hidden grid-cols-6 h-screen md:grid-cols-8 lg:grid-cols-12 lg:grid-rows-6">
      <div className="flex flex-col col-start-1 col-end-7 row-start-2 row-end-3 items-center self-center w-full md:col-start-2 md:col-end-8 lg:col-start-2 lg:col-end-12 gap-[2vh]">
        <h1
          style={{ fontFamily: "ClashDisplay-Bold" }}
          className="font-bold text-center uppercase text-[10vw] leading-[7vw] md:text-[9vw] md:leading-[6vw] lg:text-[10vw] lg:leading-[7vw] text-[#796B66] mix-blend-difference"
        >
          sapes avenue
        </h1>
        <h2
          style={{ fontFamily: "ClashDisplay-Bold" }}
          className="font-bold text-center uppercase text-[4.8vw] leading-[4.8vw] md:text-[3.8vw] md:leading-[3.8vw] lg:text-[4.5vw] lg:leading-[4.5vw] text-[#796B66] mix-blend-difference"
        >
          STREETS ARE OUR PLAYGROUND
        </h2>
        <p
          style={{ fontFamily: "ClashDisplay-Medium" }}
          className="font-bold text-center uppercase text-[3.5vw] leading-[6vw] md:text-[1.7vw] md:leading-[3vw] lg:text-[1.3vw] lg:leading-[2vw] text-[#796B66] mix-blend-difference w-[90vw] md:w-[70vw] lg:w-[50vw]"
        >
          A streewear brand born in Paris now ready to take over the world. We
          work hard to create comfortable and timeless clothes for the youth. A
          good quality for an affordable price.
        </p>
      </div>
      <Link
        to={"/men/categories"}
        className="relative col-start-2 col-end-4 row-start-4 row-end-5 lg:col-start-4 lg:col-end-6 lg:row-start-4 lg:row-end-7 h-fit hover-gender"
      >
        <p className="lg:opacity-0 gender opacity-1">MEN</p>
        <img
          className="shadow-2xl -rotate-6"
          src={men}
          alt="A man sporting a black hoodie and a matching black cap, glancing to his left and striking a pose for a picture."
          width={400}
          height={600}
        />
      </Link>

      <Link
        to={"/women/categories"}
        className="relative col-start-4 col-end-6 row-start-3 row-end-7 self-center md:col-start-6 md:col-end-8 lg:col-start-8 lg:col-end-10 hover-gender"
      >
        <p className="lg:opacity-0 gender opacity-1">WOMEN</p>
        <img
          className="shadow-2xl rotate-6 women mt-[3vh]"
          src={women}
          alt="A woman wearing a black t-shirt, gray joggers, and white shoes stands in front of a wall covered in graffiti, looking at the camera."
          width={400}
          height={600}
        />
      </Link>
    </div>
  );
};

export default Home;
