import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GipserService } from '../gipser.service';

@Component({
  selector: 'app-gipimg',
  templateUrl: './gipimg.component.html',
  styleUrls: ['./gipimg.component.css']
})
export class GipimgComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gifsService: GipserService) { }
  q: string;
  gifs: any = [];

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.q = params['q'];

      this.gifsService.getGifs(this.q).subscribe(gifs => {
        console.log(gifs);
        this.gifs = gifs;
      });
    });
  }

}