import Images from "../../../../assets";
import CustomButton from "../../../../components/Button";

type TypeModel = {
  modalData: any;
  closeModal: () => void;
};

const TabModel: React.FC<TypeModel> = ({ modalData, closeModal }) => {
  return (
    <div>
      <div className="p-8 flex flex-col gap-4 relative ">
        <img
          onClick={closeModal}
          className=" h-[20px] w-[20px] cursor-pointer absolute right-[10px] top-[10px]"
          src={Images.cross}
          alt="X"
        />
        <div className="text-h5 font-h5">{modalData.heading}</div>
        <div>
          <div className="font-h5">Selected Items</div>
          <div className="flex flex-wrap gap-2 pt-2  text-body-text ">
            {modalData.selectedItems.map((e: any, i: number) => (
              <div
                key={i}
                className="bg-fluorite px-4 py-1 rounded-md text-nowrap truncate"
              >
                {e.label}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="font-h5">Selected Items</div>
          <div className="flex flex-wrap gap-2 pt-2  text-body-text ">
            {modalData.items.map((e: any, i: number) => (
              <div
                key={i}
                className="border-fluorite border-2 px-4 py-1 rounded-md text-nowrap truncate"
              >
                {e.label}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <CustomButton
            onClick={closeModal}
            className="btn-secondary-outline"
          >
            Save Changes
          </CustomButton>
          <CustomButton
            onClick={closeModal}
            className=" btn-secondary"
          >
            Cancel
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default TabModel;
