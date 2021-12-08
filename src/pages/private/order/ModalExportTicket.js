import { Dialog, Transition } from "@headlessui/react";
import FileSaver from "file-saver";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { BusesService } from "../../../service/productService";
const ModalExportTicket = ({ isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }
//   var date = new Date();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [aboutDays, setAboutDays] = useState(false);
  const handleChangeStartDateExport = (date) => {
    setStartDate(date);
  };
  const handleChangeEndDateExport = (date) => {
    setEndDate(date);
  };
  const handleExportTicket = async () => {
      if (!aboutDays) {
        const oneDateSelected = moment(startDate).format("YYYY-MM-DD");
        const res = await BusesService.exportListTicket(oneDateSelected);
        if (res.status === 200) {
          const blob = new Blob([res.data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
          FileSaver.saveAs(blob, `sixleaf_ticket.xlsx`);
        }
      }else{
        const startDateConvert = moment(startDate).format("YYYY-MM-DD");
        const endDateConvert = moment(endDate).format("YYYY-MM-DD");
        const res = await BusesService.exportAboutDays(startDateConvert,endDateConvert);
        if (res.status === 200) {
          const blob = new Blob([res.data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
          FileSaver.saveAs(blob, `sixleaf_ticket.xlsx`);
        }
      }
  };
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="tw-fixed tw-inset-0 tw-z-10 tw- tw-overflow-y-auto "
          onClose={closeModal}
        >
          <div className="tw-min-h-screen tw-px-4 tw-text-center">
            <Transition.Child
              as={Fragment}
              enter="tw-ease-out tw-duration-300"
              enterFrom="tw-opacity-0"
              enterTo="tw-opacity-100"
              leave="tw-ease-in tw-duration-200"
              leaveFrom="tw-opacity-100"
              leaveTo="tw-opacity-0"
            >
              <Dialog.Overlay className="tw-fixed tw-inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal tw-contents. */}
            <span
              className="tw-inline-block tw-h-screen tw-align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="tw-ease-out tw-duration-300"
              enterFrom="tw-opacity-0 tw-scale-95"
              enterTo="tw-opacity-100 tw-scale-100"
              leave="tw-ease-in tw-duration-200"
              leaveFrom="tw-opacity-100 tw-scale-100"
              leaveTo="tw-opacity-0 tw-scale-95"
            >
              <div className="tw-inline-block tw-w-full tw-max-w-md tw-p-6 tw-my-8 tw-overflow-hidden tw-text-left tw-align-middle tw-transition-all tw-transform tw-bg-white tw-shadow-xl tw-rounded-2xl tw-h-[450px] tw-border-[1px] tw-border-green-600 ">
                <Dialog.Title
                  as="h3"
                  className="tw-text-lg tw-font-medium tw-leading-6 tw-text-green-600 tw-uppercase tw-mb-5"
                >
                  Xuất dữ liệu
                </Dialog.Title>
                <div className="tw-mt-2">
                  <label
                    className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                    htmlfor="grid-password"
                  >
                    {aboutDays ? "Ngày bắt đầu" : " Ngày xuất"}
                  </label>
                  <DatePicker
                    className="tw-w-full tw-py-2 tw-border-[1px] tw-border-gray-300 tw-font-bold tw-h-[47px] tw-pl-[10px] tw-rounded-md focus:tw-border-[0.5] focus:tw-border-green-600"
                    dateFormat="yyyy-MM-dd"
                    selected={startDate}
                    onChange={(date) => handleChangeStartDateExport(date)}
                  />
                </div>
                {aboutDays ? (
                  <div className="tw-mt-2">
                    <label
                      className="tw-block tw-uppercase text-blueGray-600 tw-text-xs tw-font-bold tw-mb-2"
                      htmlfor="grid-password"
                    >
                      Ngày kết thúc
                    </label>
                    <DatePicker
                      className="tw-w-full tw-py-2 tw-border-[1px] tw-border-gray-300 tw-font-bold tw-h-[47px] tw-pl-[10px] tw-rounded-md focus:tw-border-[0.5] focus:tw-border-green-600"
                      dateFormat="yyyy-MM-dd"
                      selected={endDate}
                      onChange={(date) => handleChangeEndDateExport(date)}
                    />
                  </div>
                ) : null}
                <div className="tw-mt-7 tw-flex tw-justify-center">
                  <button
                    type="button"
                    className="tw-inline-flex tw-justify-end tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-bg-green-600 tw-border tw-border-transparent tw-rounded-md hover:tw-bg-green-700 focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-offset-2 tw-mr-2 focus-visible:tw-ring-blue-500"
                    onClick={() => setAboutDays(!aboutDays)}
                  >
                    {
                        !aboutDays ? "Xuất theo khoảng ngày" : "Xuất theo ngày"
                    }
                  </button>
                  <button
                    type="button"
                    className="tw-inline-flex tw-justify-end tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-bg-green-600 tw-border tw-border-transparent tw-rounded-md hover:tw-bg-green-700 focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-offset-2 focus-visible:tw-ring-blue-500 tw-mr-2"
                    onClick={handleExportTicket}
                  >
                    Xuất vé
                  </button>
                  <button
                    type="button"
                    className="tw-inline-flex tw-justify-end tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-bg-green-600 tw-border tw-border-transparent tw-rounded-md hover:tw-bg-green-700 focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-offset-2 focus-visible:tw-ring-blue-500"
                    onClick={closeModal}
                  >
                    Quay lại
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ModalExportTicket;
