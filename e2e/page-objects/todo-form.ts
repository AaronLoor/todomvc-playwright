import { Locator, Page } from "@playwright/test";

export class TodoForm {
    readonly page: Page;
    readonly newTodoField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newTodoField = page.locator('.new-todo'); 
    }

    async addItem(todo: string){
        await this.newTodoField.fill(todo);
        await this.newTodoField.press('Enter');
    }
}