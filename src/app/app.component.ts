import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from "./hero/hero.component";
import { SkillBarComponent } from './skill-bar/skill-bar.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Project } from './models/project';
import { Skill } from './models/skill';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    HeroComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
]
})
export class AppComponent {
  title = 'Future You Portfolio';

  navLinks = ['About', 'Projects', 'Contact'];

  skills: Skill[] = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Responsive Design', level: 90 }
  ];

  projects: Project[] = [
    {
      title: 'E-commerce Dashboard',
      description: 'Angular-based admin dashboard with real-time data visualization',
      tags: ['Angular', 'Bootstrap', 'TypeScript']
    },
    {
      title: 'Weather App',
      description: 'Weather forecast application with location-based services',
      tags: ['JavaScript', 'API Integration', 'Bootstrap']
    },
    {
      title: 'Task Manager',
      description: 'Responsive task management system with drag-and-drop features',
      tags: ['Angular', 'TypeScript', 'Bootstrap']
    }
  ];
}
