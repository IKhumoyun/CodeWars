const str = "Hello mellow yellow";

function spinWords() {
    const arr = str.split(' ');
    arr.map((item) => {
        if(item.length>=5) {
            const final = item.split("").reverse().join("");
            console.log(final);
        } else {
            return item;
        }
    })
}

spinWords();
