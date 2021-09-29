# 📝 TODO Website (DOM)

In this project you will be creating a todo website with a starter DOM file.

## Instructions

1. Fork and clone this [repo](https://github.com/JoinCODED/TASK-todo-app)
2. You do not need to edit `engine.js` nor components folder ( but you need to take a look in them to get the classes names )
3. This project has **zero** styling, so its on your todo 😜
4. You will be writing your beloved `javascript` code in the `index.js`
5. There are a lot of sample codes, remove it once you are done
6. `index.html` is not fully done, add the tags that you need so the code can run
7. Example of how the layout can look like:
   ![sample-output](https://i.ibb.co/X70ZNTm/MP.png)

_Note: You have to be creative and unique with your styling_

**Tools**

- Empty array called `tasks`
- Empty Array called `categories`
- A function called `addTask()`
- A function called `addCategory()`
- A function called `taskChecked()`
- A function called `filterTasks()`
- A function called `renderTasks(array, html-id)`
- A function called `filterTasks(array, html-id)`

**Hints**

- Use `onclick` when needed
- Some functions will be reused, so think carefully

### ⁉️ Questions you need to answer before you get started

- What does the the `select` tag do?
- What does `option` tag do? Where can it be found?
- How is `engine.js` reading from `index.js`, `categoryItem.js`, and `taskItem.js`
- What does components folder contains?
- What does `engine.js` do?
- Try all functions inside the `engine.js`

## PART 1: Add a Task

1. Complete the code in away that the task added can be `pushed` into the array as an object (tasks must be an array of objects)

```javascript
tasks = [
  { id: 0, title: "Game of thrones", category: "Movies", done: false },
  { id: 1, title: "Toy Story 4", category: "Movies", done: false },
];
```

2. Make sure that the function is being called from the `index.html`
3. Render the array `tasks` on the page

## PART 2: Add a Category

1. Complete the code in away that the category added can be `pushed` into the array

```javascript
categories = ["Movies", "Grociries"];
```

2. Make sure that the function is being called from the `index.html`
3. Render the array `category` on the page
   (_Note:_ the array will be rendered in the dropdown list)
4. Make sure the added category will be displayed in both dropdown menus, by using `renderCategories(array, html-id)`

## PART 3: Task checked

1. View the `taskChecked() ` function and test it
2. Make sure that it updates the original `tasks` list
3. And render `tasks` to the page

## PART 4: Filter by category

1. This function will display the tasks that have the same category chosen by the dropdown menu
2. Test `filterTasks()` to see what it can give you, then use it in your advantage
3. Do not forget to render it on the page

## PART 5: Filter by task done

1. Make sure that you have build your objects correctly
2. This function will work only when the filter by done is checked
3. Reuse `filterTasks()`
4. Filter the `tasks` array based on `done:true`
5. Render the _filtered tasks_ in away only the done tasks are shown
6. When the checkbox is not checked, the whole tasks must appear (Not the filtered one)
