import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/interfaces/slide.interface';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css'],
})
export class NasaComponent implements OnInit {
  apodSlides: Slide[] = [];

  constructor(private _nasaService: NasaService) {}

  ngOnInit(): void {
    this._nasaService.getAPOD().subscribe((apodSlides) => {
      this.apodSlides = apodSlides;
    });
  }
}
