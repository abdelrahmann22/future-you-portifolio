import { Component, Input } from '@angular/core';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  imports: [],
  templateUrl: './skill-bar.component.html',
  styleUrl: './skill-bar.component.css'
})
export class SkillBarComponent {
  @Input() skill!: Skill;
}
