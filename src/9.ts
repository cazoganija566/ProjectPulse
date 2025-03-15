import { Component } from '@angular/core';

@Component({
  selector: 'app-project-pulse',
  templateUrl: './project-pulse.component.html',
  styleUrls: ['./project-pulse.component.css']
})
export class ProjectPulseComponent {
  projects = [
    { id: 1, name: 'Project 1', status: 'active' },
    { id: 2, name: 'Project 2', status: 'inactive' },
    { id: 3, name: 'Project 3', status: 'active' }
  ];

  deleteProject(id) {
    this.projects = this.projects.filter(project => project.id !== id);
  }
}