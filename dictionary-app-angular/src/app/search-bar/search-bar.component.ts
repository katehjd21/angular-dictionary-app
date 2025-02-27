import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DictionaryService } from '../dictionary.service';
import { DictionaryEntry } from '../models/dictionary-entry.model';
import { WordDisplayComponent } from '../word-display/word-display.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, WordDisplayComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit {
  searchTerm: string = ''; // Holds the user’s search input
  dictionary: DictionaryEntry = {}; // Stores the dictionary data
  definition: string | null = null; // Stores the search result (definition)
  searchInput: string = '';

  constructor(private dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    this.dictionaryService
      .getDictionary()
      .subscribe((data: DictionaryEntry) => {
        this.dictionary = data;
      });
  }

  searchWord() {
    this.searchInput = this.searchTerm;
    const word = this.searchTerm.toUpperCase();
    this.definition = this.dictionary[word] || 'Word not found.';
    this.searchTerm = '';
  }
}
