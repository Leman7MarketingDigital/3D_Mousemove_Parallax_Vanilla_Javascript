document.addEventListener('mousemove', parallax);
    function parallax(e){
	   this.querySelectorAll('.layer').forEach(layer =>{
	   var speed = layer.getAttribute('data-speed')
	   var x = (window.innerWidth - e.pageX * speed)/100
	   var y = (window.innerWidth - e.pageY * speed)/100
	   layer.style.transform = 'translateX('+ x +'px) translateY('+ y + 'px)' 
	})
}