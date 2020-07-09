import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../dictionary.service";
import {Word} from "../word";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss']
})
export class DictionaryPageComponent implements OnInit {
  words: Word[];
  word: any;

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.words = this.dictionaryService.dictionary;
  }

  lookup(value: string) {
    this.word = this.dictionaryService.findByEnWord(value);
  }
}
