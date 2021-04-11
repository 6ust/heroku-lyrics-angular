import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service'

@Component({
  selector: 'lyrics-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

  project: Project[]

  constructor(private projectService: ProjectService) {
    this.project = []
   }

  ngOnInit(): void {
    this.projectService.projects().subscribe(projects => this.project = projects)
  }

}
