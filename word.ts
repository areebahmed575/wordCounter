import inquirer from "inquirer";
type ansType={
    sentence:string

}
let answer:ansType = await inquirer.prompt([
    {
        type:"input",
        name:"sentence",
        message:"Write a sentence"
    }



])
const word=answer.sentence.trim().split(" ")
console.log("Your sentence word count is "+word.length+" ")