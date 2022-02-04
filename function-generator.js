function* myFunction(index) {
    let arg;
    while (index < 5) {
        arg = yield index + "-value";
        index++;
    }
}

const iterator = myFunction(0);

//   for (var v; v = iterator.next().value; ) {      //will return when undefined is yield 
//     console.log(v);
//     // Coud laso return when done.
//   }

while (true) {
    nextItem = iterator.next(2);
    if (nextItem.done) {
        return;
    } else {
        console.log(nextItem.value);
    }
}

// console.log(iterator.next());
// console.log(iterator.next(4));
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

