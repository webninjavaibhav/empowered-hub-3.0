import Images from "../../assets";
import useBanner from "./hooks/useBanner";

function Banner({
  handleClose,
  handleShow,
  isShow,
}: {
  handleClose: () => void;
  handleShow: () => void;
  isShow: boolean;
}) {
  const { data, handleNext, handlePrev } = useBanner(handleClose);

  if (!data?.title || !isShow) {
    return null;
  }

  return (
    <div className="bg-topaz grid grid-cols-[0.4fr_2.2fr_0.6fr_0.4fr_0.4fr] md:grid-cols-[1fr_1.8fr_0.6fr_0.6fr_0.2fr] items-center gap-4 text-white h-[60px] rounded-md mb-2">
      <div className="flex justify-center">
        <img
          onClick={handlePrev}
          src={Images.bannerLeftIcon}
          className="cursor-pointer"
          alt="<"
        />
      </div>
      <div className="flex gap-4">
        <div className="font-bold">{data?.title} :</div>
        <div className=" text-body-text font-extralight">
          {data?.description}
        </div>
      </div>
      <a
        href={data?.link}
        target="_blank"
        className="cursor-pointer font-bold text-sapphire underline"
      >
        Try it now !
      </a>
      <div className="flex justify-center">
        <img
          onClick={handleNext}
          src={Images.bannerRightIcon}
          className="cursor-pointer"
          alt=">"
        />
      </div>
      <img
        className="h-4 cursor-pointer"
        src={Images.whiteCross}
        onClick={handleShow}
        alt="X"
      />
    </div>
  );
}

export default Banner;
