import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApodResponse } from '../interfaces/apod-response.interface';
import { Slide } from '../interfaces/slide.interface';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  get params() {
    return {
      api_key: '8huR7NQjSTf4DL0sJsTDhaPRZ9ouxCddCwQCTWfu',
    };
  }

  constructor(private http: HttpClient) {}

  getAPOD(count: number = 3): Observable<Slide[]> {
    const params = { ...this.params, count };
    return this.http
      .get<ApodResponse[]>(environment.APOD_URL_API, { params })
      .pipe(
        map((res) => {
          console.log('SERVICE: ', res);
          return res.map((item) => {
            return {
              title: `${item.title} / ${item.date}`,
              description: item.explanation,
              imgUrl: item.media_type === 'image' ? item.url : '',
            };
          });
        })
      );
  }
}
