import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent],
  template: `
    <main>
      <header class="brand-mame">
        <h1>Fake Store</h1>
        <botton class="botton-home" routerLink="/"> Home </botton>
      </header>

      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}
