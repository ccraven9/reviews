import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  reviewsClicked() {
    console.log('Reviews Clicked!');
    this.router.navigateByUrl('/article-builder');
  }

  podcastClicked() {
    console.log('Podcast Clicked!');
    this.router.navigateByUrl('/podcast');
  }

  crewClicked() {
    console.log('Crew Clicked!');
    this.router.navigateByUrl('/the-crew');
  }

  logoClicked() {
    console.log('Crew Clicked!');
    this.router.navigateByUrl('/home');
  }

}
