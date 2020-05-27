import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';

import { User } from '../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user$: User;
  loading: boolean = true;

  constructor(private _githubService: GithubService) { }

  ngOnInit(): void {
    this._githubService.getUserData().subscribe(
      user => {
        this.user$ = user;
        this.loading = false;
      }
    );
  }

}
