import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  enlargeImage(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    target.classList.add('footer-image');
  }

  resetImage(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    target.classList.remove('footer-image');
  }
}
