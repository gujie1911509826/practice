import React, { useEffect, useRef, useState } from 'react'
import { Card } from 'antd';
import './index.less'
const Index = (props) => {
    const timmer = useRef()
    const [Hour, setHour] = useState('');
    const [Seconds, setSeconds] = useState('');
    const [Minutes, setMinutes] = useState('');
    const [Year, setYear] = useState('');
    const [Month, setMonth] = useState('');
    const [Day, setDay] = useState('');
    const [Weekday, setWeekday] = useState('')
  
    const weekdayMap = {
      1: '一',
      2: '二',
      3: '三',
      4: '四',
      5: '五',
      6: '六',
      7: '日'
    }
  
    const getNewDate = () => {
      const time = new Date();
      const year = time.getFullYear();
      const month = time.getMonth() + 1;
      const day = time.getDate();
      const wday = time.getDay()
      const hour = time.getHours();
      const minutes = time.getMinutes();
      const s = time.getSeconds();
      const seconds = s <= 9 ? "0" + s : s;
      // const t = `${year}年${month}月${day}日 ${hour}:${minutes}:${seconds}`
      setHour(hour)
      setSeconds(seconds)
      if (minutes < 10) {
        setMinutes(`0${minutes}`)
      } else {
        setMinutes(minutes)
      }
      setYear(year)
      setMonth(month)
      setDay(day)
      setWeekday(weekdayMap[wday])
    }
  
    useEffect(() => {
      timmer.current = setInterval(getNewDate, 1000);
      return () => {
        clearTimeout(timmer.current)
      }
      // eslint-disable-next-line
    }, [])
    return (
      <div className="site-card-wrapper">
        <Card title="当前时间" bordered={false}>
          <div className="clockclass">
            <span className='hourclass'>
              <span>{Hour}</span>
              {Hour && <span style={{ margin: '0 2px' }}>{':'}</span>}
              <span>{Minutes}</span>
              <span>{Minutes  && <span style={{ margin: '0 2px' }}>{':'}</span>}</span>
            </span>
            <span className='secondsclass'>
              {Seconds}
            </span>
            <div className='dateclass'>
              {Weekday && <p style={{ fontSize: 20, marginBottom: 5, fontWeight: 'bold' }}>
                {`星期${Weekday}`}
              </p>}
              {Month && <p style={{ fontSize: 15, fontWeight: 'bold' }}>
                {`${Year}年${Month}月${Day}日`}
              </p>}
            </div>
          </div>
        </Card>
      </div>
    )
}
export default Index; 