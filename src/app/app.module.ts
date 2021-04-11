import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoreComponent } from './more/more.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ProjectComponent } from './project/project.component';
import { BandComponent } from './band/band.component';
import { SongComponent } from './band/song/song.component';

// Sempre que for criado um service, é necessario importa-lo junto com o HttpClientModule
import { BandService } from './band/band.service';
import { HttpClientModule } from '@angular/common/http';
import { SongService } from './band/song/song.service';
import { ProjectService } from './project/project.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoreComponent,
    HomeComponent,
    ProjectComponent,
    BandComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // IMPORTAR O HttpClientModule, para que o service possa utiliza-lo
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [BandService, SongService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
