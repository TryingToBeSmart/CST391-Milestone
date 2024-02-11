// https://angular.io/guide/reactive-forms

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrl: './admin-create.component.css'
})
export class AdminCreateComponent {
  createForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      releaseDate: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      const newData = this.createForm.value;
      console.log(newData);

      // Call the API service to create new data
      this.apiService.createAllMedia(newData).subscribe(
        response => {
          console.log('Data created successfully. New ID:', response.id);
          // Optionally, you can redirect or perform other actions after successful creation.
        },
        error => {
          console.error('Error creating data:', error);
          // Handle error as needed
        }
      );
    }
  }
}
