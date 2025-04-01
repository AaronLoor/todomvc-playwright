import {test, expect} from '@playwright/test'
import { TodoForm } from './page-objects/todo-form';
import { TodoList } from './page-objects/todo-list';
import { Navigate } from './page-objects/navigate';

let todoForm;
let todoList;
let navigate;

test.beforeEach(async ({page})=>{
    todoForm = new TodoForm(page);
    todoList = new TodoList(page);
    navigate = new Navigate(page);
    await navigate.toHomePage();
});

test('The todo input field should display a helpful prompt', async ({page}) => {
    // expect(page.getByRole('textbox', { name: 'What needs to be done?' })) other option;
    await expect(todoForm.newTodoField).toHaveAttribute('placeholder','What needs to be done?');
});

test.describe('When adding a single item', async() => {
    test.beforeEach(async() => {
        await todoForm.addItem('Walk the dog');
    });

    test('Should add the item to the list', async() => {
        await expect(todoList.displayedTodoItem).toHaveText('Walk the dog');
    });

    test('Should show the number of remaining items', async ({page}) => {
        await expect(page.locator('.todo-count')).toHaveText('1 item left');
    });
});

test.describe('When adding multiple items', async() => {
    test.beforeEach(async() => {
        await todoForm.addItem('Walk the dog');
        await todoForm.addItem('Feed the cat');
    });

    test('Should add the items to the list', async() => {
        await expect(todoList.displayedTodoItem).toHaveText(['Walk the dog','Feed the cat']);
    });

    test('Should show the number of remaining items', async ({page}) => {
        await expect(page.locator('.todo-count')).toHaveText('2 items left');
    });
});

test.describe('When completing an item', async() => {
    let feedTheCatItem;
    test.beforeEach(async({page}) => {
        await todoForm.addItem('Walk the dog');
        await todoForm.addItem('Feed the cat');

        feedTheCatItem = page.locator('.todo-list li',{hasText:'Feed the cat'});

        await feedTheCatItem.locator('.toggle').check();
    });

    test('Should bar the the completed item', async() => {
        await expect(feedTheCatItem).toHaveClass(/completed/);
    });

    test('Should show the number of remaining items', async ({page}) => {
        await expect(page.locator('.todo-count')).toHaveText('1 item left');
    });
});