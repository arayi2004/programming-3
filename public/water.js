class water extends parent{
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
    mah(){
        var arr = this.yntrelVandak(1);
        if(arr.length > 3){
            matrix[this.y][this.x] = 0;
            for (var i in waterArr){
                if(waterArr[i].x == this.x && waterArr[i].y == this.y){
                    waterArr.splice(i, 1);
                    break;
                }
            }
        }
        
    }
    utel(){
        this.stanalnorkoordinatner();
        var a = this.yntrelVandak(5);
        for(var i in a){
            matrix[a[i][1]][a[i][0]] = 4;
            for (var y in fireArr){
                if(fireArr[y].x == this.x && fireArr[y].y == this.y){
                    fireArr.splice(i, 1);
                    break;
                }
            }
            var wt = new water(a[i][0], a[i][1]);
            waterArr.push(wt);
        }
        return a;
    }
    sharjvel(){
        this.stanalnorkoordinatner();
        var a = random(this.yntrelVandak(0));
        if(a){
            matrix[a[1]][a[0]] = 4;
            matrix[this.y][this.x] = 0;
            this.x = a[0];
            this.y = a[1];
        }
    }   
}