import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   userName: any;
   roleName: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userName=sessionStorage.getItem('USERNAME');
    if(sessionStorage.getItem('ACCESS_ROLE')==='1'){
      this.roleName="Administrator";
    }else if (sessionStorage.getItem('ACCESS_ROLE')==='2') {
      this.roleName="coordinator";
    }else if (sessionStorage.getItem('ACCESS_ROLE')==='3') {
      this.roleName="manager";

  }
}
  goHome() {
    console.log("Go Home");
    //Dashboard of Admin/Coordinator/Manager
  }
  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('');
    
  }

}
