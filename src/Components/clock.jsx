import React from "react";

import ClockTime from "./clock-time";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
  }
  getStyle(){
    const widthMax = this.props.winSize.w * 22 / 50
    const heightMax = this.props.options.showMore ? this.props.winSize.h*0.85 : this.props.winSize.h
    const fontSize = widthMax > heightMax ? heightMax : widthMax
    const lineHeight = fontSize*4/5
    return {
      fontSize: fontSize+'px',
      lineHeight: lineHeight+'px',
      paddingTop: (this.props.winSize.h-lineHeight)/2+(this.props.options.showMore ? 0.17*fontSize : 0)
    }
  }
  render() {
    return (
      <div id="clock" style={this.getStyle()}>
        <ClockTime id="time" time={this.props.time} />
      </div>
    );
  }
}