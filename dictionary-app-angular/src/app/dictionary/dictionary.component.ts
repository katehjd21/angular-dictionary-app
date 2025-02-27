import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-dictionary',
  imports: [SearchBarComponent],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.css',
})
export class DictionaryComponent {}
