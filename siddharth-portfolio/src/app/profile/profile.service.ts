import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Java',
      'progress': '70%'
    },
    {
      'id': '2',
      'skill': 'Kotlin',
      'progress': '50%'
    },
    {
      'id': '3',
      'skill': 'Angular',
      'progress': '50%'
    },
    {
      'id': '4',
      'skill': 'DATA STRUCTURE',
      'progress': '70%'
    }
  ];

  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2008 - 2012',
      'education': 'Masters Degree',
      'stream': 'Computer Science',
      'institution': 'THE UNIVERSITY OF TEXAS AT DALLAS, DALLAS'
    },
    {
      'id': '2',
      'from_to_year': '2008 - 2012',
      'education': 'Bachelor\'s Degree',
      'stream': 'Computer Science and Engineering',
      'institution': 'VISVESWARAYA TECHNOLOGICAL UNIVERSITY, BANGALORE'
    }
  ];

  exprienceData: any = [
    {
      'id': '1',
      'from_to_month_year': 'JUNE 2018 - Current',
      'organization': 'BAIRD Milwaukee,WI',
      'designation': 'Software Engineer',
      'details': `Created fully functional projects for <strong>WittyFeed<\/strong>,
      A publisher Dashboard was created using <strong>Angular 6, CodeIgniter 3 , Rest API and JWT (Json Web Token).
      <\/strong> It involves multiple modules like Analytics, Stories, RSS Links, Payments.
      Another project was Influencer admin Dashboard which has features like app approval,
      app rejection in OneFeed(WittyFeed\u2019s personalised feed SDK) integrations.
      Lastly the admin dashboard for managing publishers for OneFeed.`
    },
    {
      'id': '2',
      'from_to_month_year': 'JUNE 2017 - NOVEMBER 2018',
      'organization': 'US Bank Minneapolis,MN',
      'designation': 'Software Engineer',
      'details': 'Designed the Official Website of the <strong>INDUSTRY CONCLAVE<\/strong>.'
    },
    {
      'id': '3',
      'from_to_month_year': 'JULY 2015 - MAY 2017',
      'organization': 'TMX Finance Dallas,TX',
      'designation': 'Java Software Engineer',
      'details': 'Developed the Official Website of the <strong>MITSVAH Literary Fest<\/strong>\r\nUnder <strong>Querencia CLUB<\/strong>.'
    },
    {
        'id': '4',
        'from_to_month_year': 'JUNE 2014 - AUGUST 2014',
        'organization': 'Vertical Optimization LLC Silver Spring, MD',
        'designation': 'App Development Intern',
        'details': 'Developed the Official Website of the <strong>MITSVAH Literary Fest<\/strong>\r\nUnder <strong>Querencia CLUB<\/strong>.'
    }, 
    {
        'id': '5',
        'from_to_month_year': 'JULY 2012 - JULY 2013',
        'organization': 'Tata Elxsi',
        'designation': 'Software Engineer',
        'details': 'Developed the Official Website of the <strong>MITSVAH Literary Fest<\/strong>\r\nUnder <strong>Querencia CLUB<\/strong>.'
    }
  ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
