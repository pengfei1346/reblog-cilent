/**
 * 节制函数
 * @param {Function} method 需要节制的函数
 * @param {Number} delay  间隔时间
 * @param {Number} duration 超出时间
 * @param {Boolean} controlType 1防抖 0节流 默认0
 * @return Function
 */

export const throttle1 = function (method, delay, duration, controlType) {
    let timer = null;
    let flag = false;
    let start = new Date().getTime();
    return function () {
        let context = this;
        let args = arguments;
        if (controlType) {
            if (!flag) {
                method.apply(context, args);
                flag = true;
                start = new Date().getTime();
            }
            if (timer) clearTimeout(timer)
            timer = setTimeout(function () {
                flag = false;
                let end = new Date().getTime();
                if (end - start >= duration) {
                    method.apply(context, args);
                    start = end;
                }
            }, delay)
        } else {
            let end = new Date().getTime();
            if (timer) clearTimeout(timer)
            if (end - start >= duration) {
                method.apply(context, args);
                start = end;
            } else {
                timer = setTimeout(function () {
                    method.apply(context, args);
                    start = new Date().getTime();
                }, delay)
            }
        }
    }
}

export function _debounce(fn, delay) {
    delay = delay || 1000;
    let timer;
    return function () {
        var th = this;
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            timer = null;
            fn.apply(th, args);
        }, delay);
    };
}
// 节流
export function _throttle(fn, interval) {
    let last;
    let timer;
    interval = interval || 1000;
    return function () {
        var th = this;
        var args = arguments;
        var now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                fn.apply(th, args);
            }, interval);
        } else {
            last = now;
            fn.apply(th, args);
        }
    }
}
