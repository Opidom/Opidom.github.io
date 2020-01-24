function Car(x1, y1, image1)
{
	var x = x1, 
		y = y1, 
		image = image1;

	function move(speedXcar, speedYcar)
	{
        x += speedXcar ;
        y += speedYcar;
	}

	function position() {
		return {
                x: x,
                y: y + 15,
                width: image.width -10,
                height: 51 // image.height -15
        };
	}


	return {
		x: function(){ return x},
		y: function(){ return y},
		image: image,
		move: move,
		position: position,
		height: image.height,
		width: image.width
	};
}