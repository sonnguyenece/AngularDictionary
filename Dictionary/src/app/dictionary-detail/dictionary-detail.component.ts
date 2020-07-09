import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryService} from "../dictionary.service";
import {Subscription} from "rxjs";
import {Word} from "../word";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit,OnDestroy {
  sub: Subscription;
   word: Word;

  constructor(
    private activatedRouter: ActivatedRoute,
private dictionaryService: DictionaryService
  ) { }

  ngOnInit(): void {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.word = this.dictionaryService.find(id);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();

  }

}
