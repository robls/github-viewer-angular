import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './models/User';
import { Observable } from 'rxjs';
import { Repository } from './models/Repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly githubAPI: string = 'https://api.github.com/users/robls'

  constructor(private http: HttpClient) { }

  getUserData(): Observable<User> {
    return this.http.get<User>(this.githubAPI);
  }

  getUserRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.githubAPI}/repos`);
  }
}
