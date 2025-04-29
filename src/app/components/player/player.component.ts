import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PlayerComponent {
  capa = "https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  podcastActive = false;
  countTimerPodcast = 0;
  intervalRef: any = null;


  play() {
    this.podcastActive = !this.podcastActive;


    this.intervalRef = setInterval(() => {
      this.countTimerPodcast += 1;

      if (this.countTimerPodcast > 60) {
        this.countTimerPodcast = 0;
        this.podcastActive = !this.podcastActive;
        clearInterval(this.intervalRef);
        return;
      }

      console.log(this.countTimerPodcast);
    }, 1000);
  }




}
