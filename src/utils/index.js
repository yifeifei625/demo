export function formatDate (value, fmt) {
  // let v = value.replace(/-/g, "/").substring(0, 19);
  let date = new Date(value)
  if (date === 'Invalid Date') {
    date = new Date(parseFloat(value))
  }
  if (!fmt) {
    fmt = 'yyyy-MM-dd hh:mm:ss'
  }
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

export function dateToEnMonthYear (value) {
  let date = new Date(value)
  if (date === 'Invalid Date') {
    return 'Invalid Date'
  }
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return months[date.getMonth()] + ' ' + date.getFullYear()
}

export function clickOutside (event, calssname) {
  let el = document.getElementsByClassName(calssname)[0]
  if (el.contains(event.target)) return false
  return true
}

export function getLS (key) {
  return JSON.parse(localStorage.getItem(key))
}

export function setLS (key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function changeURLQuery (data) {
  var url = location.href
  Object.keys(data).forEach((key) => {
    var value = data[key]
    var pattern = key + '=([^&]*)'
    var replaceText = key + '=' + value
    if (url.match(pattern)) {
      var tmp = new RegExp('\\b' + key + '=[^&]*')
      url = url.replace(tmp, replaceText)
    } else {
      if (url.match('[?]')) {
        url = url + '&' + replaceText
      } else {
        url = url + '?' + replaceText
      }
    }
  })
  return url
}

export function phoneReg (val) {
  return (/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i).test(val.trim())
}

export function getYesterday () {
  return new Date(new Date() - 24 * 60 * 60 * 1000).toLocaleDateString().replace(/\//g, '-')
}

export function scrollToTop (scrollTo, time) {
  var scrollFrom = parseInt(document.body.scrollTop)
  var i = 0
  var runEvery = 5
  scrollTo = parseInt(scrollTo)
  time /= runEvery
  var interval = setInterval(function () {
    i++
    document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom
    if (i >= time) {
      clearInterval(interval)
    }
  }, runEvery)
}

export function timeDown (start, end) {
    var startVal = start.replace(/-/g, "/");
    var endtVal = end.replace(/-/g, "/");
    if (new Date(startVal) == 'Invalid Date' || new Date(endtVal) == 'Invalid Date') {
        console.error('The param of function "timeDown" must be a date string!');
    }
    var startDate = new Date(startVal);
    var endDate = new Date(endtVal);
    var nowDate = new Date();
    var tmp,tmpS;
    if(startDate > nowDate){
        tmp = startDate.getTime() - nowDate.getTime();
        tmpS = "开始";
    }else if(endDate > nowDate){
        tmp = endDate.getTime() - nowDate.getTime();
        tmpS = "结束";
    }else{
        return "已经结束"
    }
    var days = Math.floor(tmp/(24*3600*1000));  //计算出相差天数
    var leaveDays = tmp%(24*3600*1000);   //计算天数后剩余的毫秒数
    var hours = Math.floor(leaveDays/(3600*1000));   //计算出小时数
    var leaveHours = leaveDays%(3600*1000);  //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leaveHours/(60*1000));   //计算相差分钟数
    var leaveMinutes = leaveHours%(60*1000);    //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leaveMinutes/1000);    //计算相差秒数
    var result = "";
    if(hours.toString().length == 1){
        hours = "0" + hours;
    }
    if(minutes.toString().length == 1){
        minutes = "0" + minutes;
    }
    if(seconds.toString().length == 1){
        seconds = "0" + seconds;
    }
    if(days>0){
        result += "剩"+days+"天"+hours+":"+minutes+":"+seconds;
    }else{
        result += "剩"+hours+":"+minutes+":"+seconds;
    }
    return result + tmpS;
}

export function leftpad (str, len, ch) {
  str = String(str);
  var i = -1;
  if (!ch && ch !== 0) ch = ' ';
  len = len - str.length;
  while (++i < len) {
    str = ch + str;
  }
  return str;
}
