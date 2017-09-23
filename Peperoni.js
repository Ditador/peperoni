var nl
var bl
var ve
var ra

function setup() {
    createCanvas(500,500);
    background(0);
    fundo = loadImage('Bandeira_Astro-Hungara.png')
    
    nl = 10;
    bl = 10;
    ra = 20;
    ve = 0.05;
}
function draw() {
    background(0);
    
    for (var r = 0; r < nl; r++){
        fill (255);
        beginShape(TRIANGLE_STRIP);
        texture(fundo);
        for (var i = 0; i < bl; i++){
            var cx = map(i, 0, bl, 0, width   );
            var cy = map(r, 0, nl, 0, height  );
            var nx = map(i, 0, bl, 0, width   );
            var ny = map(r+1, 0, nl, 0, height);
            
            var dc = dist(cx, cy, width/2, height/2);
            var an = frameCount * ve + dc*0.02 + i*0.1;
            
            var x = cx + ra * cos(an);
            var y = cy + ra * sin(an);
            vertex(x, y); 
        
            var dc = dist(nx, ny, width/2, height/2);
            var an = frameCount * ve + dc*0.02 + i*0.1;
            
            var x = nx + ra * cos(an);
            var y = ny + ra * sin(an);
            vertex(x, y); 
        
        }
        endShape();
    }
}