import React from "react";
import logo from '../../asset/images/tour-bus.png';
// import chplay from '../../asset/images/chplay.png'
import appstore from '../../asset/images/store.png'

const Footer = () => {
  return (
    <div className="tw-border-t-2 tw-border-gray-100">
      <div className="tw-bg-white">
        <div className="tw-w-3/4 tw-mx-auto tw-py-14">
          <div className="tw-flex tw-flex-wrap tw-justify-between">
            <div className="tw-mb-5">
              <h1 className="tw-text-xl tw-py-2 tw-font-bold">Về chúng tôi</h1>
              <ul className="tw-text-sm tw-text-gray-500">
                <li className="tw-py-1">Phần mềm nhà xe</li>
                <li className="tw-py-1">Phần mềm đại lý</li>
                <li className="tw-py-1">Giới Thiệu SixLef.com</li>
                <li className="tw-py-1">Tuyển dụng</li>
                <li className="tw-py-1">Tin tức</li>
                <li className="tw-py-1">Liên hệ</li>
              </ul>
            </div>
            <div className="tw-mb-5">
              <h1 className="tw-text-xl tw-py-2 tw-font-bold">Hỗ trợ</h1>
              <ul className="tw-text-sm tw-text-gray-500">
                <li className="tw-py-1">Hướng dẫn thanh toán</li>
                <li className="tw-py-1">Quy chế của SixLeaf</li>
                <li className="tw-py-1">Chính sách bảo mật thông tin</li>
                <li className="tw-py-1">Chính sách bảo mật thanh toán</li>
                <li className="tw-py-1 tw-w-56">Chính sách và quy trình giải quyết tranh chấp, khiếu nại</li>
                <li className="tw-py-1">Câu hỏi thường gặp</li>
                <li className="tw-py-1">Phần mềm hãng xe</li>
                <li className="tw-py-1">Tra cứu đơn hàng</li>
              </ul>
            </div>
            <div className="tw-mb-5">
              <h1 className="tw-text-xl tw-py-2 tw-font-bold">Chứng nhận</h1>
              <ul>
                <li className="tw-py-1">
                  <img src="https://storage.googleapis.com/fe-production/images/Home/certificate0.png" className="tw-w-full" />
                </li>
                <li className="tw-py-1">
                  <img src="https://storage.googleapis.com/fe-production/images/Home/certificate1.png" className="tw-w-full" />
                </li>
                <li className="tw-py-1">
                  <img src="https://storage.googleapis.com/fe-production/images/dangkybocongthuong.png" className="tw-w-full" />
                </li>
                <li className="tw-py-1">
                  <img src="https://storage.googleapis.com/fe-production/images/dangkybocongthuong.png" className="tw-w-full" />
                </li>
              </ul>
            </div>
            <div className="tw-mb-5">
              <h1 className="tw-text-xl tw-py-2 tw-font-bold">Tải ứng dụng SixLeaf</h1>
              <ul className="tw-w-40">
                <li className="tw-py-1">
                  <img src="https://storage.googleapis.com/fe-production/images/landingpagetet2018/AP-icon.png?v=2" className="tw-w-full" />
                </li>
                <li className="tw-py-1">
                  <img src="https://storage.googleapis.com/fe-production/images/landingpagetet2018/GP-icon.png?v=2" className="tw-w-full" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-bg-gray-100">
        <div className="tw-w-3/4 tw-mx-auto tw-py-6 tw-text-center">
          <h1 className="tw-text-xl tw-py-2 tw-font-bold">Công ty TNHH Thương Mại Dịch Vụ SixLeaf</h1>
          <p>Bản quyền © 2020 thuộc về SixLeaf.Com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
