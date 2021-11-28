import React, { useState } from 'react';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

import "./style.css";

const InpRange = (props) => {
  const { max, min, step, value } = props.price
  const onChange = (range) => {
    props.onChange({
      value: range
    })
  }
  return (
    <div>
      <div>
        <InputRange
          formatLabel={value => null}
          draggableTrack={false}
          allowSameValues={false}
          minValue={min}
          maxValue={max}
          step={step}
          onChange={onChange}
          value={value}
        />
      </div>
      <div className="tw-flex tw-justify-between tw-mt-1">
        <div className="tw-text-sm">{`${new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(value.min)}`}</div>
        <div className="tw-text-sm">{`${new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(value.max)}`}</div>
      </div>
    </div>
  );
}

export default InpRange