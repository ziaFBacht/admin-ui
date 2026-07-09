import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from '@mui/material/CircularProgress';

const categoryIcon = {
  housing: <Icon.House />,
  food: <Icon.Food />,
  transportation: <Icon.Transport />,
  entertainment: <Icon.Gamepad />,
  shopping: <Icon.Shopping />,
  others: <Icon.Other />
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function CardExpensesComparison(props) {
  const { data } = props;

  const isLoading = !data || data.length === 0;

  const comparisonData = !isLoading && (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item, index) => {
        const isUp = item.trend === "up";

        return (
          <div key={index} className="bg-white rounded-lg p-4">
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="bg-special-bg p-3 rounded-lg">
                  {categoryIcon[item.category]}
                </div>
                <div>
                  <span className="text-sm text-gray-500 block">
                    {capitalize(item.category)}
                  </span>
                  <span className="text-xl font-bold">${item.amount}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span
                  className={`flex items-center gap-1 font-semibold ${
                    isUp ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {item.percentage}%
                  {isUp ? <Icon.ArrowUp /> : <Icon.ArrowDown />}
                </span>
                <span className="text-xs text-gray-400">
                  Compare to the last month
                </span>
              </div>
            </div>

            {/* Detail list */}
            <div className="flex flex-col">
              {item.detail.map((d, idx) => (
                <div key={idx}>
                  <div className="flex justify-between py-3">
                    <span className="font-bold">{d.item}</span>
                    <div className="text-right">
                      <span className="font-bold block">${d.amount}</span>
                      <span className="text-xs text-gray-400">{d.date}</span>
                    </div>
                  </div>
                  {idx !== item.detail.length - 1 && (
                    <hr className="border-gray-100" />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <Card
      title="Expenses Comparison"
      desc={
        isLoading ? (
          <div className="flex flex-col justify-center items-center h-full text-primary">
            <CircularProgress color="inherit" size={50} enableTrackSlot />
            Loading Data
          </div>
        ) : (
          comparisonData
        )
      }
    />
  );
}

export default CardExpensesComparison;