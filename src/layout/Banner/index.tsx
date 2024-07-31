import Images from "../../assets";
import useBanner from "./hooks/useBanner";

function Banner() {
  const { data, isShow, handleShow } = useBanner();

  if (!data?.title || !isShow) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-fluorite to-topaz text-filter-text relative">
      <div className="flex justify-around">
        <div className="flex">
          <div className="text-white">{data?.title + " : _"} </div>
          <div className="text-white"> {data?.description}</div>
        </div>
        <a
          href={data?.link}
          target="_blank"
          className="text-white cursor-pointer"
        >
          Visit Now
        </a>
      </div>
      <img
        className="h-4 absolute right-[2px] top-[2px] cursor-pointer"
        src={Images.cross}
        onClick={handleShow}
        alt="X"
      />
    </div>
  );
}

export default Banner;
