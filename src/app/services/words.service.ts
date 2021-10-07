import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Word } from '../interfaces/word.interface';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private http: HttpClient) { }

  private executeQuery<T>(query: string) {
    query = URL + query;
    return this.http.get<T>(query);
  }

  getWordsByCategory(id: string | number) {
    const query = `word/category/${id}`;
    return this.executeQuery<Word>(query);
  }

  getWord(id: string | number) {
    const query = `word/${id}`;
    return this.executeQuery<Word>(query);
  }
}
