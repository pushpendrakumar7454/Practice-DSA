let stones='aAAbbbb'
let jawels='aA'
let count=0
let set=new Set()

for(let i=0;i<jawels.length;i++){
    set.add(jawels[i])
}

for(let i=0;i<stones.length;i++){
    if(set.has(stones[i])) count++
}

console.log('====================================');
console.log(count);
console.log('====================================');