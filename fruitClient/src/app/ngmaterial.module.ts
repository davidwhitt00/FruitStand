import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatGridListModule,MatCardModule } from '@angular/material';

@NgModule({
    imports:[MatToolbarModule, MatGridListModule, MatCardModule],
    exports:[MatToolbarModule, MatGridListModule, MatCardModule]
})
export class NgMaterialModule {}