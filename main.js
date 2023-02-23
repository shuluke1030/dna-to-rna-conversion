function DNAtoRNA(dna) {
let arr = dna.split("");
for(let i = 0; i < arr.length; i++){
    if(arr[i] === "T"){
        arr.splice(i, 1, "U");
    }
}
return arr.join("");
}
DNAtoRNA("TTTT")