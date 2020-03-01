import React from 'react'
import './Calendar.css';

function Calendar() {
  const today = new Date();

  // @TODO: implement actual logic for mapping date to solitaire calendar
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysOfWeeks = [
    [1,2,3,4,5,6,7],
    [8,9,10,11,12,13,14],
    [15,16,17,18,19,20,21],
    [22,23,24,25,26,27,28],
  ];
  const suits = ['♦', '♣', '♥', '♠'];
  const ranks =['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
  const monthRank = ranks[month];
  const yearSuit = suits[year % 4];

  const suitCssClass = suit => {
    return suit === '♣' || suit === '♠' ? 'black' : 'red';
  }

  const Day = (day, dayIndex, daysOfWeek, weekIndex) => {
    const className = `day ${dayIndex === 0 && 'day-of-week--first'} ${dayIndex === daysOfWeek.length - 1 && 'day-of-week--last'}`;

    return (
      <div className={className} key={dayIndex}>
        { dayIndex === 0 && <div className={`week-label ${suitCssClass(suits[weekIndex])}`}><div>{monthRank}</div><div>{suits[weekIndex]}</div></div> }
        <div className="text">{day}</div>
        { dayIndex === daysOfWeek.length - 1 && <div className={`week-label week-label--end ${suitCssClass(suits[weekIndex])}`}><div>{monthRank}</div><div>{suits[weekIndex]}</div></div> }
      </div>
    )
  }

  const handleIncrementMonth = () => {
    // @TODO
  }

  const handleDecrementMonth = () => {
    // @TODO
  }

  return (
    <div className="calendar">
      <div className="calendar-container">
        <div className="calendar--header">
          <div className="year">{yearSuit} {year}</div>
          {/*<div className="year invisible">{yearSuit} {year}</div>*/}
          <div className="month">
            <div className="arrow arrow--left" onClick={handleDecrementMonth}>&lt;</div>
            <div>The month of {monthRank}</div>
            <div className="arrow arrow--right" onClick={handleIncrementMonth}>&gt;</div>
          </div>
        </div>
        <div className="calendar--body">
          <div className="days-label">
            <div className="day-label">Sun</div>
            <div className="day-label">Mon</div>
            <div className="day-label">Tue</div>
            <div className="day-label">Wed</div>
            <div className="day-label">Thu</div>
            <div className="day-label">Fri</div>
            <div className="day-label">Sat</div>
          </div>
          {
            daysOfWeeks.map((daysOfWeek, weekIndex) => (
              <div className="week" key={weekIndex}>
                { daysOfWeek.map((day, dayIndex) => Day(day, dayIndex, daysOfWeek, weekIndex)) }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Calendar;