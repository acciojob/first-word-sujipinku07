function firstWord(s) {
	s=s.trim();
    if(s.length == 0){
        return s
    }
    let word = s.split(" ");
    return word[0];
}

 const s = prompt("Enter String:");
alert(firstWord(s))