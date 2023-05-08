//heck if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  return (new RegExp(`${target}$`)).test(str);
}
//${} вставляет переменную, еще один $ говорит, что это конец строки регэкс
console.log(confirmEnding("Bastian", "tia"));
console.log(confirmEnding("Bastian", "tian"));