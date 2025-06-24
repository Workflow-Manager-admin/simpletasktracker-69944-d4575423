import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  /** Application title */
  readonly title = 'Task Tracker';

  /** Array of all current tasks being tracked */
  tasks: Task[] = [];

  /** The input value for the new task */
  newTaskText: string = '';

  // PUBLIC_INTERFACE
  /**
   * Add a new task to the task list.
   * Clears the input after a successful add.
   */
  addTask(): void {
    const text = this.newTaskText.trim();
    if (text) {
      this.tasks.unshift({
        id: Date.now() + Math.random(), // ensures uniqueness for demo
        text,
        completed: false,
      });
      this.newTaskText = '';
    }
  }

  // PUBLIC_INTERFACE
  /**
   * Toggle the completion state of a task.
   * @param task The task object to toggle
   */
  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
  }

  // PUBLIC_INTERFACE
  /**
   * Delete a task from the task list.
   * @param task The task object to delete
   */
  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  /**
   * trackBy function for better rendering performance
   */
  trackByTaskId(index: number, task: Task): number {
    return task.id;
  }
}

/** Simple Task model for use in the app */
export interface Task {
  id: number;
  text: string;
  completed: boolean;
}
