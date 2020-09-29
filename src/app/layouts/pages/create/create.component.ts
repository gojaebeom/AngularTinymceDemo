import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board';
import { BoardsService } from '../../../services/boards.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public title : string;
  public board : Board = new Board();

  constructor(
    private boardService : BoardsService
    ) { }

  ngOnInit(): void {
  }

  public handleEvent(data):void
  {
    console.log(data.event.path[0].body.innerHTML);
    this.board.content = data.event.path[0].body.innerHTML;
  }

  public setBoard():void
  {
    this.boardService.setBoard(this.board);
    console.log('저장완료!');
  }

}
