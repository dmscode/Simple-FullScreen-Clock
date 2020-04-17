import React from "react";

import ClockNum from "./clock-num";

const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
/**
 * 对传入的时间数字进行校验，避免报错
 *
 * @param {String} numString
 * @returns {String}
 */
const timeString = numString=>{
  return numString ? numString : '00'
}

/**
 * 时间显示组件
 * 显示时、分
 * @export
 * @param {*} props
 * @returns
 */
export default function ClockTime(props) {
  return (
    <div id="time">
      <ClockNum
        id="hour"
        num={timeString(props.time.hour)}
        dataContent={props.time ? weekNames[props.time.day] : ''} />
      <span className="sep" style={{opacity: props.time.second%2 ? 0 : 100}}>:</span>
      <ClockNum
        id="minute"
        num={timeString(props.time.minute)}
        dataContent={timeString(props.time.second)} />
    </div>
  )
}