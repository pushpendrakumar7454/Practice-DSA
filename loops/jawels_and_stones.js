let stones='aAAbbbb'
let jawels='aA'
let count=0

for(let i=0;i<stones.length;i++){
    for(let j=0;j<jawels.length;j++){
        if(stones[i]===jawels[j]) count++
    }
}
console.log('====================================');
console.log(count);
console.log('====================================');