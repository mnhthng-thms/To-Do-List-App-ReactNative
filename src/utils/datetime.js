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

const toString = (timestamp) => {
  ({ weekday, date, month, year, hour, minute, second } = toTimeInfo(timestamp))
  const normalise = x => (x < 10) ? `0${x}` : `${x}`
  return [
    `${normalise(hour)}:${normalise(minute)}:${normalise(second)}`, 
    `${weekday},${normalise(date)}/${month}/${year}`
  ].join(' ')
}

const now = Date.now

const datetime = {
  toString,
  now
}