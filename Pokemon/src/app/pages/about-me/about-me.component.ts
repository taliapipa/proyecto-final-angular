import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  imageUrl: string = '../../../assets/IMG_4743 2.png';
  initialImageUrl: string = '../../../assets/IMG_4743 2.png';
  newImageUrl: string = '../../../assets/Captura de pantalla 2023-06-25 a las 22.11.21.png';

  changeImage() {
    this.imageUrl = this.newImageUrl;
  }

  resetImage() {
    this.imageUrl = this.initialImageUrl;
  }
}
