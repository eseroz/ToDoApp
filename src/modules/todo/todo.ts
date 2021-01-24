import { todoItem } from "./todo-item";
export class todo {
    id!: number;
    title!: string;
    TodoItemList!: todoItem[];
    DoneItemList!: todoItem[];
}
