import { Repository } from './../models/Repository';
import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  repositories: Repository[];

  constructor(private _githubService: GithubService) { }

  ngOnInit(): void {
    this._githubService.getUserRepos().subscribe(
      repos => this.repositories = repos
    )
  }

}
