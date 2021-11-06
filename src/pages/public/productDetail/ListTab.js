import { useState } from "react";
import { Tab } from "@headlessui/react";
import Chart from "../../../compornent/admin/chart";
import BarChart from "../../../compornent/admin/chart/BarChart";
import PieChart from "../../../compornent/admin/chart/PieChart";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function TabList() {
  let [categories] = useState({
     "Mô tả": [
      {
        id: 1,
        chart: "Thông tin",
      },
    ],
    "Dịch vụ": [
      {
        chart: "Thông tin",
      },
    ], "Đánh giá": [
        {
          id: 1,
          chart: "Thông tin",
        },
      ],
  });

  return (
    <div className="tw-w-full sm:tw-px-[50px] tw-mt-5">
      <Tab.Group>
        <Tab.List className="tw-flex tw-p-1 tw-space-x-1 bg-blue-900/20 tw-rounded-xl tw-bg-green-600">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "tw-w-full tw-py-2.5 tw-text-sm tw-leading-5 tw-font-medium tw-text-blue-700 tw-rounded-lg",
                  "focus:tw-outline-none focus:tw-ring-2 tw-ring-offset-2 tw-ring-offset-blue-400 tw-ring-white tw-ring-opacity-60",
                  selected
                    ? "tw-bg-white tw-shadow"
                    : "tw-text-blue-100 hover:bg-white/[0.12] hover:tw-text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="tw-mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "tw-bg-white tw-rounded-xl tw-p-3",
                "focus:tw-outline-none focus:tw-ring-2 tw-ring-offset-2 tw-ring-offset-blue-400 tw-ring-white tw-ring-opacity-60"
              )}
            >
              <div>
                {posts.map((post) => (
                  <div>{post.chart}</div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
