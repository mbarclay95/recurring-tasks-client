import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Priority, Task} from 'src/app/interfaces/task.model';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarOutline} from "@fortawesome/free-regular-svg-icons";
import {TasksService} from "../../services/tasks/state/tasks.service";

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.scss']
})
export class TaskRowComponent implements OnInit {
  @Input() task: Task;
  @Output() editTask: EventEmitter<Task> = new EventEmitter<Task>();

  Priority = Priority;
  star = faStar;
  outlineStar = faStarOutline;

  constructor(
    public tasksService: TasksService,
  ) { }

  ngOnInit(): void {
  }

  completedTask(id: number, checked: boolean) {
    const completed = checked ? new Date() : null;
    this.tasksService.update(id, {completedAt: completed});
  }
}
