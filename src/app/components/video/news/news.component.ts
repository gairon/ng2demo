import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { News } from '../model/news.model';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }

}
