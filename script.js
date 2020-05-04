function toNextQuestn(currQuestn, nextQuestn) {
    document.getElementById(currQuestn).style.cssText = "display: none";
    document.getElementById(nextQuestn).style.cssText = "display: block";
}

function endGameMsg(input) {
    alert('Thanks for playing, you scored a total of '+ document.getElementById('scoreCounter').value + ' out of 5.');
}

function checkAns1(input) {
    let correctAns = "lion";
    let currScore = parseInt(document.getElementById('scoreCounter').value);

    if(input === correctAns) {
        document.getElementById(input).style.cssText = "background:green; color:white"
        document.getElementById('scoreCounter').value = currScore + 1;
    } else {
        document.getElementById(input).style.cssText = "background: red; color:white"
        document.getElementById(correctAns).style.cssText = "background: green; color:white"
    }
}

function checkAns2(input) {
    let correctAns ="spherical";
    let currScore = parseInt(document.getElementById('scoreCounter').value);

    if (input === correctAns){
        document.getElementById(input).style.cssText="background: green; color: white"
        document.getElementById('scoreCounter').value = currScore + 1;
    } else {
        document.getElementById(input).style.cssText = "background: red; color: white"
        document.getElementById(correctAns).style.cssText = "background: green; color: white"
    }
}

function checkAns3(input) {
    let correctAns =7;
    let currScore = parseInt(document.getElementById('scoreCounter').value);

    if (input === correctAns) {
        document.getElementById(input).style.cssText = "background: green; color: white"
        document.getElementById('scoreCounter').value = currScore + 1;
    } else {
        document.getElementById(input).style.cssText = "background: red; color: white"
        document.getElementById(correctAns).style.cssText = "background: green; color: white"
    }
}

function checkAns4(input) {
    let correctAns = 32;
    let currScore = parseInt(document.getElementById('scoreCounter').value);

    if (input === correctAns) {
        document.getElementById(input).style.cssText = "background:green; color: white; "
        document.getElementById('scoreCounter').value = currScore + 1;
    } else {
        document.getElementById(input).style.cssText = "background: red; color: white"
        document.getElementById(correctAns).style.cssText = "background: green; color: white"
    }
}

function checkAns5(input) {
    
    let correctAns = "hyperTextMarkupLanguage";
    let currScore = parseInt(document.getElementById('scoreCounter').value);

    if (input === correctAns) {
        document.getElementById(input).style.cssText = "background: green; color: white"
        document.getElementById('scoreCounter').value = currScore + 1;
        
    } else {
        document.getElementById(input).style.cssText = "background: red; color: white"
        document.getElementById(correctAns).style.cssText = "background: green;  color: white"
    } 
    
}