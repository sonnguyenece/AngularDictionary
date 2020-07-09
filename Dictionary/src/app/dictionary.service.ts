import {Injectable} from '@angular/core';
import {Word} from "./word";

let i: number = 0;

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() {
  }

  private _dictionary: Word[] = [
    {
      id: i++,
      enWord: "mom",
      vnWord: "mẹ"
    },
    {
      id: i++,
      enWord: "dad",
      vnWord: "bố"
    },
    {
      id: i++,
      enWord: "son",
      vnWord: "con trai"
    },
    {
      id: i++,
      enWord: "daughter",
      vnWord: "con gái"
    },
    {
      id: i++,
      enWord: "baby",
      vnWord: "em bé"
    }];


  get dictionary(): Word[] {
    return this._dictionary;
  }

  set dictionary(value: Word[]) {
    this._dictionary = value;
  }

  find(id: string) {
    return this._dictionary.find(item => item.id === parseInt(id));
  }

  findByEnWord(value: string) {
for (let word of this._dictionary){
  if (word.enWord===value){
    return word.vnWord;
  }
}
    return "not found";
  }
}
