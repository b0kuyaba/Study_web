function runGreeting(name, sayHello) {
  sayHello(name);
}

function sayHello(name) {
  console.log(`안녕하세요, ${name}님`);
}

runGreeting("민수", sayHello);
