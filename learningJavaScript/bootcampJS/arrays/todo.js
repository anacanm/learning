let todoList = ['laundry','research','choose a case study paper'];
console.log(`You have ${todoList.length} todos`);

todoList.splice(2);
todoList.push("sleep");
todoList.shift();
for(let i = 0;i<todoList.length;i++)
{
    console.log(todoList[i]);
}