import { LocalStorageService } from './../../../services/localstorage.service';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './login.html',
})
export class AppLogin {
  hide = signal(true);
  email = signal<string>('');
  password = signal<string>('');
  authService = inject(AuthService);
  localStorageService = inject(LocalStorageService);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  handleLogin() {
    this.authService.login(this.email(), this.password()).subscribe({
      next: (res: any) => {
        console.log(res);
        this.localStorageService.setItem('USER', res);
      },
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.localStorageService.getItem('USER'));
  }
}
