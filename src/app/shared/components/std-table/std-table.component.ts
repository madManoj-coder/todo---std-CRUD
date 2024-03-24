import { Component, OnInit } from '@angular/core';
import { Istd } from '../../model/std';
import { StdService } from '../../services/std.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  stdArr !: Array<Istd>;
  stdFname !: string;
  stdLname !: string;

  constructor(
    private _stdService: StdService,
    private _snackbarService : SnackbarService
  ) { }

  ngOnInit(): void {
    this.stdArr = this._stdService.fetchAllStds()
  }

  onEdit(std: Istd) {
    this._stdService.editAndUpdStd$.next(std)
    console.log(std);
    
  }

  onDeleteStd(std: Istd) {
    let getConfirmation = confirm('Are you sure you want to delete !!!')
    if(getConfirmation){
      this._stdService.removeStd(std);
      this.stdFname = std.fname
      this.stdLname = std.lname
      this._snackbarService.openSnackBar(`${this.stdFname} ${this.stdLname} is removed successfully !!!`)
    }
  }

}
