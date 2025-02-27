import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-word-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-display.component.html',
  styleUrl: './word-display.component.css',
})
export class WordDisplayComponent {
  @Input() word: string = '';
  @Input() definition: string | null = null;
}
