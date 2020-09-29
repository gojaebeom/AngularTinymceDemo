import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../../services/boards.service';
import { Board } from '../../../models/board';
import { Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public boards : Board[];

  constructor(
    public board : BoardsService,
    private router : Router
    ) { }

  ngOnInit(): void 
  {
    
    this.boards = this.board.getBoards();
    console.log(this.board);
    console.log(this.boards);
  }

  findById(id):void
  {
    this.router.navigateByUrl('list/'+id);
  }

}
