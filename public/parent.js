class parent
{
    constructor(x, y, ser) {
        this.multiply = Math.round(random(0, 8));
        this.speed = 8;
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.kerac = 0;
        //matrix[this.y][this.x] = 1;
        this.ser = (ser == 0 ? "male" : "female");
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
    yntrelVandak(inchmangal) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (Math.floor(matrix[y][x]) == inchmangal) {
                    found.push(this.directions[i]);
                }
            }
        }
        
        return found;
    }
    
    
}