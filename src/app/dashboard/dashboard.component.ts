import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:User;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.user=this.authService.user
  }

  onLogout(){
    this.authService.logout()
  }
}
