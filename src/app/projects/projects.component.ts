import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../models/project';
import { ProjectCardComponent } from '../project-card/project-card.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];
}
