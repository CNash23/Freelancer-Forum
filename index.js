const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {



const root = document.getElementById("root") //1.grab the "root" element

const h1 = document.createElement("h1") //create an h1 element

h1.innerHTML = "FREELANCERS"//give it a text of "FREELANCERS"

root.append(h1) //append it to the HTML document

const unordList = document.createElement("ul")//create an unordered list element (unordList)

 for (let i = 0; i < users.length; i++){   //loop through the users array creating li elements (list)
  let list = document.createElement("li") 
  list.innerText = users[i].name
  
  unordList.appendChild(list) //Append li elements to ul parent(unordList).
    
 }  
 document.querySelector("#root").appendChild(unordList) //Append ul element to your HTML document.
 
}


main(); //call the main function