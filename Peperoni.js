var nl
var bl
var ve
var ra

function setup() {
    createCanvas(500,500);
    background(0);
    
    nl = 30;
    bl = 30;
    ra = 20;
    ve = 0.05;
}
function draw() {
    background(0);
    
    for (var r = 0; r < nl; r++){
        for (var i = 0; i < bl; i++){
            beginShape(TRIANGLE_STRIP);
            var cx = map(i, 0, bl, -100, width + 100);
            var cy = map(r, 0, nl, -100, height + 100);
            
            var dc = dist(cx, cy, width/2, height/2);
            var an = frameCount * ve + dc*0.02 + i*0.1;
            
            var x = cx + ra * cos(an);
            var y = cy + ra * sin(an);
            
            fill (255);
            vertex(x, y); 
        }
    }
    endShape();
}