import React from "react";

/**
 * 时间的数字部分
 *
 * @export
 * @param {*} props
 * @returns
 */
export default function (props) {
  return (
    <span id={props.id} className="time-num" data-content={props.dataContent}>
      {props.num}
    </span>
  )
}