let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

drawStar(100, 0, "black");
drawRobot(300, 400, "black");

fill('green');
rect(0, 520, 800, 100, 'fill')

fill('yellow');
circle(785, 0, 100, 'fill');

fill('black');
font('25px Arial')
text('A robot having fun in the sun with lazers!', 100, 200, 'fill');

stroke('red');
line(350, 420, 400, 420);
line(450, 420, 500, 420);
line(550, 420, 600, 420);
line(650, 420, 700, 420);
line(750, 420, 800, 420);