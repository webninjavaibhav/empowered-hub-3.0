import clsx from "clsx";

type LoaderProp = {
  height?: string;
  width?: string;
};

const Loader: React.FC<LoaderProp> = ({ height = "8", width = "8" }) => {
  return (
    <div className="flex justify-center h-[100vh] items-center ">
      <div
        className={clsx(
          `inline-block animate-spin h-8 w-8 rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-sapphire`,
          { height },
          { width }
        )}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loader;
