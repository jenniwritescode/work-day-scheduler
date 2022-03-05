# Work Day Scheduler

App that displays a work day scheduler or planner. Text entered into a time block row will be saved when the user hits the save button and will persistently display on document reload. Items can be removed individually by clearing the text field and hitting save icon. The entire schedule can be cleared using the "Clear Schedule" button at the bottom of the scheduler and then reloading the page.

Time blocks are color-coded based on whether it is the past (light purple), present (light pink), or future (light green) by comparing the current time to the time displayed in the time block row.

---

### Languages/Tools Used:
- HTML
- JQuery
- CSS
- Bootstrap
- Google Fonts
- Font Awesome Kit (for save icon)

---

### User Story:
```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

### Criteria:
```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

---

### Link to App:
[Link](https://jenniwritescode.github.io/work-day-scheduler/)

---

### Functionality Demonstration:


![gif of functionality](./assets/img/functionality.gif)

Note: this was recorded at 5:30pm local time.

