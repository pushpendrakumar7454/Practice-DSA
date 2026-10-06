let s = 'thequickbrownfoxjumpsoverthelazydog';

let set = new Set();

for (let i = 0; i < s.length; i++) {
    set.add(s[i]);
}

if (set.size == 26)
    console.log("Pangram");
else
    console.log("not pangram");