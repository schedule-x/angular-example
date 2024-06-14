import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalendarComponent} from "@schedule-x/angular";
import {createCalendar, viewWeek} from "@schedule-x/calendar";
import '@schedule-x/theme-default/dist/calendar.css'
import {createEventModalPlugin} from "@schedule-x/event-modal";
import {createDragAndDropPlugin} from "@schedule-x/drag-and-drop";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-example';
  calendarApp = createCalendar({
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: '2024-06-11 03:00',
        end: '2024-06-11 05:00',
      },
    ],
    views: [viewWeek],
    plugins: [createEventModalPlugin(), createDragAndDropPlugin()]
  })
}
