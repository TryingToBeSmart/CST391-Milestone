import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AllMedia } from '../models/all-media.model';
import { ApiService } from '../service/api.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrl: './admin-edit.component.css'
})
export class AdminEditComponent {
  editForm!: FormGroup;
  selectedMedia: AllMedia | null = null;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onMediaSelected(media: AllMedia): void {
    // Assign the selected media item to the property
    this.selectedMedia = media;
    this.createForm();
  }

  createForm(): void {
    if (this.selectedMedia) {
      this.editForm = this.fb.group({
        id: [this.selectedMedia?.id, Validators.required],
        title: [this.selectedMedia?.title, Validators.required],
        type: [this.selectedMedia?.type, Validators.required],
        releaseDate: [formatDate(this.selectedMedia?.releaseDate, 'yyyy-MM-dd', 'en'), [Validators.required]],
      });
    }
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const editedData: AllMedia = this.editForm.value;
      console.log(editedData);

      // Call the API service to update the data
      this.apiService.editAllMedia(editedData).subscribe(
        response => {
          console.log('Data updated successfully. New ID:', response.id);
        },
        error => {
          console.error('Error updating data:', error);
          // Handle error as needed
        }
      );
    }
  }

  // private formatDateForForm(date: Date): string {
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //   const day = date.getDate().toString().padStart(2, '0');
  //   const year = date.getFullYear();

  //   return `${month}/${day}/${year}`;
  // }

  // private formatDateForApi(dateString: string): Date {
  //   // Convert the formatted string to a Date object
  //   const [month, day, year] = dateString.split('/');
  //   return new Date(`${year}-${month}-${day}`);
  // }
}
