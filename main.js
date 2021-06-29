var canvas= new fabric.Canvas('myCanvas')
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

player_width = 30;
player_height = 30;

block_image_width = 2;
block_image_height = 2;

var player_object = "";
function player_update(){
fabric.Image.fromURL("ball.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(50);
    player_object.scaleToHeight(40);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object)
});
}
function new_image(){
    fabric.Image.fromURL(golf-h.png,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:bloc,
            left:player_x
        });
        canvas.add(block_image_object)
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
   
    if (keyPressed=='38'){
        up ();
        console.log("up");
    }
    if (keyPressed=='40'){
        down ();
        console.log("down");
    }
    if (keyPressed=='39'){
        right ();
        console.log("right");
    }
    if (keyPressed=='37'){
        left ();
        console.log("left");
    }
	
	function up() {

		if(player_y >= 0){
			player_y = player_y - block_image_height;
			console.log("block_image_height = " +block_image_height);
			console.log("When Up Arrow Key is Pressed, X =" + player_x + ", Y =" +player_y);
			canvas.remove(player_object);
			player_update();
		}
	}
	function down() {
	
		if(player_y <= 500){
			player_y = player_y + block_image_height;
			console.log("block_image_height = " +block_image_height);
			console.log("When Down Arrow Key is Pressed, X =" + player_x + ", Y =" +player_y);
			canvas.remove(player_object);
			player_update();
		}
	}
	function left() {
	
		if(player_x >= 0){
			player_x = player_x - block_image_width;
			console.log("block_image_height = " +block_image_width);
			console.log("When Left Arrow Key is Pressed, X =" + player_x + ", Y =" +player_y);
			canvas.remove(player_object);
			player_update();
		}
	}
	function right() {
	
		if(player_x <= 850){
			player_x = player_x + block_image_width;
			console.log("block_image_height = " +block_image_width);
			console.log("When Right Arrow Key is Pressed, X =" + player_x + ", Y =" +player_y);
			canvas.remove(player_object);
			player_update();
		}
	}}
