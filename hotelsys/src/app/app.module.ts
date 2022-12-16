import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicTableComponent } from './shared/components/basic-table/basic-table.component';
import { DatePickerComponent } from './shared/components/date-picker/date-picker.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { DialogBoxComponent } from './shared/dialog-box/dialog-box.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    DatePickerComponent,
    SearchBarComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatDialogModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule { }
