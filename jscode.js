var celsius=document.getElementById("cels");
		var fahrenheit=document.getElementById('fahren');

		celsius.addEventListener('input', function () {
			let v = this.value;
			let f = ( v * 9/5) + 32;
			if(!Number.isInteger(f)){
				f=f.toFixed(4)
			}
			fahrenheit.value=f;
		});

		fahrenheit.addEventListener('input', function () {
			let v = this.value;
			let c = ( v - 32) * 5/9;
			if (!Number.isInteger(c)) {
				c=c.toFixed(4)
			}
			celsius.value=c;
		});