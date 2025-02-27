import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DictionaryEntry } from './models/dictionary-entry.model';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private jsonUrl = 'assets/dictionary.json';

  constructor(private http: HttpClient) {}

  getDictionary(): Observable<DictionaryEntry> {
    return this.http.get<DictionaryEntry>(this.jsonUrl);
  }
}
