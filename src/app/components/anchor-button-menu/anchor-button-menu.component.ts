import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {createRecurringTask, RecurringTask} from '../../interfaces/recurring-task.model';
import {createTask, Priority, Task} from '../../interfaces/task.model';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-anchor-button-menu',
  templateUrl: './anchor-button-menu.component.html',
  styleUrls: ['./anchor-button-menu.component.scss']
})
export class AnchorButtonMenuComponent implements OnInit {
  openRecurringDrawer: Subject<RecurringTask> = new Subject<RecurringTask>();
  openTaskDrawer: Subject<Task> = new Subject<Task>();
  add = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

  createNewTask(): void {
    const task = createTask({priority: Priority.Low});
    task.scheduledAt = new Date();
    this.openTaskDrawer.next(task);
  }

  createNewRecurringTask(): void {
    this.openRecurringDrawer.next(createRecurringTask({priority: Priority.Low}));
  }
}
