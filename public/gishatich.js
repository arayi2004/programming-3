class gishatich extends parent {
    stanalnorkoordinatner()
    {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    utel(){
        this.stanalnorkoordinatner();
        this.speed++;
        var a = random(this.yntrelVandak(2));
        if(a && this.speed % 8 == 0){
            matrix[a[1]][a[0]] = 3;
            this.energy = 4;
            this.kerac++;
            matrix[this.y][this.x] = 0;
            this.x = a[0];
            this.speed = 0;
            this.y = a[1];
            for (var i in xotakerArr){
                if(xotakerArr[i].x == this.x && xotakerArr[i].y == this.y){
                    xotakerArr.splice(i, 1);
                }
            }
            //("utel");            
        }
        return a;
    }
    sharjvel(){
        this.stanalnorkoordinatner();
        this.speed++;
        var a = random(this.yntrelVandak(0));
        if(a && !(this.utel()) && this.speed % 8 == 0){
            matrix[a[1]][a[0]] = 3;
            this.energy--;
            this.kerac = 0;
            matrix[this.y][this.x] = 0;
            this.x = a[0];
            this.y = a[1];
            this.speed = 0;
        }
    }
    bazmanal() {
        this.multiply++;
        if (this.ser == "female") {
            var male = (this.yntrelVandak(2));
            if (male) {
                this.stanalnorkoordinatner();
                var norVandak = random(this.yntrelVandak(0));
                ////(norVandak, this.multiply);
                if (this.multiply >= this.speed && norVandak) {
                    var norgish = new gishatich(norVandak[0], norVandak[1]);
                    gishatichArr.push(norgish);
                    matrix[norVandak[1]][norVandak[0]] = 3;
                    this.multiply = 0;
                }
            }
        }
    }
    mahanal(){
        if(this.energy <= 0){
            matrix[this.y][this.x] = 0;
            for(var i in fireArr){
                if(fireArr[i].x == this.x && fireArr[i].y == this.y){
                    fireArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}