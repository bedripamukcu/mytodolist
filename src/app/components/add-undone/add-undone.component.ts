import { Component, ContentChild, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UnDoneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-add-undone',
  templateUrl: './add-undone.component.html',
  styleUrls: ['./add-undone.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddUndoneComponent implements OnInit {

  @Input() unDoneModels:UnDoneModel[];
  @ContentChild("addInput") addInput:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(){
    console.log(this.addInput.nativeElement.value);
  }



}
