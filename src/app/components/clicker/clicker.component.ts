import { Component, OnInit } from '@angular/core';
import {ClickerService} from '../../services/clicker.service';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {

  private clicker = {count: 0};
  constructor(private clickerService: ClickerService) { }

  ngOnInit() {
    this.getCount();
  }

  getCount() {
    this.clickerService.getCount().then(resp => {
      this.clicker = JSON.parse(resp._body);
      console.log(this.clicker.count);
    });
  }

}
