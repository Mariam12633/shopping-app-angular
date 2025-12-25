import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // on s'en servira pour le router

@Component({
  selector: 'app-root',           // tu peux garder ton selector actuel si tu veux
  standalone: true,               // 👈 OBLIGATOIRE avec bootstrapApplication
  imports: [RouterOutlet],        // pour pouvoir utiliser <router-outlet>
  templateUrl: './app-component.html',
  styleUrl: './app-component.css',
})
export class AppComponent {}

