import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Developer {

  id : number;
  name: string;
  seniority :string;
  dob: Date;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public devs: Developer[] = [];

  constructor(private httpClient: HttpClient) {
    this.getDevs();
  }

  private getDevs(): void {
    this.getDevelopers().subscribe(
      (response: Developer[]) => {
        this.devs = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getDevelopers(): Observable<Developer[]> {
    return this.httpClient.get<Developer[]>('http://localhost:1111/api/developer/');
  }
}