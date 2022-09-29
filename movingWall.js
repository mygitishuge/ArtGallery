

var leftWall = document.getElementById("left-wall"),
    firstLICont = document.getElementById("l-i-f-cont"),
    firstLeftImage = document.getElementById("f-l-i"),
    secondLICont = document.getElementById("l-i-s-cont"),
    secondLeftImage = document.getElementById("s-l-i"),
    thirdLICont = document.getElementById("l-i-t-cont"),
    thirdLeftImage = document.getElementById("t-l-i"),

    //Right wall paintings
    firstRICont = document.getElementById("r-i-f-cont"),
    firstRightImage = document.getElementById("f-r-i"),
    secondRICont = document.getElementById("r-i-s-cont"),
    secondRightImage = document.getElementById("s-r-i"),
    thirdRICont = document.getElementById("r-i-t-cont"),
    thirdRightImage = document.getElementById("t-r-i"),

    fullView = 0;

leftWall.addEventListener('click', comeClose);

function comeClose() {
    console.log("comeClose");
    
    console.log(fullView);
    //Check if full view
    if (fullView === 0) {
        //Add the class to move to full wall view
        leftWall.className = "left-wall leftWall-enter-active";
        firstLICont.className ="image-left-1 img-cont-l-f-active";
        firstLeftImage.className = "img-cont -i1 l1-image-active";
        secondLICont.className ="image-left-2 img-cont-l-s-active";
        secondLeftImage.className = "img-cont -i2 l2-image-active";
        thirdLICont.className ="image-left-3 img-cont-l-t-active";
        thirdLeftImage.className = "img-cont -i3 l3-image-active";
        fullView = 1;
    } else {
        //Remove full view
        leftWall.className = "left-wall leftWall-leave-active";
        firstLICont.className ="image-left-1 img-cont-l-f-rev";
        firstLeftImage.className = "img-cont -i1 l1-image-rev";
        secondLICont.className ="image-left-2 img-cont-l-s-rev";
        secondLeftImage.className = "img-cont -i2 l2-image-rev";
        thirdLICont.className ="image-left-3 img-cont-l-t-rev";
        thirdLeftImage.className = "img-cont -i3 l3-image-rev";
        fullView = 0;
    }
    
    
    
}


var rightWall = document.getElementById("right-wall"),
    fullView1 = 0;

rightWall.addEventListener('click', comeClose1);

function comeClose1() {
    console.log("comeClose1");
    
    console.log(fullView1);
    //Check if full view
    if (fullView1 === 0) {
        //Add the class to move to full wall view
        rightWall.className = "right-wall rw-2 rightWall-enter-active";
        firstRICont.className ="image-right-1 img-cont-r-f-active";
        firstRightImage.className = "img-cont -i4 r1-image-active";
        secondRICont.className ="image-right-2 img-cont-r-s-active";
        secondRightImage.className = "img-cont -i5 r2-image-active";
        thirdRICont.className ="image-right-3 img-cont-r-t-active";
        thirdRightImage.className = "img-cont -i6 r3-image-active";
        fullView1 = 1;
    } else {
        //Remove full view
        rightWall.className = "right-wall rw-2 rightWall-leave-active";
        firstRICont.className ="image-right-1 img-cont-r-f-rev";
        firstRightImage.className = "img-cont -i4 r1-image-rev";
        secondRICont.className ="image-right-2 img-cont-r-s-rev";
        secondRightImage.className = "img-cont -i5 r2-image-rev";
        thirdRICont.className ="image-right-3 img-cont-r-t-rev";
        thirdRightImage.className = "img-cont -i6 r3-image-rev";
        setTimeout(remInd, 3000)
        fullView1 = 0;
    }
    
    
    
}

function remInd() {
    rightWall.className = "right-wall rightWall-leave-active";
}



