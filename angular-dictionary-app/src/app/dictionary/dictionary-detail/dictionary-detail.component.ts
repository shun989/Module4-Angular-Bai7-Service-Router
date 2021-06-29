import {Component, Input, OnInit} from '@angular/core';
import {Word} from "../../model/word";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  @Input() word?: Word;


  constructor() { }

  ngOnInit(): void {
  }


}
