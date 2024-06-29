import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class ContactComponent {
  selectedFiles: File[] = [];

  constructor() {}

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.selectedFiles = Array.from(event.target.files);
    }
  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      // Here you can handle the form submission.
      // For now, we'll just log the form values and files to the console.
      console.log('Form values:', contactForm.value);
      console.log('Selected files:', this.selectedFiles);
      alert('Form submitted successfully!');
      contactForm.reset();
      this.selectedFiles = [];
    }
  }
}
