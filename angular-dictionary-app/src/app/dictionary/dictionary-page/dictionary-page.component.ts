import { Component, OnInit } from '@angular/core';
import {Word} from "../../model/word";
import {DictionaryService} from "../../service/dictionary.service";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  words: Word[] = [];

  selectedWord?: Word;

  constructor(private  dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.getWords();
  }

  onSelect(word: Word): void {
    this.selectedWord = word;
  }

  getWords(): void {
    this.dictionaryService.getWords()
      .subscribe((words: Word[]) => this.words = words);
  }
}
