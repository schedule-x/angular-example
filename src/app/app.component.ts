import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalendarComponent} from "@schedule-x/angular";
import {createCalendar, viewWeek} from "@schedule-x/calendar";
import {createEventModalPlugin} from "@schedule-x/event-modal";
import {createDragAndDropPlugin} from "@schedule-x/drag-and-drop";
import 'temporal-polyfill/global';

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
        start: Temporal.ZonedDateTime.from('2024-06-11T03:00:00+00:00[UTC]'),
        end: Temporal.ZonedDateTime.from('2024-06-11T05:00:00+00:00[UTC]'),
      },
    ],
    selectedDate: Temporal.PlainDate.from('2024-06-11'),
    timezone: 'UTC',
    views: [viewWeek],
    plugins: [createEventModalPlugin(), createDragAndDropPlugin()]
  })
}
