import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDefaultComponent } from './todo-default/todo-default.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TodoDefaultComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TodoDefaultComponent]
})
export class TodoModule { }
