class Calendar{
    constructor(element,schedule) {
        this.schedule = schedule;
        this.el = element
        this.initialize()
    }
    initialize = () => {
        let fragment = document.createDocumentFragment();
        let leftSide = document.createElement('div');
        let rightSide = document.createElement('div');
        leftSide.classList.add('left-side');
        rightSide.classList.add('right-side');
        for (var i = 0; i < 24; i++){
            let div = document.createElement('div');
            div.innerHTML = this.formatTime(i);
            div.classList.add('hour');
            div.setAttribute('id', `hour-${i}`);
            let line = document.createElement('div');
            line.classList.add('line');
            leftSide.appendChild(div);
            rightSide.appendChild(line);
        }
        fragment.appendChild(leftSide);
        fragment.appendChild(rightSide);
        this.rightSide = rightSide;
        this.el.appendChild(fragment);
        this.createEvents();
    }

    createEvents = () => {
        let fragment = document.createDocumentFragment();
        for (var i in this.schedule) {
            let event = document.createElement('div');
            event.classList.add("event");
            event.setAttribute('id', `event-${i}`);
            let current = this.schedule[i];
            event.style.background = current['color'];
            let size = this.getDimensions(current['startTime'], current['endTime']);
            event.style.width =size.width+'px';
            event.style.height = size.height + 'px';
            event.style.top = size.top;
            let data = `
            <div>
            <div class="event-title">${current['title']}</div>
            <span>${current['startTime']+' to '+current['endTime']}</span>
            </div>
            `;
            event.innerHTML = data;
            fragment.appendChild(event);
        }
        this.rightSide.appendChild(fragment);
    }

    formatTime = (hour) => {
        let time = `${hour < 10 ? '0' + hour : hour}`;
        if (hour < 12) time = time + ' AM';
        else {
            if(hour>12) time=`${hour-12}`
            time = time + ' PM';
        }
        return time;
    }
    getDimensions = (startTime,endTime) => {
        let [startHour, startMinute] = startTime.split(":");
        let [endHour, endMinute] = endTime.split(":");
        return {
            width: parseInt(endHour - startHour) * 60 + parseInt(endMinute - startMinute) + 80,
            height: parseInt(endHour - startHour) * 60 + parseInt(endMinute - startMinute),
            top:parseInt(startHour)*60+parseInt(startMinute)+'px'
        }
    }
}
const data = [
    {
      startTime: '00:00',
      endTime: '01:30',
      color: '#f6be23',
      title: '#TeamDevkode',
    },
    {
      startTime: '3:30',
      endTime: '7:30',
      color: '#f6501e',
      title: '#TeamDevkode',
    },
    {
      startTime: '4:30',
      endTime: '8:30',
      color: '#f6501e',
      title: '#TeamDevkode',
    },
    {
      startTime: '6:30',
      endTime: '9:00',
      color: '#f6501e',
      title: 'Demo',
    },
    {
      startTime: '11:00',
      endTime: '13:30',
      color: '#029be5',
      title: '#TeamDevkode',
    },
    {
      startTime: '12:00',
      endTime: '13:30',
      color: '#029be5',
      title: '#TeamDevkode',
    },
    {
      startTime: '9:30',
      endTime: '10:30',
      color: '#029be5',
      title: '#TeamDevkode',
    },
    {
      startTime: '16:00',
      endTime: '17:00',
      color: '#029be5',
      title: '#TeamDevkode',
    },
    {
      startTime: '15:00',
      endTime: '17:00',
      color: '#029be5',
      title: '#TeamDevkode',
    },
    {
      startTime: '18:00',
      endTime: '19:00',
      color: '#f6501e',
      title: '#TeamDevkode',
    },
    {
      startTime: '20:30',
      endTime: '22:30',
      color: '#029be5',
      title: '#TeamDevkode',
    },
    {
      startTime: '20:30',
      endTime: '22:30',
      color: '#029be5',
      title: '#TeamDevkode',
    },
];
  
new Calendar(document.getElementById("calendar-parent"),data)