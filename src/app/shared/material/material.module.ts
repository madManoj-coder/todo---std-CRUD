import { NgModule } from "@angular/core";
import {MatButtonModule} from "@angular/material/button"
import {MatSnackBarModule} from "@angular/material/snack-bar"
import {MatCardModule} from "@angular/material/card"
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations : [],
    exports : [
        MatCardModule,
        MatSnackBarModule,
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule
    ],
    imports : [
        MatCardModule,
        MatSnackBarModule,
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule
    ]
})
export class MaterialModule {

}