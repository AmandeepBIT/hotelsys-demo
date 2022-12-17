import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationsService } from 'src/app/services/reservations.service';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';
import { Subscription } from 'rxjs';

export interface PeriodicElement {
  id: string;
  stay: {
    arrivalDate: string;
    departureDate: string;
  };
  room: {
    roomSize: string;
    roomQuantity: number;
  };
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressStreet: {
    streetName: string;
    streetNumber: string;
  };
  addressLocation: {
    zipCode: string;
    state: string;
    city: string;
  };
  extras: string[];
  payment: string;
  note: string;
  tags: string[];
  reminder: boolean;
  newsletter: boolean;
  confirm: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss'],
})
export class BasicTableComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'address',
    'location',
    'arrival',
    'departure',
    'edit',
    'delete',
  ];
  private subscription: Subscription
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(
    public reservationService: ReservationsService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getReservationData()
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getReservationData() {
    this.subscription = this.reservationService.getReservationData().subscribe((res) => (this.dataSource.data = res));
  }

  onEditClick(data: any) {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      height: '90%',
      width: '50%',
      data,
    });

    dialogRef.afterClosed().subscribe(() => { });
  }

  onDeleteClick(data: any) {
    this.reservationService
      .deleteReservationData(data.id)
      .subscribe((res) => {
        this.dialog.closeAll()
        this.getReservationData()
      });
  }

  applyFilter(filterValue: Event) {
    this.dataSource.filter = (filterValue.target as HTMLInputElement).value;
  }

  applyDateFilter($event) {
    this.dataSource.filterPredicate = (data) => {
      if (this.range.value.start && this.range.value.end) {
        return new Date(data.stay.arrivalDate) >= this.range.value.start && new Date(data.stay.arrivalDate) <= this.range.value.end;
      }
      return true;
    }
    this.dataSource.filter = '' + Math.random();

  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      height: '90%',
      width: '50%',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getReservationData()
    });
  }

  closePopup() {
    this.dialog.closeAll();
  }
}
