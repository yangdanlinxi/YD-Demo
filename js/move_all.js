
function getStyle(obj,name) {
    return (obj.currentStyle || getComputedStyle(obj,false))[name];
}

// obj -> 要运动的物体
// json -> 改变的属性
// options -> 选项  duration  easing  complete
function move(obj,json,options) {
    // 准备一些默认值
    options = options || {};
    options.duration = options.duration || 700;
    options.easing = options.easing || 'ease-out';

    // 先关后开
    clearInterval(obj.timer);
    var count = Math.floor(options.duration / 30); // 总次数
    var start = {}; // 起点
    var dis = {}; // 总距离
    // 循环计算总距离
    for (var name in json) {
        // 计算起点
        start[name] = parseFloat(getStyle(obj,name));
        // 计算总距离
        dis[name] = json[name] - start[name];
    }
    var n = 0; // 当前走的次数
    obj.timer = setInterval(function(){
        n++;
        // 改变属性
        for (var name in json) {
            switch(options.easing) {
                case 'linear': // 匀速
                    var a = n/count;
                    var cur = start[name] + dis[name]*a;
                    break;
                case 'ease-in': // 加速
                    var a = n/count;
                    var cur = start[name] + dis[name] * Math.pow(a,3);
                    break;
                case 'ease-out': // 缓冲
                    var a = 1 - n/count;
                    var cur = start[name] + dis[name] * (1-Math.pow(a,3));
                    break;
            }
            if (name == 'opacity') {
                obj.style.opacity = cur;
                obj.style.filter = 'alpha(opacity:'+cur*100+')';
            } else {
                obj.style[name] = cur + 'px';
            }
        }

        if (n == count) {
            // 走完了
            clearInterval(obj.timer);
            // 链式运动回调
            options.complete && options.complete();
        }
    },30);

}