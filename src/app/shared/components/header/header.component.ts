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
    this.router.navigateByUrl('app/home')
  }

  goLogin() {
    this.router.navigateByUrl('auth/login')
  }

  goData(){
    this.router.navigateByUrl('app/data')
  }

  goMap(){
    this.router.navigateByUrl('app/map')
  }

  goReports(){
    this.router.navigateByUrl('app/reports')
  }
}
