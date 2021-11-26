import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActiveTab } from '../types/active-tab.type';

@Component({
  selector: 'sxt-hover-button',
  template: `
    <button class="sxt-hover-button"
            (mouseenter)="onActivateTab()"
            [ngClass]="{'selected': selected}"
    >
        <div class="arrow-up" *ngIf="selected"></div>
        <em class="sxt-hover-button-icon {{tabIcon}}"></em>
    </button>
  `
})
export class HoverButtonComponent implements OnInit {

  private _tab: ActiveTab = null;

  tabIcon: string = null;

  get tab(): ActiveTab {
    return this._tab;
  }

  // Set button as selected
  @Input() selected: boolean = false;

  // Set specific tab
  @Input() set tab(tab: ActiveTab) {
    this._tab = tab;
    this._mapIcon();
  }

  // On mouse hover, emit tab name
  @Output() activate: EventEmitter<ActiveTab> = new EventEmitter<ActiveTab>();

  constructor() { }

  ngOnInit() {}

  onActivateTab(): void {
    this.activate.emit(this._tab);
  }

  // map specific icon by tab name 
  private _mapIcon(): void {
      switch (this._tab) {
        case 'name':
          this.tabIcon = 'far fa-user';
          break;
        case 'email':
          this.tabIcon = 'fas fa-at';
          break;
        case 'birthday':
          this.tabIcon = 'fas fa-birthday-cake';
          break;
        case 'address':
          this.tabIcon = 'fas fa-map-marked-alt';
          break;
        case 'phone':
          this.tabIcon = 'fas fa-phone';
          break;
        case 'password':
          this.tabIcon = 'fas fa-unlock-alt';
          break;
        default:
          break;
      }
  }
}
