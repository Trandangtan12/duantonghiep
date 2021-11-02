import React from "react";
import { QuestionList } from "../../config";

const QuestionTicker = () => {
  return (
    <div className="tw-mb-10">
      <h2 className="tw-text-[1.375rem] tw-pb-[1.5rem] tw-mt-[5rem] tw-font-bold">
        Câu hỏi thường gặp về đặt vé
      </h2>
      <div className="tw-py-9 tw-px-5 tw-bg-white tw-shadow-lg tw-rounded-lg">
        <ul>
          {QuestionList.map((item) => (
            <li className="tw-pb-[5rem]">
              <h3 className="tw-text-[1.125rem] tw-pb-[1.5rem]">
                {item.title}
              </h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionTicker;
