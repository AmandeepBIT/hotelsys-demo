import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { PeriodicElement } from '../shared/components/basic-table/basic-table.component';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  private API_URL = 'https://my-json-server.typicode.com/AmandeepBIT/hotelsys-demo/tasks/data'
  constructor(public httpClient: HttpClient) { }

  public getReservationData(): Observable<any> {
    return this.httpClient.get(this.API_URL).pipe(
      tap((res) => console.log(res)),
      catchError((error) => error)
    );
  }

  public createReservationData(data: PeriodicElement): Observable<any> {
    return this.httpClient.post(this.API_URL, data).pipe(
      tap((res) => console.log(res)),
      catchError((error) => error)
    );
  }

  public updateReservationData(data: PeriodicElement): Observable<any> {
    return this.httpClient.put(`${this.API_URL}/${data.id}`, data).pipe(
      tap((res) => console.log(res)),
      catchError((error) => error)
    );
  }

  public deleteReservationData(id: string): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`).pipe(
      tap((res) => console.log(res)),
      catchError((error) => error)
    );
  }
}
