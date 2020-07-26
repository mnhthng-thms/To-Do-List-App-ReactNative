const toTimeInfo = (timestamp) => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  const event = new Date(timestamp)
  return {
    weekday: weekdays[event.getDay()], 
    date: event.getDate(),
    month: months[event.getMonth()], 
    year: event.getFullYear(),
    hour: event.getHours(), 
    minute: event.getMinutes(),
    second: event.getSeconds()
  }
}

const toString = (timestamp, query) => {
  const { weekday, date, month, year, hour, minute, second } = toTimeInfo(timestamp)
  const normalise = x => (x < 10) ? `0${x}` : `${x}`
  const _date = `${weekday},${normalise(date)}/${month}/${year}`
  const _time = `${normalise(hour)}:${normalise(minute)}:${normalise(second)}`
  
  if (query === 'time') return _time 
  if (query === 'date') return _date
  return `${_time} ${_date}`
}

const now = Date.now

export {
  toString,
  now
}