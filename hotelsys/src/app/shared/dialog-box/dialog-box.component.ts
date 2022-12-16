import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent, MatChipList } from '@angular/material/chips';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ReservationsService } from 'src/app/services/reservations.service';
import { PeriodicElement } from '../components/basic-table/basic-table.component';

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {
  form!: FormGroup;
  Rooms = [
    { value: '0', viewValue: 'Business Suite' },
    { value: '1', viewValue: 'Business Suite' },
    { value: '2', viewValue: 'Business Suite' },
  ];

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  data: PeriodicElement | null = null;

  @ViewChild('chipList', { static: true }) chipList!: MatChipList;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  // tags: Tag[] = [{ name: 'hotel' }, { name: 'booking' }, { name: 'labtest' }];
  tags: Tag[] = [];

  constructor(
    private fb: FormBuilder,
    public reservationService: ReservationsService,
    @Inject(MAT_DIALOG_DATA) data: any,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    public dialog: MatDialog
  ) {
    // this.form = this.fb.group({
    //   stay: this.fb.group({
    //     arrivalDate: [null, Validators.required],
    //     departureDate: [null, Validators.required],
    //   }),
    //   room: this.fb.group({
    //     roomSize: [null, Validators.required],
    //     roomQuantity: [null, Validators.required],
    //   }),
    //   firstName: [null, Validators.required],
    //   lastName: [null, Validators.required],
    //   email: [null, Validators.compose([Validators.required, Validators.email])],
    //   phone: [null, Validators.required],
    //   addressStreet: this.fb.group({
    //     streetName: [null, Validators.required],
    //     streetNumber: [null, Validators.required],
    //   }),
    //   addressLocation: this.fb.group({
    //     city: [null, Validators.required],
    //     state: [null, Validators.required],
    //     zip: [null, Validators.required],
    //   }),
    //   extras: [[], Validators.required],
    //   payment: [null, Validators.required],
    //   note: [null, Validators.required],
    //   tags: [[], Validators.required],
    //   reminder: [false, Validators.required],
    //   newsletter: [false, Validators.required],
    //   confirm: [false, Validators.required],
    // });

    this.form = this.fb.group({
      stay: this.fb.group({
        arrivalDate: [null],
        departureDate: [null],
      }),
      room: this.fb.group({
        roomSize: [null],
        roomQuantity: [null],
      }),
      firstName: [null],
      lastName: [null],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      phone: [null],
      addressStreet: this.fb.group({
        streetName: [null],
        streetNumber: [null],
      }),
      addressLocation: this.fb.group({
        city: [null],
        state: [null],
        zipCode: [null],
      }),
      extras: [[]],
      payment: [null],
      note: [null],
      tags: [this.tags],
      reminder: [false],
      newsletter: [false],
      confirm: [false],
    });
    this.data = data;
    this.form.patchValue(data);
  }

  ngOnInit(): void { }

  onFormSubmit() {
    if (this.data?.id) {
      this.updateReservation()
      // this.reservationService
      //   .updateReservationData(this.form.value)
      //   .subscribe((res) => this.dialogRef.close());
    } else {
      this.createReservation()
      // this.reservationService.createReservationData(this.form.value)
      //   .subscribe(
      //     () => this.dialogRef.close(),
      //     () => this.dialogRef.close()
      //   );
    }
  }

  updateReservation() {
    this.reservationService
      .updateReservationData(this.form.value)
      .subscribe((res) => this.dialogRef.close());
  }

  createReservation() {
    this.reservationService.createReservationData(this.form.value)
      .subscribe(
        () => this.dialogRef.close(),
        // () => this.dialogRef.close()
      );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push({ name: value });
    }
    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  closePopup() {
    this.dialogRef.close();
  }
}
