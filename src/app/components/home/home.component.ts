import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { DoneModel } from '../../models/doneModel';
import { UnDoneModel } from '../../models/unDoneModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  unDoneModels:UnDoneModel[] = [];
  doneModels: DoneModel[] = [];
  @ViewChild("addInput") addInput:any;

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
    //console.log("ngAfterViewChecked çalıştı");
  }

  ngOnDestroy(){
    //console.log("ngOnDestroy çalıştı");
  }

  addUnDoneItem(addInput:HTMLInputElement){
    let unDoneModel = new UnDoneModel();
    unDoneModel.title = addInput.value;
    unDoneModel.date = Date();
    this.unDoneModels.push(unDoneModel);
  }

}
