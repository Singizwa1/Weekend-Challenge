function Security(a){
    const specialChars = new Set(['!','@','#','$','%','&','*']);
    let numberCount =0;
    let specialCharCount=0;
    for(let char of a){
        if(!isNaN(char)) numberCount++;
        if(specialChars.has(char)) specialCharCount++;
    }
    if (a.length >=7&& numberCount >=2 && specialCharCount >=2){
        console.log('Strong');
    }
    else{
        console.log('weak');
    }
}
Security('Ihateyou@23!');