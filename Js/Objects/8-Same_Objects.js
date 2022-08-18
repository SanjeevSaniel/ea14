/*
Check whether the Objects are same or not.

Complete the function in the editor. In which you are given an object as a parameter. That object contains two variables name and id.
Your task is to compare the object name and id to the new_name and new_id given there as a parameter.
Return "true" if new_name and id are same as objects name and id otherwise return  "false".
*/

function check(obj, a, b) {
  if (obj.name === a && obj.id === b) return "true";
  else return "false";
}
