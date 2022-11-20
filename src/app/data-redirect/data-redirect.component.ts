import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-data-redirect',
  templateUrl: './data-redirect.component.html',
  styleUrls: ['./data-redirect.component.scss'],
  standalone: true,
})
export class DataRedirectComponent {
  constructor(private storage: AngularFireStorage) {
    this.storage
      .ref('data.json')
      .getDownloadURL()
      .subscribe((url) => {
        window.location.href = url;
      });
  }
}
