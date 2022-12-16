import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DialogBoxComponent } from './dialog-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('DialogBoxComponent', () => {
  let component: DialogBoxComponent;
  let fixture: ComponentFixture<DialogBoxComponent>;
  let matDialogService: jasmine.SpyObj<MatDialog>;
  matDialogService = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogBoxComponent],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
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
      providers: [
        {
          provide: MatDialog,
          useValue: matDialogService,
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create new reservation if form is valid', () => {
    component.form.setValue({
      // id: '1',
      stay: {
        arrivalDate: '2021-11-18T05:00:00.000Z',
        departureDate: '2021-11-25T05:00:00.000Z',
      },
      room: {
        roomSize: 'business-suite',
        roomQuantity: 3,
      },
      firstName: 'IDM',
      lastName: 'ENG',
      email: 'idm.test@idm.com',
      phone: '9999999999',
      addressStreet: {
        streetName: 'IDM Street',
        streetNumber: '1234',
      },
      addressLocation: {
        zipCode: '123456',
        state: 'Arizona',
        city: 'OAKVILLE',
      },
      extras: [
        'extraBreakfast',
        'extraTV',
        'extraWiFi',
        'extraParking',
        'extraBalcony',
      ],
      payment: 'cc',
      note: 'idm lab test',
      tags: ['hotel', 'booking', 'labtest'],
      reminder: true,
      newsletter: true,
      confirm: false,
    });
    spyOn(component, 'createReservation')
    component.onFormSubmit();
    expect(
      component.createReservation
    ).toHaveBeenCalled();
  });

  it('should not call api if form is not valid', () => {
    component.form.setValue({
      // id: '1',
      stay: {
        arrivalDate: '2021-11-18T05:00:00.000Z',
        departureDate: '2021-11-25T05:00:00.000Z',
      },
      room: {
        roomSize: 'business-suite',
        roomQuantity: 3,
      },
      firstName: 'IDM',
      lastName: 'ENG',
      email: 'idm.test@idm.com',
      phone: '9999999999',
      addressStreet: {
        streetName: 'IDM Street',
        streetNumber: '1234',
      },
      addressLocation: {
        zipCode: '123456',
        state: 'Arizona',
        city: 'OAKVILLE',
      },
      extras: [
        'extraBreakfast',
        'extraTV',
        'extraWiFi',
        'extraParking',
        'extraBalcony',
      ],
      payment: 'cc',
      note: 'idm lab test',
      tags: ['hotel', 'booking', 'labtest'],
      reminder: true,
      newsletter: true,
      confirm: false,
    });
    spyOn(component, 'updateReservation')
    component.onFormSubmit();
    expect(
      component.updateReservation
    ).not.toHaveBeenCalled();
  });

  // it('should call update api', () => {
  //   component.form.setValue({
  //     // id: '1',
  //     stay: {
  //       arrivalDate: '2021-11-18T05:00:00.000Z',
  //       departureDate: '2021-11-25T05:00:00.000Z',
  //     },
  //     room: {
  //       roomSize: 'business-suite',
  //       roomQuantity: 3,
  //     },
  //     firstName: 'IDM',
  //     lastName: 'ENG',
  //     email: 'idm.test@idm.com',
  //     phone: '9999999999',
  //     addressStreet: {
  //       streetName: 'IDM Street',
  //       streetNumber: '1234',
  //     },
  //     addressLocation: {
  //       zipCode: '123456',
  //       state: 'Arizona',
  //       city: 'OAKVILLE',
  //     },
  //     extras: [
  //       'extraBreakfast',
  //       'extraTV',
  //       'extraWiFi',
  //       'extraParking',
  //       'extraBalcony',
  //     ],
  //     payment: 'cc',
  //     note: 'idm lab test',
  //     tags: ['hotel', 'booking', 'labtest'],
  //     reminder: true,
  //     newsletter: true,
  //     confirm: false,
  //   });
  //   spyOn(component, 'updateReservation')
  //   component.onFormSubmit();
  //   expect(
  //     component.updateReservation
  //   ).not.toHaveBeenCalled();
  // });

  // it('should call create api', () => {
  //   component.form.setValue({
  //     // id: '1',
  //     stay: {
  //       arrivalDate: '2021-11-18T05:00:00.000Z',
  //       departureDate: '2021-11-25T05:00:00.000Z',
  //     },
  //     room: {
  //       roomSize: 'business-suite',
  //       roomQuantity: 3,
  //     },
  //     firstName: 'IDM',
  //     lastName: 'ENG',
  //     email: 'idm.test@idm.com',
  //     phone: '9999999999',
  //     addressStreet: {
  //       streetName: 'IDM Street',
  //       streetNumber: '1234',
  //     },
  //     addressLocation: {
  //       zipCode: '123456',
  //       state: 'Arizona',
  //       city: 'OAKVILLE',
  //     },
  //     extras: [
  //       'extraBreakfast',
  //       'extraTV',
  //       'extraWiFi',
  //       'extraParking',
  //       'extraBalcony',
  //     ],
  //     payment: 'cc',
  //     note: 'idm lab test',
  //     tags: ['hotel', 'booking', 'labtest'],
  //     reminder: true,
  //     newsletter: true,
  //     confirm: false,
  //   });
  //   spyOn(component, 'updateReservation')
  //   component.onFormSubmit();
  //   expect(
  //     component.updateReservation
  //   ).not.toHaveBeenCalled();
  // });
});
