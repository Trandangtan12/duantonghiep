import React, {useState} from 'react';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

import "./style.css";
 
const InpRange = () => {
  const [state, setState] = useState({ value: {min: 0, max: 10} })
    return (
      <div>
      <div>
      <InputRange
        formatLabel={value => null}
        draggableTrack={false}
        allowSameValues={false}
        maxValue={10}
        minValue={0}
        value={state.value}
        onChange={value => setState({ value })}
        onChangeComplete={args => console.log(args)}
      />
    </div>
    <div className="tw-flex tw-justify-between tw-mt-1">
      <div className="tw-text-sm">{`${state.value.min} đ`}</div>
      <div className="tw-text-sm">{`${state.value.max} đ`}</div>
    </div>
    </div>
    );
}

export default InpRange