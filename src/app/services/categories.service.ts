import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Category } from '../interfaces/category.interface';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  private executeQuery<T>(query: string) {
    query = URL + query;
    return this.http.get<T>(query);
  }

  getCategory() {
    const query = 'category';
    return this.executeQuery<Category>(query);
  }
}