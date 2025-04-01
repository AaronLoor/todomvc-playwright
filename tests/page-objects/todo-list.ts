import { Locator, Page } from "@playwright/test";

export class TodoList {
    readonly page : Page;
    readonly displayedTodoItem : Locator;

    constructor(page : Page) {
        this.page = page;
        this.displayedTodoItem = page.locator('.todo-list li label');
    } 
}