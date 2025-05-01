import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PlayerComponent } from "./components/player/player.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'podcast-player';

  isTogglePlayer = signal(false);
}
