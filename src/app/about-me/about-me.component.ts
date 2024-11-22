import { Component, Input } from '@angular/core';
import { Skill } from '../models/skill';
import { SkillBarComponent } from '../skill-bar/skill-bar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SkillBarComponent , CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  @Input() skills: Skill[] = [];
}
