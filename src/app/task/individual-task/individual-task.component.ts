import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type IndividualTask } from './individual-task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../task.service';

@Component({
  selector: 'app-individual-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './individual-task.component.html',
  styleUrl: './individual-task.component.css'
})

export class IndividualTaskComponent {
  @Input({ required: true }) task!: IndividualTask;

  constructor(private taskService: TaskService) {}

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
