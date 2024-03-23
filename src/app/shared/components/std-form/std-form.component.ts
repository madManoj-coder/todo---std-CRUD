import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { StdService } from '../../services/std.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Istd } from '../../model/std';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  stdForm !: FormGroup;
  isInEditMode : boolean = false;
  constructor(
    private _uuidService: UuidService,
    private _stdService: StdService,
    private _snackBarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.createStdForm();
  }

  createStdForm() {
    this.stdForm = new FormGroup({
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      contact: new FormControl(null, [Validators.required])
    })
  }

  onAddStd() {
    if (this.stdForm.valid) {
      let stdObj = { ...this.stdForm.value, id: this._uuidService.generateUUID() }
      console.log(stdObj);
      this._stdService.stdSubject$.next(stdObj)
      this.stdForm.reset()
      this._snackBarService.openSnackBar(`New student ${stdObj.fname} ${stdObj.lname} is added successfully !!!`)
    }
  }

  onUpdateStd() {
  }

}
