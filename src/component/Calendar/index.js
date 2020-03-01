import React, { useState } from 'react'
import './Calendar.css';

// https://flyclipart.com/joker-icon-free-of-free-vector-emoji-joker-card-png-897578
import joker from '../../images/joker.png';

function Calendar() {
  /** Returns the day number in the year, value from 1 - 366
   * e.g.
   * - January 3 should be 3.
   * - February 1 should be 32.
   */
  const getDayOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  const today = new Date();
  const year = today.getFullYear();

  const dayOfYear = getDayOfYear(new Date());
  console.log("dayOfYear:", dayOfYear);

  const SUITS = ['♦', '♣', '♥', '♠'];
  const RANKS =['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'JOKER'];
  const NUM_DAYS_IN_SOLITAIRE_MONTH = 28;
  const NUM_DAYS_IN_WEEK = 7;

  const daysOfWeeks = [
    [1,2,3,4,5,6,7],
    [8,9,10,11,12,13,14],
    [15,16,17,18,19,20,21],
    [22,23,24,25,26,27,28],
  ];

  // 0 - 12: A to K in RANKS.
  const todaySolitaireMonthIndex = Math.floor((dayOfYear - 1) / NUM_DAYS_IN_SOLITAIRE_MONTH);

  // 0 - 3: 1st to 4th week.
  const todaySolitaireWeekIndex = Math.floor(((dayOfYear - 1) % NUM_DAYS_IN_SOLITAIRE_MONTH) / NUM_DAYS_IN_WEEK);

  // 0 - 6: 1st to 7th day in the week.
  const todaySolitaireDayInWeekIndex = Math.floor(((dayOfYear - 1) % NUM_DAYS_IN_SOLITAIRE_MONTH) % NUM_DAYS_IN_WEEK);

  const [currentYear, setCurrentYear] = useState(year);
  const [currentSolitaireMonthIndex, setCurrentSolitaireMonthIndex] = useState(todaySolitaireMonthIndex);

  const monthRank = RANKS[currentSolitaireMonthIndex];
  const yearSuit = SUITS[currentYear % 4];

  const suitCssClass = suit => {
    return suit === '♣' || suit === '♠' ? 'black' : 'red';
  }

  const isLeapYear = (year) => {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  }

  const JokerMonth = function() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={joker} width="50%" alt="joker day"/>
        { isLeapYear(currentYear) && <img src={joker} width="50%" alt="joker day" style={{transform: 'rotateY(180deg)'}}/> }
      </div>
    )
  };

  const DaysOfWeek = (daysOfWeek, weekIndex) => {
    return (
      <div className="week" key={weekIndex}>
        {
          daysOfWeek.map((day, dayIndex) => {
            const isToday = year === currentYear
              && todaySolitaireMonthIndex === currentSolitaireMonthIndex
              && weekIndex === todaySolitaireWeekIndex
              && dayIndex === todaySolitaireDayInWeekIndex
            return Day(day, dayIndex, daysOfWeek, weekIndex, isToday);
          })
        }
      </div>
    )
  }

  const Day = (day, dayIndex, daysOfWeek, weekIndex, isToday) => {
    const className = `day ${isToday && 'day--today'} ${dayIndex === 0 && 'day-of-week--first'} ${dayIndex === daysOfWeek.length - 1 && 'day-of-week--last'}`;

    return (
      <div className={className} key={dayIndex}>
        { dayIndex === 0 && <div className={`week-label ${suitCssClass(SUITS[weekIndex])}`}><div>{monthRank}</div><div>{SUITS[weekIndex]}</div></div> }
        <div className="text">{day}</div>
        { dayIndex === daysOfWeek.length - 1 && <div className={`week-label week-label--end ${suitCssClass(SUITS[weekIndex])}`}><div>{monthRank}</div><div>{SUITS[weekIndex]}</div></div> }
      </div>
    )
  }

  const handleIncrementMonth = () => {
    const newMonthIndex = (currentSolitaireMonthIndex + 1) % RANKS.length;
    setCurrentSolitaireMonthIndex(newMonthIndex);

    if (newMonthIndex === 0) {
      setCurrentYear(currentYear + 1);
    }
  }

  const handleDecrementMonth = () => {
    const newMonthIndex = (RANKS.length + currentSolitaireMonthIndex - 1) % RANKS.length;
    setCurrentSolitaireMonthIndex(newMonthIndex);

    if (newMonthIndex === RANKS.length - 1) {
      setCurrentYear(currentYear - 1);
    }
  }

  return (
    <div className="calendar">
      <div className="calendar-container">
        <div className="calendar--header">
          <div className="year">{yearSuit} {currentYear}</div>
          {/*<div className="year invisible">{yearSuit} {year}</div>*/}
          <div className="month">
            <div className="arrow arrow--left" onClick={handleDecrementMonth}>&lt;</div>
            <div>The month of {monthRank}</div>
            <div className="arrow arrow--right" onClick={handleIncrementMonth}>&gt;</div>
          </div>
        </div>
        <div className="calendar--body">
          {/*<div className="days-label">*/}
          {/*  <div className="day-label">Sun</div>*/}
          {/*  <div className="day-label">Mon</div>*/}
          {/*  <div className="day-label">Tue</div>*/}
          {/*  <div className="day-label">Wed</div>*/}
          {/*  <div className="day-label">Thu</div>*/}
          {/*  <div className="day-label">Fri</div>*/}
          {/*  <div className="day-label">Sat</div>*/}
          {/*</div>*/}
          { currentSolitaireMonthIndex === 13 ? <JokerMonth /> : daysOfWeeks.map((daysOfWeek, weekIndex) => DaysOfWeek(daysOfWeek, weekIndex)) }
        </div>
      </div>
    </div>
  )
}

export default Calendar;