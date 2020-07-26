import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  // Fake API URL
  url: string = 'https://jsonplaceholder.typicode.com/users';
  usersData;
  searchText;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.url).subscribe((data) => {
      this.usersData = data;
      console.log(data);
    });
  }
}
