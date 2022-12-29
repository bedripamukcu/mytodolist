import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';
import { DoneModel } from 'src/app/models/doneModel';
import { UnDoneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrls: ['./undone.component.scss']
})
export class UndoneComponent implements OnInit {

  @Input() unDoneModels:UnDoneModel[];
  @Input() doneModels:DoneModel[];

  constructor() {
    //console.log("constructor çalıştı");
   }

  ngOnInit(): void {
    //console.log("ngOnInit çalıştı");
  }

  ngOnChanges(){
    //console.log("ngOnChanges çalıştı");
  }

  ngDoCheck(){
    //console.log("ngDoCheck çalıştı");
  }

  ngAfterViewInit(){
    //console.log("ngAfterViewInit çalıştı");
  }

  ngAfterViewChecked(){
    //console.log("undone component: " + this.addInput);
    //console.log("ngAfterViewChecked çalıştı");
  }

  ngOnDestroy(){
    //console.log("ngOnDestroy çalıştı");
  }

  completeUnDoneItem(doneModel:any){
    this.doneModels.push(doneModel);

    let index = this.unDoneModels.indexOf(doneModel);
    this.unDoneModels.splice(index,1);
  }

  deleteUnDoneItem(doneModel:any){
    let index = this.unDoneModels.indexOf(doneModel);
    this.unDoneModels.splice(index,1);
  }

}
