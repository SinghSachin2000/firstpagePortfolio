import React from 'react';

const HeatmapCalender = ({ startDate, endDate, dataValues }) => {
  const startingDate = new Date(startDate);
  const endingDate = new Date(endDate);
  const daysInMonth = Math.ceil((endingDate - startingDate) / (1000 * 60 * 60 * 24)) + 1;

  const calenderGrid = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(startingDate);
    date.setDate(startingDate.getDate() + i);
    const formattedDate = date.toISOString().slice(0, 10);

    const activity = dataValues.find(activity => {
      const [day, month, year] = activity.Date.split("-");
      const activityDate = new Date(`${year}-${month}-${day}`).toISOString().slice(0, 10);
      return activityDate === formattedDate;
    });

    return { date: formattedDate, activity: activity ? activity["Number of Question"] : 0 };
  });

  const highestValue = dataValues.reduce((a, b) => Math.max(a, b["Number of Question"]), -Infinity);

  const getIntensity = (activityCount) => {
    return highestValue !== 0 ? 1 - (activityCount / highestValue) : 1;
  };

  const getColorFromIntensity = (intensity) => {
    const green = Math.round(255 * intensity);
    return `rgb(0, ${green}, 0)`;
  };

  const renderMonthLabels = () => {
    const monthLabels = [];
    let currentMonth = new Date(startingDate).getMonth();
    let monthStartIndex = 0;

    for (let i = 0; i < calenderGrid.length; i++) {
      const date = new Date(calenderGrid[i].date);
      const month = date.getMonth();

      if (month !== currentMonth) {
        monthLabels.push({
          month: new Date(date.getFullYear(), currentMonth, 1).toLocaleString('default', { month: 'short' }),
          startIndex: monthStartIndex,
          endIndex: i - 1
        });
        currentMonth = month;
        monthStartIndex = i;
      }
    }
    monthLabels.push({
      month: new Date(endingDate).toLocaleString('default', { month: 'short' }),
      startIndex: monthStartIndex,
      endIndex: calenderGrid.length - 1
    });

    return monthLabels;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '320px' }}>
        {calenderGrid.map((day, index) => {
          const activityCount = day.activity;
          const intensity = getIntensity(activityCount);
          const color = activityCount ? getColorFromIntensity(intensity) : '#e0e0e0';

          // Add a gap before the first day of each month
          const date = new Date(day.date);
          const isFirstDayOfMonth = date.getDate() === 1;
          const gapStyle = isFirstDayOfMonth ? { marginLeft: '10px' } : {};

          return (
            <span
              key={index}
              style={{
                width: '15px',
                height: '15px',
                margin: '2px',
                backgroundColor: color,
                display: 'inline-block',
                borderRadius: '4px',
                cursor: 'pointer',
                ...gapStyle
              }}
              title={`${activityCount} questions on ${day.date}`}
            >
            </span>
          );
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '320px', marginTop: '10px' }}>
        {renderMonthLabels().map((monthLabel, index) => (
          <span
            key={index}
            style={{
              textAlign: 'center',
              width: `${((monthLabel.endIndex - monthLabel.startIndex + 1) / daysInMonth) * 100}%`
            }}
          >
            {monthLabel.month}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeatmapCalender;
