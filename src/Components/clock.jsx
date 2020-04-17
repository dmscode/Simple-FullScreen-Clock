import React from "react";

import ClockTime from "./clock-time";

export default function Clock(props){
  /**
   * 计算样式
   * 文字尺寸、行高、顶部内补尺寸（辅助垂直居中定位
   * @returns
   */
  const getStyle = ()=>{
    const widthMax = props.winSize.w * 22 / 50
    const heightMax = props.options.showMore ? props.winSize.h*0.85 : props.winSize.h
    const fontSize = widthMax > heightMax ? heightMax : widthMax
    const lineHeight = fontSize*4/5
    return {
      fontSize,
      lineHeight: lineHeight+'px',
      paddingTop: (props.winSize.h-lineHeight)/2+(props.options.showMore ? 0.17*fontSize : 0)
    }
  }
  return (
    <div id="clock" style={getStyle()}>
      <ClockTime id="time" time={props.time} />
    </div>
  );
}