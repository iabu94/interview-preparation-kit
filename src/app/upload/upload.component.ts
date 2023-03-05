import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  selectedFile!: File;
  downloadURL = '';
  key = '';
  progress$: Observable<number | undefined> = of(0);

  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {}

  upload() {
    if (this.selectedFile && this.key === 'Amayra@2022!') {
      const storageRef = this.storage.ref('data.json');
      const uploadTask = storageRef.put(this.selectedFile);
      this.progress$ = uploadTask.percentageChanges();
      uploadTask
        .snapshotChanges()
        .pipe(
          finalize(() => {
            storageRef.getDownloadURL().subscribe((url) => {
              this.downloadURL = url;
            });
          })
        )
        .subscribe();
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  setKey(event: any) {
    this.key = event.target.value;
  }
}
