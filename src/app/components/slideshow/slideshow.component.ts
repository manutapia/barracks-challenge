import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { Slide } from 'src/app/interfaces/slide.interface';

declare var Swiper: any;

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() slides: Slide[] = [];

  swiper: any;
  private interval: ReturnType<typeof setInterval>;

  constructor() {
    this.interval = setInterval(() => {
      this.onSlideNext();
    }, 5000);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  onSlidePrev() {
    this.swiper.slidePrev();
  }
  onSlideNext() {
    this.swiper.slideNext();
  }
}
