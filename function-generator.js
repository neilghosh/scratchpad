function* myFunction(index) {
    while (index < 5) {
        yield index + "-value";
        index++;
    }
}

const iterator = myFunction(0);

//   for (var v; v = iterator.next().value; ) {      //will return when undefined is yield 
//     console.log(v);
//     // Coud laso return when done.
//   }

while (true) {
    nextItem = iterator.next();
    if (nextItem.done) {
        return;
    } else {
        console.log(nextItem.value);
    }
}