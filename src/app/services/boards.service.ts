import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Board } from '../models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  public boards : Board[] = [];


  constructor(private local : LocalStorageService) 
  {
    
  }

  public setBoard(data):void
  {
    this.boards.push(data);
    localStorage.setItem('boards',JSON.stringify(this.boards));
  }

  public getBoards():Board[]
  {
    return this.boards = JSON.parse(localStorage.getItem('boards'));
  }

  public getBoard(id : string)
  {
    return this.boards.find(board => board.id == id);
  }
}
