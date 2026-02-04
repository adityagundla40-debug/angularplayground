import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Studentform } from './studentform/studentform';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Studentform],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('playground');
}
