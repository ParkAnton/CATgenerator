// var bugs= [];
let bugs=[];
let fake;
let cats = [];

function preload(){
    // fake= loadImage('data/fake.png');
    for(let i=0; i<11; i++){
    cats[i]= loadImage('data/cat'+ i +'.png');
}
}

function setup() {
    imageMode(CENTER);
    createCanvas(1200 , 700);
    for (let i=0; i<200; i++){
        let x = random(width);
        let y =random(height);
        let diameter = random(100,400);
        let cat=random(cats);
            let b=new JitterBug(x, y, diameter, cat);
            bugs.push(b);
    }

    //     bugs[i] =new JitterBug(x, y, diameter)
    // }
}

function mousePressed(){
    for (let i=0; i < bugs.length ; i++){   
        bugs[i].clicked(mouseX, mouseY);    
        // if(bugs[i].contains(mouseX, mouseY)){
        //     bugs.splice(i,1);
        // }
    }
}

function draw() {
    background(0);
    for (let i=0; i<bugs.length; i++){       
        // if(bugs[i].contains(mouseX, mouseY)){
        //     bugs[i].changeColor(255);
        // }else{
        //     bugs[i].changeColor(0);

        // }
    bugs[i].move();
    bugs[i].display();
    }

}   
