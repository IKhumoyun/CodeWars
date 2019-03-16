const data = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];
const result = [];
function openOrSenior(data){
    for(i=0; i<data.length; i++) {
        if(data[i][0]>=55 && data[i][1]>7) {
            result.push('Senior');
        } else {
            result.push('Open');
        }
    }
}

openOrSenior(data);
console.log(result);