import { Observable, of } from "rxjs"

export class ReservationsServiceMock {
    private API_URL = 'http://localhost:3000/data'

    public getReservationData(): Observable<boolean> {
        return of(true)
    }
}
