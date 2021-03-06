$(document).ready(() => {
  const calendarNode = document.getElementById('calendar');
  if(calendarNode){
    const events = [
      {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2018, 3, 0),
        end: new Date(2018, 3, 1),
        priority: 'high',
      },
      {
        id: 1,
        title: 'Escape from the Dragon',
        start: new Date(2018, 3, 7),
        end: new Date(2018, 3, 10),
        priority: 'high',
      },

      {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2018, 2, 13, 0, 0, 0),
        end: new Date(2018, 2, 20, 0, 0, 0),
        priority: 'high',
      },

      {
        id: 3,
        title: 'DTS ENDS',
        start: new Date(2018, 10, 6, 0, 0, 0),
        end: new Date(2018, 10, 13, 0, 0, 0),
        priority: 'high',
      },

      {
        id: 4,
        title: 'Find blacksmith',
        start: new Date(2018, 3, 9, 0, 0, 0),
        end: new Date(2018, 3, 9, 0, 0, 0),
        priority: 'family',
      },
      {
        id: 5,
        title: 'Learn more about princesses',
        start: new Date(2018, 3, 11),
        end: new Date(2018, 3, 13),
        priority: 'high',
      },
      {
        id: 6,
        title: 'Get a new mail',
        start: new Date(2018, 3, 12, 10, 30, 0, 0),
        end: new Date(2018, 3, 12, 12, 30, 0, 0),
        priority: 'non',
      },
      {
        id: 7,
        title: 'Lunch with ghoul',
        start: new Date(2018, 3, 12, 12, 0, 0, 0),
        end: new Date(2018, 3, 12, 13, 0, 0, 0),
        priority: 'non',
      },
      {
        id: 8,
        title: 'Meeting',
        start: new Date(2018, 4, 12, 14, 0, 0, 0),
        end: new Date(2018, 4, 12, 15, 0, 0, 0),
        priority: 'high',
      },
      {
        id: 9,
        title: 'Training of the squire',
        start: new Date(2018, 3, 12, 17, 0, 0, 0),
        end: new Date(2018, 3, 12, 17, 30, 0, 0),
        priority: 'family',
      },
      {
        id: 10,
        title: 'Dinner with King',
        start: new Date(2018, 3, 12, 20, 0, 0, 0),
        end: new Date(2018, 3, 12, 21, 0, 0, 0),
        priority: 'non',
      },
      {
        id: 11,
        title: 'Duel',
        start: new Date(2018, 3, 13, 7, 0, 0),
        end: new Date(2018, 3, 13, 10, 30, 0),
        priority: 'family',
      },
      {
        id: 12,
        title: 'Masked ball',
        start: new Date(2018, 3, 17, 19, 30, 0),
        end: new Date(2018, 3, 18, 2, 0, 0),
        priority: 'family',
      },
      {
        id: 13,
        title: 'Save the Princess from the Dragon',
        start: new Date(2018, 3, 20, 19, 30, 0),
        end: new Date(2018, 3, 22, 2, 0, 0),
        priority: 'high',
      },
      {
        id: 14,
        title: 'Find information about magic',
        start: new Date(2018, 3, 9, 0, 0, 0),
        end: new Date(2018, 3, 11, 0, 0, 0),
        priority: 'non',
      },
      {
        id: 14,
        title: 'Get drink with the Dragon at the wedding',
        start: new Date(2018, 3, 26, 0, 0, 0),
        end: new Date(2018, 3, 26, 0, 0, 0),
        priority: 'non',
      },
    ];

    const eventRender = info => {
      let color = '';
      switch (info.event._def.extendedProps.priority) {
        case 'high':
          color = 'rgb(250, 105, 125)'; // red
          break;
        case 'family':
          color = 'rgb(76, 225, 182)'; // green
          break;
        case 'non':
          color = 'rgb(112, 187, 253)'; // blue
          break;
      }
      info.el.style = `background-color: ${color}; color: white; border: 0;`;
    };

    const calendar = new window.FullCalendar.Calendar(calendarNode, {
      plugins: ['dayGrid', 'timeGrid'],
      defaultView: 'dayGridMonth',
      eventLimit: true,
      allDaySlot: false,
      defaultDate: new Date(2018, 3, 1),
      events,
      displayEventTime: false,
      header: {
        left: 'today prev next',
        center: 'title',
        right: 'dayGridMonth, timeGridWeek, timeGridDay'
      },
      views: {
        dayGridMonth: {
          eventLimit: 2
        }
      },
      eventRender,
    });
    calendar.render();
  }
});
