import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WelcomeComponent } from "../../home/welcome/welcome.component";
import { DescriptionComponent } from "../../home/description/description.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { TestimonialsComponent } from "../../home/testimonials/testimonials.component";
import { CallToActionComponent } from "../../home/call-to-action/call-to-action.component";
import { TattosComponent } from "../../home/tattos/tattos.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RouterLink, RouterOutlet, WelcomeComponent, DescriptionComponent, GalleryComponent, TestimonialsComponent, CallToActionComponent, TattosComponent]
})
export class HomeComponent {

}
