import React from "react";
import ReactDOM from "react-dom";
import './index.styl';

import Mian from "./Components/main";

// 插入定时框架
const duration = 1; /* 1s */
const iframe = document.createElement('iframe');
iframe.style.display = 'none';
iframe.src = 'data:text/html,%3C%21DOCTYPE%20html%3E%0A%3Chtml%3E%0A%3Chead%3E%0A%09%3Cmeta%20charset%3D%22utf-8%22%20%2F%3E%0A%09%3Cmeta%20http-equiv%3D%22refresh%22%20content%3D%22'+ duration +'%22%20id%3D%22metarefresh%22%20%2F%3E%0A%09%3Ctitle%3Ex%3C%2Ftitle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%09%3Cscript%3Etop.postMessage%28%27refresh%27%2C%20%27%2A%27%29%3B%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E';
document.body.insertBefore(iframe, null);

ReactDOM.render(
  <Mian />,
  document.getElementById('app')
);