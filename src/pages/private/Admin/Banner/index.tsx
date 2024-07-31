import { Form, FormikProvider } from "formik";
import CustomButton from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import useBanner from "./hooks/useBanner";
import TextInput from "../../../../components/TextField";
import Images from "../../../../assets";

function Banner() {
  const {
    banners,
    formik,
    isOpen,
    setIsOpen,
    modalData,
    isLoading,
    setModalData,
    closeModal,
    openModal,
  } = useBanner();

  return (
    <div>
      <div className="bg-topaz  p-2 text-h3 font-h3">Customized banner </div>

      <FormikProvider value={formik}>
        <Form className="h-full">
          <div className="grid grid-col-1 md:grid-cols-3  border-2 m-4 gap-4">
            {banners?.map((e) => {
              return (
                <div
                  key={e.id}
                  className="p-4 flex flex-col gap-4 relative"
                >
                  <img
                    onClick={() => {
                      formik.setValues(e);
                      setModalData(e);
                      openModal();
                    }}
                    className="w-[20px] absolute right-[10px] cursor-pointer"
                    src={Images.editIcon}
                    alt="edit"
                  />
                  <div className="text-xl font-bold">{e.title}</div>
                  <div className="">{e.description}</div>
                  <CustomButton className="btn-primary w-[120px]">
                    {e.link}
                  </CustomButton>
                </div>
              );
            })}

            <Modal
              isOpen={isOpen}
              autoClose={true}
              onClose={closeModal}
            >
              <div className="flex flex-col justify-around gap-4 p-4 min-w-[320px]">
                <div className="text-h3 font-h3"> Edit Banner</div>
                <TextInput
                  type="text"
                  name="title"
                  label="Title"
                  className="w-full"
                />
                <TextInput
                  type="text"
                  name="description"
                  label="Description"
                  className="w-full"
                />
                <TextInput
                  type="text"
                  name="link"
                  label="Link"
                  className="w-full"
                />

                <CustomButton
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full"
                >
                  Update
                </CustomButton>
              </div>
            </Modal>
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
}

export default Banner;
