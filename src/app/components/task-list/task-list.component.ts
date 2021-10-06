import {Component, OnInit} from '@angular/core';
import {TasksQuery} from '../../services/tasks/state/tasks.query';
import {Subject} from 'rxjs';
import {Task} from '../../interfaces/task.model';
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  openDrawer: Subject<Task> = new Subject<Task>();
  showCompleteTasks = false;

  down = faChevronDown;
  up = faChevronUp;

  constructor(
    public tasksQuery: TasksQuery,
  ) {
  }

  ngOnInit(): void {
  }
}
