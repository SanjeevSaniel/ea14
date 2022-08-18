/*
Object Multiplyer

Complete the function in the editor. In which you are given an object and a digit N as a parameter.In the object there are two variable id and houseno are defined as a data member. You have to multiply both the data members with a given digit N.
*/

function Check(a, obj) {
  obj.id *= a;
  obj.houseno *= a;
  return obj;
}
