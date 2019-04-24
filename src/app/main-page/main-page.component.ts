import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  youtubeUrl = 'https://www.youtube.com/watch?v=a3GaiAQAgQc';

  config: SwiperOptions = {
    autoplay: 3000, // Autoplay option having value in milliseconds
    initialSlide: 3, // Slide Index Starting from 0
    slidesPerView: 3, // Slides Visible in Single View Default is 1
    pagination: '.swiper-pagination', // Pagination Class defined
    paginationClickable: true, // Making pagination dots clicable
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev', // Class for prev button
    spaceBetween: 30 // Space between each Item
  };

  iframeHtml: any;
  constructor(
    private embedService: EmbedVideoService
  ) {
    this.iframeHtml = this.embedService.embed(this.youtubeUrl, {
      query: { portrait: 0, color: '333' },
      attr: { width: 400, height: 290 }
    });
  }

  ngOnInit() {
  }


}
