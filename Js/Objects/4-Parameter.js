/*
Check whether the Object has a parameter or not

Complete the function in the editor. In which you are given an object as a parameter. You have to return "false" if there is no parameter in the object otherwise return "true".
*/

function Check(obj) {
  if (Object.keys(obj).length === 0) return "false";
  else return "true";
}
