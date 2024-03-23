import { Component, OnInit } from '@angular/core';
import { Istd } from '../../model/std';
import { StdService } from '../../services/std.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  stdArr !: Array<Istd>;
  constructor(
    private _stdService: StdService
  ) { }

  ngOnInit(): void {
    this.stdArr = this._stdService.fetchAllStds()
  }

  onEdit(std: Istd) {
    console.log(std);
  }

}
