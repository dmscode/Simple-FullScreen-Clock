import React from "react";

import Clock from "./Clock";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time:  this.getTime(),
      options: {
        isLight   : this.getHashQuery('light'),     // 是否浅色模式
        autoToggle: this.getHashQuery('auto'),      // 是否自动切换颜色
        showMore  : this.getHashQuery('more'),      // 是否显示更多信息（时钟页面
        inkScreen : this.getHashQuery('ink'),       // 是否启用墨水屏模式（关闭所有过渡效果
        breathe   : this.getHashQuery('breathe'),   // 是否开启呼吸灯
      },
      winSize: {
        w: window.innerWidth,
        h: window.innerHeight
      }
    };
  }
  componentDidMount() {
    // 当窗口尺寸发生改变时更新
    window.addEventListener('resize', (e)=>{
      this.setState(Object.assign( this.state, {winSize: {
        w: window.innerWidth,
        h: window.innerHeight
      }}))
    }, false);
    // 定时器，定时框架刷新消息
    window.addEventListener('message', (e)=>{
      if(e.data === 'refresh') {
        this.setState(Object.assign( this.state, {time: this.getTime()}))
      }
    }, false);
  }
  /**
   * 获取网址 hash 中的参数
   *
   * @param {*} key 检测的关键字
   * @returns {Boolean} 是否存在该关键字
   * @memberof Main
   */
  getHashQuery(key){
    const reg = new RegExp('(^|#|-)'+key+'($|-)', 'i')
    return reg.test(decodeURIComponent(window.location.hash))
  }
  /**
   * 两位数字
   *
   * @param {Number String} num 数字
   * @returns {String} num 两位数字的字符串
   * @memberof Main
   */
  dbNum(num){
    num = Number(num)
    return String( num>9 ? num : '0'+num)
  }
  /**
   * 获取时间
   * 更新 this.state.time 中的时间值
   *
   * @memberof Main
   */
  getTime(){
    const time = {}
    const now     = new Date()
    time.year     = this.dbNum( now.getFullYear() )
    time.month    = this.dbNum( now.getMonth()+1 )
    time.date     = this.dbNum( now.getDate() )
    time.hour     = this.dbNum( now.getHours() )
    time.minute   = this.dbNum( now.getMinutes() )
    time.second   = this.dbNum( now.getSeconds() )
    time.day      = now.getDay()
    return time
  }
  render() {
    const screenClass = this.state.options.inkScreen ? 'ink-screen' : 'normal-screen'
    const theme = this.state.options.autoToggle
                  ? ((+this.state.time.hour>=7 && +this.state.time.hour<19) ? 'light' : 'dark')
                  : (this.state.options.isLight ? 'light' : 'dark')
    const showMore = this.state.options.showMore ? 'more' : 'less'
    const mainClass = screenClass+' '+theme+' '+showMore
    return (
      <div
        id="main"
        className={mainClass}
        style={{
          opacity:  (this.state.options.breathe && !this.state.options.ink)
                    ? (Math.sin(Math.PI * Number(this.state.time.second%20)/10-1)
                        * 0.2
                        + (this.state.options.isLight ? 0.8 : 0.5)).toFixed(2)
                    : ''
        }}
      >
        <Clock
          time    = {this.state.time}
          options = {this.state.options}
          winSize = {this.state.winSize}
        />
      </div>
    );
  }
}