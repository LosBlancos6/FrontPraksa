import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigateByUrl('home')
  }

  goLogin() {
    this.router.navigateByUrl('login')
  }

  goData(){
    this.router.navigateByUrl('data')
  }

  goMap(){
    this.router.navigateByUrl('map')
  }

  goReports(){
    this.router.navigateByUrl('reports')
  }
}
