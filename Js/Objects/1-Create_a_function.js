/*
Create a Function

Complete the function in the editor. In which you are given one object as a parameter, in that object, there is a data member named name. Your task is to create a method inside this object named setter, such that this method will print the value of the data member named as name.
*/

function Check(obj) {
  obj.setter = function () {
    console.log(this.name);
  };
}

const obj = {
  name: "Sanjeev",
};

console.log(Check(obj));
