//? 344. Reverse String
function reverse(s) {
    let l = 0,
        r = s.length - 1;

    while (r >= l) {
        // swap
        [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
    }

    return s;
}

// ************* ################### *************

//? 557. Reverse Words in a String III
// EX: ""Let's take LeetCode contest"" --- Output: "s'teL ekat edoCteeL tsetnoc"
// TODO: Revesre based on Built-in methods
function reverseWords1(s) {
    return s.split(' ').map(word => word.split("").reverse().join('')).join(' ');
}

// TODO: Revesre based on our own reverse function
function reverseWords2(s) {
    s = s.split(' ');

    for (let i = 0; i < s.length; i++) {
        s[i] = reverseHandler(s[i]);
    }
    return s.join(' ');
}
// TODO: Reverse method based on 2-pointers technique
function reverseHandler(s) {
    s = s.split('');
    let l = 0,
        r = s.length - 1;

    while (r >= l) {
        [s[l], s[r]] = [s[r], s[l]];
        r--;
        l++;
    }
    return s.join('');
}

// TODO: Revesre based on looping
function reverseWords3(s) {
    let res = '',
        word = '';

    for (let char of s) {
        if (char !== ' ') {
            word = char + word;
            console.log(word);
        } else {
            res += word + char;
            word = '';
        }
    }

    return res + word;
}
console.log(reverseWords3("Let's take LeetCode contest"));