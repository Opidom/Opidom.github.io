function Obstacle(x1, y1, image1)
{
	var x = x1, 
		y = y1, 
		image = image1,
		visible = false;

	function move(speedXObstacle)
	{
		if (x+image.width > 0) {
	        x += speedXObstacle ;
	    }
	}

	function position() {
		return {
                x: x,
                y: y + 3,
                width: image.width -3,
                height: image.height -3
        };
	}

	function isVisible(value){
		visible = value;
	}

	function updateX(value){
		x = value;
	}



	return {
		x: function(){ return x; },
		y: function(){ return y; },
		visible: function(){ return x > 0 },
		updateX: updateX,
		image: image,
		move: move,
		position: position,
		height: image.height,
		width: image.width,
		isVisible: isVisible,
	};
}