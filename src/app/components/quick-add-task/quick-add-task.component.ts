import {Component, OnInit} from '@angular/core';
import {TasksService} from '../../services/tasks/state/tasks.service';
import {createTask, Priority} from '../../interfaces/task.model';

@Component({
  selector: 'app-quick-add-task',
  templateUrl: './quick-add-task.component.html',
  styleUrls: ['./quick-add-task.component.scss']
})
export class QuickAddTaskComponent implements OnInit {
  taskTitle = '';

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
  }

  async createTask(): Promise<void> {
    if (this.taskTitle === '') {
      return;
    }

    await this.tasksService.createNew(createTask({title: this.taskTitle, priority: Priority.Low}));
    this.taskTitle = '';
  }
}
