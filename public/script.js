var matrix = [];
var side = 12;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var waterArr = [];
var fireArr = [];
matrix_length = 46;
matrix_hight = 46;
var weather;
var w = "winter";
var s = "spring";
var su = "summer";
var a = "autumn";
var weathercount = 0;
function weatherset() {
    if (weathercount == 0) {
        weather = w;
    }
    else if (weathercount == 1) {
        weather = s;
    }
    else if (weathercount == 2) {
        weather = su;
    }
    else if (weathercount == 3) {
        weather = a;
    }
    weathercount++;
    weathercount %= 4;
    console.log(weather);
}
setInterval(weatherset, 3000);
function setup() {
    for (var i = 0; i < matrix_length; i++) {
        matrix[i] = [];
        for (var j = 0; j < matrix_hight; j++) {
            matrix[i][j] = floor(random(0, 3));    
        }
    };
    for (var i = 0; i < 20; i++)
    {
        matrix[round(random(0, matrix_length))][round(random(0, matrix_hight))] = 4;
    }
    matrix[0][0] = 5;
    matrix[45][45] = 5;
    matrix[0][45] = 5;
    matrix[45][0] = 5;
    console.log(matrix);
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    strokeWeight(0.1);
    //noStroke(); 
    background('#5a5a5a');
    for (var y = 0; y < matrix.length; y++)
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (Math.floor(matrix[y][x]) == 2) {
                var xt = new xotaker(x, y, matrix[y][x] - Math.floor(matrix[y][x]));
                xotakerArr.push(xt);
            }
            else if (Math.floor(matrix[y][x]) == 3) {
                var gish = new gishatich(x, y, matrix[y][x] - Math.floor(matrix[y][x]));
                gishatichArr.push(gish);
            }
            else if (matrix[y][x] == 4) {
                var wt = new water(x, y);
                waterArr.push(wt);
            }
            else if (matrix[y][x] == 5) {
                var fire1 = new fire(x, y);
                fireArr.push(fire1);
            }
        }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (weather == w) {
                if (matrix[y][x] == 1) {
                    fill("#fefefe");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    console.log("yellow!");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill("orange");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("blue");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
            }
            if (weather == s) {
                if (matrix[y][x] == 1) {
                    fill("lightgreen");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill("orange");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("blue");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
            }
            else if (weather == su) {
                if (matrix[y][x] == 1) {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill("orange");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("blue");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
            }
            if (weather == a) {
                if (matrix[y][x] == 1) {
                    fill("gold");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill("orange");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("blue");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
        xotakerArr[i].sharjvel();
        xotakerArr[i].bazmanal();
        xotakerArr[i].mahanal();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].utel();
        gishatichArr[i].sharjvel();
        gishatichArr[i].bazmanal();
        gishatichArr[i].mahanal();
    }
    for (var i in waterArr) {
        waterArr[i].utel();
        waterArr[i].sharjvel();
        waterArr[i].mah();
    }
    for (var i in fireArr) {
        fireArr[i].utel();
        fireArr[i].mahanal();
    }
}

