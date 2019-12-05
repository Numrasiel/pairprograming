import { Injectable } from '@angular/core';
import { CONSTANTS } from '../constants';
import { isArray, isString } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }


  countNumberOfStringsRec(elements: any): number {
    let stringCount: number = 0;
    if (elements != undefined && isArray(elements)) {
      for (let element of elements) {
        stringCount += this.countNumberOfStringsRec(element);
      }
    }
    else if (elements != undefined && isString(elements)) {
      return 1;
    }
    return stringCount;
  }

  countNumberOfWords(elements: any): number {
    let stringCount: number = 0;
    if (elements != undefined && isArray(elements)) {
      for (let element of elements) {
        stringCount += this.countNumberOfWords(element);
      }
    }
    else if (elements != undefined && isString(elements)) {
      let count = elements.split(" ").filter(w => w.length > 0).length;
      let a=elements.split(" ");
      let b=a.filter(w => w.length > 0);
      let c=b.length;
      return count;
    }
    return stringCount;
  }

  countNumberOfSpaces(elements: any): number {
    let stringCount: number = 0;
    if (elements != undefined && isArray(elements)) {
      for (let element of elements) {
        stringCount += this.countNumberOfSpaces(element);
      }
    }
    else if (elements != undefined && isString(elements)) {
      return elements.split(" ").length - 1;
    }
    return stringCount;
  }

}
