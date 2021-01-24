import { Component, OnInit } from '@angular/core';
import { todo } from '../todo';
import { todoItem } from '../todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './todo-default.component.html',
  styleUrls: ['./todo-default.component.css']
})

export class TodoDefaultComponent implements OnInit {

  secilenTodo:todo;
  SecilenTodoItem:todoItem;
  todoGrupListesi:todo[]=[];

  constructor() { 
    this.todoGrupListesi.push({ id:1, title:"IT Grubu", TodoItemList: this.generateTodoItems("IT Grubu",1), DoneItemList:[] });
    this.todoGrupListesi.push({ id:2, title:"Pandap Grubu", TodoItemList: this.generateTodoItems("Pandap Grubu", 2), DoneItemList:[]});
    this.secilenTodo = this.todoGrupListesi.filter(p=>p.id == 1)[0];
    this.SecilenTodoItem = new todoItem();
  }

  ngOnInit(): void {

  }

  GorevTamamla(todoItem:todoItem){
    this.secilenTodo.TodoItemList = this.secilenTodo.TodoItemList.filter(p=>p.id!=todoItem.id);
    this.secilenTodo.DoneItemList.unshift(todoItem);
    this.listsSorting(); 
  }

  GorevEkle(event:any){
    this.secilenTodo.TodoItemList.unshift({ id:0, todo_id:this.secilenTodo.id, title:event.target.value, details:'' });
    event.target.value="";
    this.listsSorting();
    this.listIdPosition();
  }

  GorevGeriAl(todoItem:todoItem){
    this.secilenTodo.DoneItemList = this.secilenTodo.DoneItemList.filter(p=>p.id!=todoItem.id);
    this.secilenTodo.TodoItemList.unshift(todoItem);
    this.listsSorting();
  }

  GorevEdit(secilenTodoItem:todoItem){
   this.SecilenTodoItem = secilenTodoItem;
   let right_nav = document.getElementById('right-nav') as HTMLElement;
   if(right_nav.getAttribute("nav-state") == "open"){
    right_nav.setAttribute("nav-state", "closed");
    right_nav.style.right="-28vw";
   }else{
    right_nav.setAttribute("nav-state", "open");
    right_nav.style.right="0px";
   }
  }

  changedTodoTitle(editlenenTodoItem:todoItem){
   let txtTodoItemTitle = document.getElementById("txtTodoItemTitle") as HTMLInputElement;
   txtTodoItemTitle.setAttribute("old-value", editlenenTodoItem.title);
  editlenenTodoItem.title=txtTodoItemTitle.value;
  }

  changedTodoDetails(editlenenTodoItem:todoItem){
    let txtTodoItemDetails = document.getElementById("txtTodoItemDetails") as HTMLInputElement;
    txtTodoItemDetails.setAttribute("old-value", editlenenTodoItem.details);
    editlenenTodoItem.details=txtTodoItemDetails.value;
  }

  clickTodoGroup(todo:todo){
    this.secilenTodo=todo;
  }

  saveChangesTodoItem(todoItem:todoItem){
    alert("Kaydedildi!");
    this.GorevEdit(todoItem);
  }

  discardChangesTodoItem(todoItem:todoItem){
    let txtTodoItemTitle = document.getElementById("txtTodoItemTitle") as HTMLInputElement;
    let txtTodoItemDetails = document.getElementById("txtTodoItemDetails") as HTMLInputElement;
    if(txtTodoItemTitle.hasAttribute("old-value")){
      todoItem.title = txtTodoItemTitle.getAttribute("old-value") as string;    
    }
    if(txtTodoItemDetails.hasAttribute("old-value")){
      todoItem.details = txtTodoItemDetails.getAttribute("old-value") as string; 
    }    
    this.GorevEdit(todoItem);
  }


  listsSorting(){
    this.secilenTodo.DoneItemList.sort(function(a, b) {
      return a.id - b.id;
    });
    this.secilenTodo.TodoItemList.sort(function(a, b) {
      return a.id - b.id;
    });
  }

  listIdPosition(){
    for (let i = 0; i < this.secilenTodo.TodoItemList.length; i++) {
      this.secilenTodo.TodoItemList[i].id = i;
    } 
  }

 generateTodoItems(title:string, todo_id: number){
  let list=[];
    for (let i = 1; i < 10; i++) {
      list.unshift({
        id:i,
        todo_id:todo_id,
        title:title + " - "+ i,
        details:"Görev "+i +" Detayları"
      }); 
    }
    return list;
  }
}