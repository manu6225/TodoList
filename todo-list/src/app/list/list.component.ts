import { Component, OnInit } from '@angular/core';
import { CdkDragDrop,moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent implements OnInit {

  todoText = this.fb.group({
    txtItem: ["", [Validators.required]]

  });
  list:any=[];

  constructor(private todo: TodoService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getItem()
  }
  getItem(){
   this.todo.get().subscribe((data:any)=>{
     this.list=data;
   })
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } 

  }

  addItem() {
    this.todo.add(this.todoText.value.txtItem)
      .subscribe((data: any) => {
        alert(data.data.message)
        this.getItem();
      }, (data: any) => {
        console.log(data)
      })
  }
  
}
