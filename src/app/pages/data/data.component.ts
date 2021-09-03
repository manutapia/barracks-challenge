import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  public token: string;

  constructor(private _authService: AuthService, private router: Router) {
    this.token = this._authService.getToken() as string;
  }

  ngOnInit(): void {}

  logout() {
    this._authService.logout().subscribe((ok) => {
      if (ok) {
        this.router.navigateByUrl('/');
      }
    });
  }
}
