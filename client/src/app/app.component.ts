import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
    <header>
      <app-navbar> </app-navbar>
    </header>
    <section>
      <router-outlet></router-outlet>
    </section>
  </main>`,
  imports: [RouterModule, Navbar],
})
export class AppComponent {
  title = 'Real estate Angular Nest';
}
