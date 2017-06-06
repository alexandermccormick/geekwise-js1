// function asking user for a name
// properCap
// function asking if more names
//

var visitors = [];

function getName() {
    visitors.push((prompt('Enter a name')));
    return visitors;
}

function properCap(names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = names[i].toLowerCase().split(' ');
        for (var j = 0; j < names[i].length; j++) {
            names[i][j] = names[i][j].charAt(0).toUpperCase() + names[i][j].slice(1);
        }
        names[i] = names[i].join(' ');
    }
    return names;
}

function addName(nameArr) {
    while (confirm('Input additional names?')) {
        getName();
    }
    return nameArr;
}

function alertName(finalList) {
    if (finalList.length === 1) {
        alert(`Welcome ${finalList}`);
        return;
    } else if (finalList.length === 2) {
        alert(`Welcome ${finalList.join(' and ')}!`);
        return;
    } else if (finalList.length >= 3) {
        finalList[finalList.length - 1] = `and ${finalList[finalList.length - 1]}`;
        alert(`Welcome ${finalList.join(', ')}!`);
        return;
    }
}

// teacher's way
// var fullName = '';

// function getName() {
//     var user = prompt('enter a name');
//     alertName(getMore(properCap(user)));
// }

// function properCap(str1) {
//     return str1.charAt(0).toUpperCase() + str1.substr(1).toLowerCase();
// }

// function getMore(str2) {
//     fullName += `${str2} `;
//     if (confirm('more names?')) {
//         getName();
//     } else {
//         return fullName;
//     }
// }

// function alertName(str3) {
//     if (str3 !== 'undefined') {
//         alert(str3);
//     } else {
//         return;
//     }
// }