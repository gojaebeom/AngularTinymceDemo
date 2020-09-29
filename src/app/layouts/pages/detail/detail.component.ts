import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardsService } from '../../../services/boards.service';
import { Board } from '../../../models/board';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public board:Board = new Board();

  constructor(
    private service:BoardsService,
    private route:ActivatedRoute
  ) { }

  ngOnInit():void 
  {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    console.log(this.board);
    this.board = this.service.getBoard(id);
  }

  

}
