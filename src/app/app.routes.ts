import { Routes } from '@angular/router'

import { SongComponent } from './band/song/song.component'

import { HomeComponent } from './home/home.component'
import { MoreComponent } from './more/more.component'
import { ProjectComponent } from './project/project.component'

export const ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: ":id/song", component: SongComponent},
  {path: "more", component: MoreComponent},
  {path: "project", component: ProjectComponent}
]
