import React, { useState, useEffect } from 'react';

export default function Menu(props){
  // 捐助菜单显示状态
  const [showDonate, setShowDonate] = useState(false)
  const handlerClickChangeDonateShow = ()=>setShowDonate(d=>!d)
  // 获取当前元素所用洋式数据，并设置为状态，在变化时触发视图更新
  const menuStyle =()=>{
    const fontSize = props.winSize.h / (props.menu.length+5) / 1.5
    const LineHeight = fontSize*1.5

    const QRCodeImgMaxHeight = props.winSize.h-4*LineHeight
    const QRCodeImgMaxWidth = props.winSize.w/3
    const QRCodeImg = QRCodeImgMaxHeight>QRCodeImgMaxWidth
                      ? QRCodeImgMaxWidth
                      : QRCodeImgMaxHeight
    const paddingTop = showDonate ? LineHeight : LineHeight*1.5
    return {
      fontSize,
      paddingTop,
      QRCodeImg,
      height : props.showMenu ? '100vh' : '0',
      lineHeight: LineHeight,
    }
  }
  const [style, setStyle] = useState(menuStyle())
  useEffect(()=>{
    setStyle(menuStyle())
  },[props.showMenu, props.winSize, showDonate])
  return (
    <div  // 菜单主体，通过高度控制菜单显隐
      id="menu"
      style={{
        fontSize: style.fontSize,
        lineHeight: style.lineHeight+'px',
        height: style.height
      }}
    >
      <div  // 菜单标题，根据情况显示不同内容
        className="menu-title menu-item"
        style={{ paddingTop: style.paddingTop+'px' }}
      >{showDonate ? 'A cup of coffee?' : 'Menu:'}</div>
      {/* 渲染菜单列表 */}
      {props.menu.map((item,index)=>
        showDonate ? null : <div key={index} className="menu-item" onClick={()=>{ props.onClick(item) }}>{item}</div>
      )}
      {/* 捐赠菜单项 */}
      <div className="menu-item" onClick={handlerClickChangeDonateShow}>{showDonate ? '﹀' : 'Donate'}</div>
      { showDonate ? (
        <div className="menu-item menu-coffee">
          <img src = {require('../src/AliPay-360.png')} style={{width: style.QRCodeImg-20, padding: 10}} alt = ""/>
          <img src = {require('../src/WePay-360.png')}  style={{width: style.QRCodeImg-20, padding: 10}} alt = ""/>
          <img src = {require('../src/QQPay-360.png')}  style={{width: style.QRCodeImg-20, padding: 10}} alt = ""/>
        </div>
      ): null }
    </div>
  )
};