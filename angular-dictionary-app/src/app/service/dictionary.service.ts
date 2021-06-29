import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {WORDS} from "../model/list-words";
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() { }


  getWords(): Observable<Word[]> {
    return of(WORDS);
  }
}
