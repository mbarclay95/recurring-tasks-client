import { Component, OnInit } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Subject} from "rxjs";
import {createRecurringTask, RecurringTask} from "../../interfaces/recurring-task.model";
import {Task} from "../../interfaces/task.model";

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {
  openRecurringDrawer: Subject<RecurringTask> = new Subject<RecurringTask>();
  openTaskDrawer: Subject<Task> = new Subject<Task>();
  add = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

  createNewRecurringTask() {
    this.openRecurringDrawer.next(createRecurringTask({}));
  }

}
