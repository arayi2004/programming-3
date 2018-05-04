class fire extends parent{
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
        var a = this.yntrelVandak(1);
        for(var i in a){
            matrix[a[i][1]][a[i][0]] = 5;
            var fire1 = new fire(a[i][0], a[i][1]);
            fireArr.push(fire1);
            for (var y in grassArr){
                if(grassArr[y].x == a[i][0] && grassArr[y].y == a[i][1]){
                    grassArr.splice(y, 1);
                }
            }
        }
        var a = this.yntrelVandak(2);
        for(var i in a){
            matrix[a[i][1]][a[i][0]] = 5;
            var fire1 = new fire(a[i][0], a[i][1]);
            fireArr.push(fire1);
            for (var y in xotakerArr){
                if(xotakerArr[y].x == a[i][0] && xotakerArr[y].y == a[i][1]){
                    xotakerArr.splice(y, 1);
                }
            }
        }
        var a = this.yntrelVandak(3);
        for(var i in a){
            matrix[a[i][1]][a[i][0]] = 5;
            var fire1 = new fire(a[i][0], a[i][1]);
            fireArr.push(fire1);
            for (var y in gishatichArr){
                if(gishatichArr[y].x == a[i][0] && gishatichArr[y].y == a[i][1]){
                    gishatichArr.splice(y, 1);
                }
            }
        }
    }
    mahanal(){
        this.energy--;
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