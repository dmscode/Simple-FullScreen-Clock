import React, { useState, useEffect } from "react";

import Clock from "./Clock";

/**
 * 获取网址 hash 中的参数
 *
 * @param {*} key 检测的关键字
 * @returns {Boolean} 是否存在该关键字
 */
const getHashQuery = key=>{
  const reg = new RegExp('(^|#|-)'+key+'($|-)', 'i')
  return reg.test(decodeURIComponent(window.location.hash))
}
const options = {
  isLight   : getHashQuery('light'),   // 是否浅色模式
  autoToggle: getHashQuery('auto'),    // 是否自动切换颜色
  showMore  : getHashQuery('more'),    // 是否显示更多信息（时钟页面
  inkScreen : getHashQuery('ink'),     // 是否启用墨水屏模式（关闭所有过渡效
  breathe   : getHashQuery('breathe'), // 是否开启呼吸灯
}
/**
 * 两位数字
 *
 * @param {Number String} num 数字
 * @returns {String} num 两位数字的字符串
 */
const dbNum = num=>{
  num = Number(num)
  return String( num>9 ? num : '0'+num)
}
/**
 * 获取时间
 * 更新 this.state.time 中的时间值
 *
 */
const getTime = ()=>{
  const time = {}
  const now     = new Date()
  time.year     = dbNum( now.getFullYear() )
  time.month    = dbNum( now.getMonth()+1 )
  time.date     = dbNum( now.getDate() )
  time.hour     = dbNum( now.getHours() )
  time.minute   = dbNum( now.getMinutes() )
  time.second   = dbNum( now.getSeconds() )
  time.day      = now.getDay()
  return time
}

export default function Main(props){
  const [time, setTime] = useState(getTime())
  const [winSize, setWinSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight
  })
  useEffect(()=>{
    // 当窗口尺寸发生改变时更新
    const resize = (e)=>{
      setWinSize({
        w: window.innerWidth,
        h: window.innerHeight
      })
    }
    window.addEventListener('resize', resize, false);
    return ()=>{
      window.removeEventListener('resize', resize)
    }
  },[])
  useEffect(()=>{
    // 定时器，定时框架刷新消息
    const refresh = (e)=>{
      if(e.data === 'refresh') {
        setTime(getTime())
        if(time.hour==='03' && time.minute==='00' && time.second==='00'){
          window.location.reload(true)
        }
      }
    }
    window.addEventListener('message', refresh, false);
    return ()=>{
      window.removeEventListener('message', refresh)
    }
  },[])
  const screenClass = options.inkScreen ? 'ink-screen' : 'normal-screen'
  const theme = options.autoToggle
                ? ((+time.hour>=7 && +time.hour<19) ? 'light' : 'dark')
                : (options.isLight ? 'light' : 'dark')
  const showMore = options.showMore ? 'more' : 'less'
  const mainClass = screenClass+' '+theme+' '+showMore
  return (
    <div
      id="main"
      className={mainClass}
      style={{
        opacity:  (options.breathe && !options.ink)
                  ? (Math.sin(Math.PI * Number(time.second%20)/10-1)
                      * 0.2
                      + (options.isLight ? 0.8 : 0.5)).toFixed(2)
                  : ''
      }}
    >
      <Clock
        time    = {time}
        options = {options}
        winSize = {winSize}
      />
    </div>
  )
}