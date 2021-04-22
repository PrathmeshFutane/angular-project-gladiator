import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchByKeyword(keyword: string) {
    let url = "http://localhost:8282/search?keyword=" + keyword;
    return this.http.get(url);
  }

}
