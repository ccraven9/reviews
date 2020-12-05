import { ArticleBuilderFormComponent } from './components/article-builder-form/article-builder-form.component';
import { WebContainerComponent } from './web-container/web-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CrewComponent } from './components/crew/crew.component';
import { PodcastComponent } from './components/podcast/podcast.component'

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'article-builder', component: ArticleBuilderFormComponent },
  { path: 'the-crew', component: CrewComponent },
  { path: 'podcast', component: PodcastComponent }];

@NgModule({
  declarations: [HomeComponent,
    WebContainerComponent,
    HeaderComponent,
    ArticleBuilderFormComponent,
    CrewComponent,
    PodcastComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    MatCardModule,
    MatInputModule
  ],
  exports: [RouterModule, WebContainerComponent]

})
export class BroBeansModule { }
