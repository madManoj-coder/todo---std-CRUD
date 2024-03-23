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


  stdSubject$: Subject<Istd> = new Subject()
  stdEditAndUpdate$: Subject<Istd> = new Subject()

  constructor() {
    this.stdSubject$
      .subscribe(std => {
        console.log(std);
        this.stdArray.push(std)
      })

    this.stdEditAndUpdate$
      .subscribe(updateStd => {
        console.log();
        for (let i = 0; i < this.stdArray.length; i++) {
          if (this.stdArray[i].id === updateStd.id) {
            this.stdArray[i] = updateStd
          }
        }
      })
  }

  fetchAllStds(): Array<Istd> {
    return this.stdArray;
  }

  // onEditAndUpd(updateStd: Istd) {

  // }
}
