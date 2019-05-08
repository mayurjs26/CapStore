import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatPaginatorModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule

  ],
  exports:[
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule
  ],
  declarations: []
})
export class MaterialModule { }
