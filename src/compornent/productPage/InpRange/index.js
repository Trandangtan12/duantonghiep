import React from 'react';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

import "./style.css";
 
class InpRange extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      value: { min: 0, max: 10 },
    };
  }
 
  render() {
    return (
      <div>
      <div>
      <InputRange
        formatLabel={value => null}
        draggableTrack={false}
        allowSameValues={false}
        maxValue={10}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })}
        onChangeComplete={args => console.log(args)}
      />
    </div>
    <div className="tw-flex tw-justify-between tw-mt-1">
      <div className="tw-text-sm">{`${this.state.value.min} đ`}</div>
      <div className="tw-text-sm">{`${this.state.value.max} đ`}</div>
    </div>
    </div>
    );
  }
}

export default InpRange