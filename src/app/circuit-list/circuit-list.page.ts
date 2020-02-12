import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-circuit-list',
  templateUrl: './circuit-list.page.html',
  styleUrls: ['./circuit-list.page.scss'],
})
export class CircuitListPage implements OnInit {

  map: any;

  constructor( private route: Router) { }

  onDescription() {
    this.route.navigateByUrl('map');
  }

  ngOnInit(): void {
  }


}
