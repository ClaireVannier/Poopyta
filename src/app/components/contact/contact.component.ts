import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importation du module de routage
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

  constructor(private router: Router) { } // Injection du service de routage

  ngOnInit() {
    // Initialiser EmailJS avec votre clé publique
    emailjs.init('qhlWHk1VPtRPNhbql');
  }

  sendEmail(event: Event) {
    event.preventDefault();
    emailjs.sendForm('service_fo1b36a', 'template_x2154ij', this.contactForm.nativeElement)
      .then((result: EmailJSResponseStatus) => {
        console.log('SUCCESS!', result.status, result.text);
        alert('Votre message a bien été envoyé');
        this.router.navigate(['/gallery']); // Redirection vers la page /gallery
      }, (error) => {
        console.error('FAILED...', error);
        alert('L\'envoi du message a échoué, veuillez réessayer.');
      });
  }
}
