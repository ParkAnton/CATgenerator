class JitterBug {
    constructor(x, y, diameter, img) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.speed = 1.5;
        this.cat= img;
    }

// changeColor(bright){
//     this.brightness=bright;
// }


    clicked(px,py){
        let d= dist(px, py, this.x, this.y);
        if (d<this.diameter){
            // if(px> this.x&&px<this.x+this.diameter&&py>this.y&&py<this.y+this.diameter){
            this.cat=random(cats);
        }
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }

    display() {
    image(this.cat,this.x, this.y,this.diameter, this.diameter);

        // noStroke();
        // fill(this.brightness,125);
        // ellipse(this.x, this.y, this.diameter, this.diameter);

    }
}