import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RandomUserModel } from '../models/random-user.model';
import { UserModel } from '../models/user.model';
import { ActiveTab } from '../types/active-tab.type';

@Component({
  selector: 'sxt-user-profile',
  templateUrl: './user-profile.component.html',
  host: {
    '[class.flex-col]': 'true',
    '[class.flex-extend]': 'true'
  } 
})
export class UserProfileComponent implements OnInit {

  private readonly apiUrl = environment.apiUrl + 'api/';

  user: UserModel = null;
  
  readonly tabs: ActiveTab[]  = [
    'name',
    'email',
    'birthday',
    'address',
    'phone',
    'password'
  ];

  activeTab: ActiveTab = 'name';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this._loadUser();
  }

  onActivateTab(tab: ActiveTab): void {
    console.log('activeTab=' + tab);
    this.activeTab = tab;
  }

  private _loadUser(): void {
    this.http.get<RandomUserModel>(this.apiUrl, {
       headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})}).subscribe(
      (response) => {
        console.log('User: ', response);
        if (response && response.results) {
          this.user = response.results[0];
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}