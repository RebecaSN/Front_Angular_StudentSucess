import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }
 
  logout():void{
    this.router.navigate(['login'])
    this.authService.logout();
  }

}
