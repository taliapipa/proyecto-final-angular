import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public imageSrcList: string[] = [
    "https://www.mundodeportivo.com/alfabeta/hero/2019/08/pokemon.jpg?width=768&aspect_ratio=16:9&format=nowebp",
    "https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2021/12/10-curiosidades-de-Pokemon-que-quiza-no-conoces.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/pokemon-1671869502.jpg"
  ];
  public selectedImageIndex: number = 0;

  public changeImage() {
    this.selectedImageIndex = this.selectedImageIndex + 1;
    if (this.selectedImageIndex >= 3) {
      this.selectedImageIndex = 0;
    }
  }

  public restImage() {
    if (this.selectedImageIndex === 0) {
      this.selectedImageIndex = 3;
    } else {
      this.selectedImageIndex = (this.selectedImageIndex - 1) % 3;
    }
  }  
}

