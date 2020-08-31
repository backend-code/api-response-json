var d = new Date();

var _date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} : ${d.getHours()}.${d.getMinutes()}`;

module.exports = _date;