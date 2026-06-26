/* EMAIL MASKER

one way of doing it:

function maskEmail(email){



    let newEmail= email[0] + "*".repeat(email.length-2) + email[email.length-1];
console.log(newEmail);

let result = newEmail+ "@example.com";
console.log(result);


};

/* LOGIC
~   email wasnt declared outside to avoid clashing of two different variable data.
Email declared outside is nto the same as email declared inside the function. SCOPE!

~ The newEmail line: email[0] literally says, what is the letter at the zero spot, whcih is 'a'.
The second apart says: take this star '*' and repeat it. how many times? emails length minus 2, that many times.
The 3rd part says what is the letter at the number you get when you remove 1 from the length total of email.
retrieve that letter, which is 'e'

~i logged console to check newemail was what i needed it to be then concatenated it with the domanin 
and run that.
*/
/*
email="apple.pie";

maskEmail("freecodecamp");
maskEmail(email);

*/
// another way of doing it:

function maskEmail(email){

 let at = email.indexOf("@");
// console.log(at);
//  let domain =email.slice(at);
// console.log(domain);

// let content= email[at - 1];
// console.log(content);

let star= email.slice(1,[at -1]);
console.log(star);


let starred = email.replace(star,"*".repeat(star.length));
console.log(starred);


// let result= email[0] + star + content + domain;

// console.log(result);


// console.log();
// console.log(email.replace(email.slice(at),"*"));

// let newEmail=  email.replace(email.slice(1),"*".repeat(6));

// email[o]
// ;

// console.log(newEmail);

};

/*LOGIC

~i found the constant in email addresses.. "@". found its index, then i
sliced it. begining at index 1 until the index before '@''s indexs which was the letter right before @.
so everything bwtween the first letter and the last letter before @ became a new section
~ then i replaced that new section with a '*' and repeated it for the length of 
that section
~ At the domain (line 44) line, the slice portion has cut everything before the @ and
created a new string starting at the @. hence why line 44 is a new string 
that prints everything after @ including @.

~NOTE: logging something and returning something are not the same thing.

in the code above the function returns the log. where as if return starred was inside the function and console logged maskEmail you get the same output as is aboce but 
youve logged one thing and return another, vs returning the log. hope that makes sense.

*/



email = "apple.pie@example.com";
maskEmail(email);