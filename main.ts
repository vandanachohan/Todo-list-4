#! /usr/bin /env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] = [];
let conditions = true;

console.log(chalk.blue.italic("\n \t Wellcome to Code-With-Vandana - Todo-list Application\n"));

//  while(conditions){
//      let addTask = await inquirer.prompt([
//          {
//              name: "task",
//              type: "input",
//             message: chalk.gray("Enter your New Task:")
//          }
//     ]);
//      todoList.push(addTask.task);
//      console.log(`${addTask.task} Task added in Todo-List successfully`);

//      let addMoreTask = await inquirer.prompt([
//          {
//              name: "addMore",
//              type: "confirm",
//              message: "Do you want to add more task",
//              default: "False",  
//          }
//     ]);
//      conditions = addMoreTask.addMore

// }
// console.log("\n Your update Todo-List:", todoList \n);

let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do",
                choices:  ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if(option.choice === "Add Task"){
            await addTask()
        }
        else if(option.choice === "Delete Task"){
            await DeleteTask()
        }
        else if(option.choice === "Update Task"){
            await updateTask()
        }
        else if(option.choice === "View Todo-List"){
            await viewTask()
        }
        else if(option.choice === "Exit" ){
            conditions = false;
        }
        
    }
}

// Function to add  new task to  the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List`);
}

// Function to view all Todo-List Tasks
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index}: ${task}`)
    })
}

// Function to delete a task from the list
let DeleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the ` of the task you want to delete :",
        }
    ]);
    let DeleteTask = todoList.splice(taskIndex.index,1);
    console.log(`\n ${DeleteTask} this task has been delete successfully from your Todo-List\n`);
}

// function to Update a Task
let updateTask = async () => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the `index number` of the task you want to update :",
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name",
        }
    ]);
    todoList[update_task_index.index] = update_task_index.new_task
    console.log(`\n Task at index number. ${update_task_index.index} updated successfully [For updated list check ption: "View Todo-List]`)

}


main();
