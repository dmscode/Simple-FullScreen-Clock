Simple Fullscreen Clock
===

一个简单的全屏时钟。尽可能地支持老旧设备，使它们可以摆在桌面上继续陪伴我们。

需要将网站添加到桌面，然后从此快捷方式打开才是全屏显示。

建议在设备上安装如 Chrome、Firefox 或者 Yandex 等浏览器，可以获得最佳体验。iOS 设备如因为版本太低无法安装，用自带 Safari 也可以，经测试 iOS 9 下可以运行。

参数说明
---

可通过锚点（`#hash`）向网页传递参数，调整页面配色和显示内容。多个参数间用 `|` 进行连接（实际任何合法的内容均可作为连接，未作细致容错处理）。

* `dark` 暗色。黑色背景，白色文字。此为默认值，无需设置；
* `light` 亮色。白色背景，黑色文字；
* `auto` 自动。白天亮色，晚上暗色。均匀消耗所有像素，不再担心烧屏；
* `more` 显示更多内容。会在时间上方显示星期几和秒数（秒数切换不十分精确）；

细节说明
---

* 有周期为 20 秒的呼吸效果。
* 颜色自动切换时间为早晚七点。
* 凌晨 3 点页面自动刷新，以避免某些可能潜在的问题。
* 受刷新频率限制，秒数可能存在 ±1s 的误差，误作为精确时间依据。

网址列表
---

可直接通过如下网址访问对应功能，然后添加到桌面。

**Github pages**

* [深色时钟](https://dmscode.github.io/Simple-FullScreen-Clock/)
* [浅色时钟](https://dmscode.github.io/Simple-FullScreen-Clock/#light)
* [自动切换颜色](https://dmscode.github.io/Simple-FullScreen-Clock/#auto)

* [深色时钟（含更多信息显示）](https://dmscode.github.io/Simple-FullScreen-Clock/#more)
* [浅色时钟（含更多信息显示）](https://dmscode.github.io/Simple-FullScreen-Clock/#light|more)
* [自动切换颜色（含更多信息显示）](https://dmscode.github.io/Simple-FullScreen-Clock/#auto|more)