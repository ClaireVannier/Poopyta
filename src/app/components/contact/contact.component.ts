import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('contactForm') contactForm!: ElementRef;

  ngOnInit() {
    // Initialiser EmailJS avec votre clé publique
    emailjs.init('qhlWHk1VPtRPNhbql');
  }

  sendEmail(event: Event) {
    event.preventDefault();
    emailjs.sendForm('service_fo1b36a', 'template_x2154ij', this.contactForm.nativeElement)
      .then((result: EmailJSResponseStatus) => {
        console.log('SUCCESS!', result.status, result.text);
      }, (error) => {
        console.error('FAILED...', error);
      });
  }
}
