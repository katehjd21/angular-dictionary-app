import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, DictionaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dictionary-app-angular';
}
