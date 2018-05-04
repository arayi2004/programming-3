class xotaker extends parent{
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
     bazmanal() {
        this.stanalnorkoordinatner();
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        ////(norVandak, this.multiply);
        if (this.multiply >= this.speed && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.multiply = 0;
        }
    }
    utel(){
        this.stanalnorkoordinatner();
        var a = random(this.yntrelVandak(1));
        if(a){
            matrix[a[1]][a[0]] = 2;
            this.kerac++;
            this.energy = 5;
            matrix[this.y][this.x] = 0;
            this.x = a[0];
            this.y = a[1];
            for (var i in grassArr){
                if(grassArr[i].x == this.x && grassArr[i].y == this.y){
                    grassArr.splice(i, 1);
                }
            }
            //("utel");            
        }
        return a;
    }
    sharjvel(){
        this.stanalnorkoordinatner()
        var a = random(this.yntrelVandak(0));
        if(a && !(this.utel())){
            matrix[a[1]][a[0]] = 2;
            this.kerac = 0;
            matrix[this.y][this.x] = 0;
            this.x = a[0];
            this.y = a[1];
        }
    }
    mahanal(){
        if(this.energy <= 0){
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr){
                if(xotakerArr[i].x == this.x && xotakerArr[i].y == this.y){
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            //("MAH");
        }
    }
}