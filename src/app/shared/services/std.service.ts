import { Injectable } from '@angular/core';
import { Istd } from '../model/std';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StdService {

  stdArray: Array<Istd> = [
    {
      fname: "Jhon",
      lname: "Doe",
      email: "jd@gmail.com",
      contact: 9834431845,
      id: "1"
    }
  ]

  editAndUpdStd$: Subject<Istd> = new Subject()
  constructor() {
  }

  fetchAllStds(): Array<Istd> {
    return this.stdArray;
  }

  addStd(std: Istd) {
    this.stdArray.push(std)
  }

  updateStd(updatedStd: Istd) {
    for (let i = 0; i < this.stdArray.length; i++) {
      if (this.stdArray[i].id === updatedStd.id) {
        this.stdArray[i] = updatedStd
      }
    }
  }

  removeStd(removeStd: Istd) {
    let getIndex = this.stdArray.findIndex(std => std.id === removeStd.id)
    this.stdArray.splice(getIndex, 1)
  }

}
