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
  isInEditMode: boolean = false;
  isEditStd !: Istd;

  constructor(
    private _uuidService: UuidService,
    private _stdService: StdService,
    private _snackBarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.createStdForm();
    this._stdService.editAndUpdStd$
      .subscribe(res => {
          this.isEditStd = res;
          this.isInEditMode = true;
          this.stdForm.patchValue(res);
      })
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
      this._stdService.addStd(stdObj)
      this.stdForm.reset()
      this._snackBarService.openSnackBar(`New student ${stdObj.fname} ${stdObj.lname} is added successfully !!!`)
    }
  }

  onUpdateStd() {
    if (this.stdForm.valid) {
      let updatedStd = { ...this.stdForm.value, id : this.isEditStd.id}
      this._stdService.updateStd(updatedStd);
      this.stdForm.reset();
      this.isInEditMode = false;
      this._snackBarService.openSnackBar(`Student ${updatedStd.fname} ${updatedStd.lname} is updated successfully !!!`)
    }
  }

}
