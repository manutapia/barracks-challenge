import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthCredentials } from 'src/app/interfaces/auth-credentials.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private _authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      mail: new FormControl('testdeveloper@barracks.gg'),
      password: new FormControl('testdeveloper'),
    });
  }

  ngOnInit(): void {}

  login() {
    this._authService
      .login(this.form.value as AuthCredentials)
      .subscribe((token: string) => {
        if (token === null) return;
        this._authService.saveToken(token).subscribe((ok: boolean) => {
          if (ok) {
            this.router.navigateByUrl('account/data');
          }
        });
      });
  }
}
