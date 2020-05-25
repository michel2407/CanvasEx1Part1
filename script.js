// Je déclare une première variable wall. Je l'initialise avec la balise canvas de mon HTML que je vais chercher par son id.
var wall = document.getElementById('canvas');
// Je déclare une seconde variable drawWall qui, elle, me servira à dessiner le mur de la maison. Pour cela j'ai besoin dans un premier temps d'établir le contexte, qui ici est en 2D.
var drawWall = wall.getContext('2d');
// Sur ma variable drawWall, j'applique la fonction beginPath() qui symbolise et crée une nouvelle forme sur le canvas
drawWall.beginPath();
// Ensuite, j'applique la fonction moveTo(x, y), qui me permet de me déplacer où je le souhaite dans le canvas en utilisant les coordonnées en abscisse (horizontal ou encore X), et en ordonnée (vertical ou encore Y).
drawWall.moveTo(100, 120);
// Appeler la fonction lineTo(x, y) permet de tracer un trait (non visible) jusqu'à un certain point dont les coordonnées correspondent à celle placées entre parenthèses (horizontal, vertical)
drawWall.lineTo(100, 350);
drawWall.lineTo(300, 350);
drawWall.lineTo(300, 120);
// closePath() permet de fermer directement le chemin sans avoir besoin de revenir au point d'origine.
drawWall.closePath();
// strokeStyle permet de donner une couleur à la bordure de la forme que je suis en train de tracer
drawWall.strokeStyle = '#A7D5E6';
// stroke() permet de tracer la forme selon les traits (imaginaires) réalisés précédemment
drawWall.stroke();
// fillStyle permet de donner une couleur de fond à la forme
drawWall.fillStyle = '#A7D5E6';
// fill permet alors de remplir la forme avec la couleur de fond choisie précédemment. (A noter que fillStyle doit toujours se trouver avant fill)
drawWall.fill();

// Je réitère ces mêmes actions pour chaque partie de la maison : ici il s'agit de la fenêtre de gauche
var leftWindow = document.getElementById('canvas');
var drawLeftWindow = leftWindow.getContext('2d');
drawLeftWindow.beginPath();
drawLeftWindow.moveTo(130, 150);
drawLeftWindow.lineTo(130, 185);
drawLeftWindow.lineTo(165, 185);
drawLeftWindow.lineTo(165, 150);
drawLeftWindow.closePath();
drawLeftWindow.strokeStyle = '#C9C9C9';
drawLeftWindow.stroke();
drawLeftWindow.fillStyle = '#C9C9C9';
drawLeftWindow.fill();

// Fenêtre de droite
var rightWindow = document.getElementById('canvas');
var drawRightWindow = rightWindow.getContext('2d');
drawRightWindow.beginPath();
drawRightWindow.moveTo(270, 150);
drawRightWindow.lineTo(270, 185);
drawRightWindow.lineTo(235, 185);
drawRightWindow.lineTo(235, 150);
drawRightWindow.closePath();
drawRightWindow.strokeStyle = '#C9C9C9';
drawRightWindow.stroke();
drawRightWindow.fillStyle = '#C9C9C9';
drawRightWindow.fill();

// Porte
var door = document.getElementById('canvas');
var drawDoor = door.getContext('2d');
drawDoor.beginPath();
drawDoor.moveTo(170, 350);
drawDoor.lineTo(170, 270);
drawDoor.lineTo(230, 270);
drawDoor.lineTo(230, 350);
drawDoor.closePath();
drawDoor.strokeStyle = '#C9C9C9';
drawDoor.stroke();
drawDoor.fillStyle = '#C9C9C9';
drawDoor.fill();

// Toit
var roof = document.getElementById('canvas');
var drawRoof = roof.getContext('2d');
drawRoof.beginPath();
drawRoof.moveTo(100, 120);
drawRoof.lineTo(200, 30);
drawRoof.lineTo(300, 120);
drawRoof.closePath();
drawRoof.strokeStyle = '#D08C37';
drawRoof.stroke();
drawRoof.fillStyle = '#D08C37';
drawRoof.fill();
