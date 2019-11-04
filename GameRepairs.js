						const canvas=document.getElementById("myCanvas2");
						const ctx = canvas.getContext("2d");
						canvas.style.background="url('suelo1.png')";//imagen de fondo
						//.........................................................
						//variables del astronauta
						var AstroHeight=10;//altura del astronauta
						var AstroWidth=10;//anchura del astronauta
						var origenAstroX=50+(canvas.width-AstroWidth)/2;//posicion x del astronauta
						var origenAstroY=(canvas.height-AstroHeight)/2;//posicion y del astronauta
						var dx=2;//movimiento x camion1
						var dy=0;//-2;//movimiento y camion1
						//.........................................................
						//variables de imagen
				     	var imagen2 = new Image();//andando derecha 1
				     	imagen2.src = 'derecha1prueba.png';
				     	var imagen3 = new Image();//andando derecha 2
				     	imagen3.src = 'derecha2prueba.png';
				     	var imagen4 =new Image();//andando derecha 0
				     	imagen4.src='derecha0.png';
				     	var imagen5=new Image();//andando izquierda 1
				     	imagen5.src='izquierda0.png';
				     	var imagen6=new Image();
				     	imagen6.src='izquierda2.png';
				     	var imagen7=new Image();
				     	imagen7.src='izquierda1.png';
				     	var imagen8=new Image();
				     	imagen8.src='arriba1.png';
				     	var imagen9=new Image();
				     	imagen9.src='arriba2.png';
				     	var imagen10=new Image();
				     	imagen10.src='arriba0.png';
				     	var imagen11=new Image();
				     	imagen11.src='abajo1.png';
				     	var imagen12=new Image();
				     	imagen12.src='abajo2.png';
				     	var imagen13=new Image();
				     	imagen13.src='centro.png';
				     	var vehiculoIz=new Image();//imagen de camion hacia la izquierda
				     	vehiculoIz.src='vehiculoI.png';
				     	var vehiculoDe=new Image();//imagen de camion hacia la derecha
				     	vehiculoDe.src='vehiculoD.png';
				     	var dialogoTools=new Image();//imagen de dialogo de herramientas
				     	dialogoTools.src='dialogo_herramientas.png';
				     	var dialogoStamina= new Image();//imagen de dialogo de descanso
				     	dialogoStamina.src='dialogo_descanso.png';
				     	var astroUp = new Image();//imagen del astronauta hacia arriba
				     	astroUp.src ='centro.png';
				     	var interruptorOff=new Image();//imagen del interruptor Off
				     	interruptorOff.src='off.png';
				     	var interruptorOn=new Image();//imagen del interruptor Off
				     	interruptorOn.src='on.png';
				     	//.........................................................
						var radioAstro=20;//radio del circulo del jeep
						var camion1X=10;//posicion x del camion
						var camion1Y=370;//posicion y del camion
						//.........................................................
						var piedra7X=650;//posición x de la piedra 7 dentro del canvas;
						var piedra7Y=440;//posición y de la piedra 7 dentro del canvas
						var piedra4X=280;//posicion x de la piedra 4 dentro del canvas
						var piedra4Y=300;//posicion y de la piedra 4 dentro del canvas
						var modulo8X=770;//posicion x del modulo 8 dentro del canvas
						var modulo8Y=300;//posicion y del mudulo 8 dentro del canvas
						var modulo6X=700;//posicion x del modulo 6 dentro del canvas
						var modulo6Y=550;//posicion y del mudulo 6 dentro del canvas
						var modulo2X=8;//posicion x del modulo 2 dentro del canvas
						var modulo2Y=520;//posicion y del modulo 2 dentro del canvas
						var modulo3X=340;//posicion x del modulo 3 dentro del canvas
						var cajaX=500;//posicion x de la caja dentro del canvas
						var cajaY=570;//posicion y de la caja dentro del canvas
						var panelesX=20;//posicion x de los paneles dentro del canvas
						var panelesY=350;//posicion y de los paneles dentro del canvas
						//.........................................................
						var camion1XHeight=50;//altura del camion
						var camion1XWidth=50;//anchura del camion
						var Astro1XHeight=20;//altura del astronauta
						var Astro1XWidth=20;//anchura del astronauta
						//.........................................................
						var piedra7Height=40;//altura de la piedra 7
						var piedra7Width=60;//anchura de la piedra 7
						var piedra4Height=40;//altura de la piedra 4
						var piedra4Width=60;//anchura de la piedra 4
						var modulo8Height=70;//altura del modulo 8
						var modulo8Width=50;//anchura del modulo 8
						var modulo6Height=40;//altura del modulo 6
						var modulo6Width=90;//anchura del modulo 6
						var modulo2Height=40;//altura del modulo 8
						var modulo2Width=70;//anchura del modulo 8
						var modulo3Width=100;//anchura del modulo 3
						var cajaHeight=20;//altura de la caja
						var cajaWidth=40;//anchura de la caja
						var camionHeight=40;//altura del camion
						var camionWidth=80;//anchura del camion
						var panelesHeight=10;//altura de los paneles
						var panelesWidth=250;//anchura de los paneles
						//.........................................................
						var interruptorListo=false;//variable booleana que determina si el encendido es efectivo
						var interruptorGirado=false;//variable booleana de control de encendido apagado
						var dialogo1Height=80;//probando
						var dialogo1Width=130;//probando
						var vacio1="";//variable para marcador de muestras
						var contactoCaja=false;//variable de control de contacto con caja
						//.........................................................
						var vidaModulo8=0;//nivel reparacion modulo 8
						var vidaModulo6=0;//nivel reparacion modulo 6
						var vidaModulo2=0;//nivel reparacion modulo 2
						var vidaPaneles=0;//nivel reparacion paneles
						var vidaModulo3=0;//nivel reparacion modulo 3
						var escudos=1000;//escudos del jeep 1000
						var energia=1000;//energía del jeep
						var segundos=7599;//segundos de oxigeno 7599
						var herramientas=600;//herramientas para reparar,probando
						var derechaPresionada=false;//variable booleana de boton derecho presionado
						var izquierdaPresionada=false;//variable booleana de boton izquierdo presionado
						var arribaPresionada=false;//variable booleana de boton arriba presionado
						var abajoPresionada=false;//variable booleana de boton abajo presionado
						var recargaActivada=false;//variable booleana de botón de recarga presionado
						var movimiento=true;//variable booleana que permite movimiento
						var dibujarInicio=true;//variable para dibujar el jeep hacia arriba
						var escudosDestruidos=false;//variable booleana que controla si los escudos están destruidos
						var oxigenoAgotado=false;//variable booleana que controla si el oxigeno está agotado
						var Victoria = false;//variable booleana que controla si se ha ganado
						var Derrota = false;//variable booleana que controla si se ha perdido
						var modulo8Reparado=false;//variable booleana que controla si el modulo8 se ha reparado
						var modulo6Reparado=false;//variable booleana que controla si el modulo6 se ha reparado
						var modulo2Reparado=false;//variable booleana que controla si el modulo2 se ha reparado
						var modulo3Reparado=false;//variable booleana que controla si el modulo3 se ha reparado
						var panelesReparado=false;//variable booleana que controla si los paneles se ha reparado
						//.........................................................
						//variables de sonido 
						var reparacion = new Audio("sonido_Reparacion3.mp3");//sonido de reparacion
						var recarga_Tool =new Audio("recarga_Tools.mp3");//sonido de recarga de herramientas
						var recarga_energia=new Audio("sonido_Vida.mp3");
						//.........................................................
						//events Listeners de tecla pulsada y suelta
						document.addEventListener("keydown",keyDownHandler, false);
						document.addEventListener("keyup",keyUpHandler, false);
						//funcion de control del evento de tecla pulsada
						function keyDownHandler(e){
							if (e.key=="Right"||e.key=="ArrowRight") {	
								derechaPresionada=true;
								if((energia>0)&&(recargaActivada==false)){
								}	
								else if((energia>0)&&(recargaActivada==true)){
									energyReload();
								}	
							}
							else if(e.key=="Left"||e.key=="ArrowLeft"){
								izquierdaPresionada=true;
								if((energia>0)&&(recargaActivada==false)){
								}	
								else if((energia>0)&&(recargaActivada==true)){
									energyReload();
								}	
							}
							else if(e.key=="Up"||e.key=="ArrowUp"){
								arribaPresionada=true;
								
								if((energia>0)&&(recargaActivada==false)){
								}	
								else if((energia>0)&&(recargaActivada==true)){
									energyReload();
								}	
							}
							else if(e.key=="Down"||e.key=="ArrowDown"){
								abajoPresionada=true;
								if((energia>0)&&(recargaActivada==false)){
								}
								else if((energia>0)&&(recargaActivada==true)){
									energyReload();
								}	
							}
							else if(e.key=="r"){
								recargaActivada=true;
								energyReload();
							}
						}
						//funcion de control del evento de tecla levantada
						function keyUpHandler(e){
							if (e.key=="Right"||e.key=="ArrowRight") {
								derechaPresionada=false;
								dibujarInicio=true;
							}
							else if(e.key=="Left"||e.key=="ArrowLeft"){
								izquierdaPresionada=false;
								dibujarInicio=true;
							}
							else if(e.key=="Up"||e.key=="ArrowUp"){
								arribaPresionada=false;
								dibujarInicio=true;
							}
							else if(e.key=="Down"||e.key=="ArrowDown"){
								abajoPresionada=false;
								dibujarInicio=true;
							}
							else if(e.key=="r"){
								recargaActivada=false;
								movimiento=true;
							}
						}
						//funcion de control de recarga de herramientas
						function controlCaja(){
							if(contactoCaja&&herramientas<600){
								recarga_Tool.play();
								herramientas+=3;
								energia+=1;
							}
						}
						//controla la activación del interruptor
						function controlarInterrutor(){
							if (modulo8Reparado&&modulo6Reparado&&modulo2Reparado&&modulo3Reparado&&panelesReparado){
								console.log("interruptorListo:"+interruptorListo)
								interruptorListo=true;
							}
						}
						//cambia la variable booleana oxigenoAgotado a true si segundos llega a 0
						function oxigenLow() {
							if(segundos==0){
								oxigenoAgotado=true;
							}
						}
						//cambia la variable booleana escudosDestruidos a true si escudos llega a 0
						function shieldLow() {
							if(escudos==0){
								escudosDestruidos=true;
							}
						}
						//se produce sonido cuando el jeep está recargando
						function energyReload(){
							recarga_energia.play();
						}
						//generarMusica
						function generarMusica(){
							document.addEventListener('keydown', teclado, false);
							var reproducir =false;
							let musica = new Audio("musica.mp3");
						  //arranca la música en bucle
						  musica.addEventListener('ended', function() {
						  	this.play();
						  }, false);

						  function resumeAudio () {
						  	if (!reproducir) {
						  		reproducir = true;
						  		musica.play();	
						  	}
						  }
						  function pauseAudio () {
						  	if (reproducir) {
						  		reproducir = false;
						  		musica.pause();
						  	}
						  }
						  function teclado(objeto){
						  	var tecla = objeto.which;
						  	var num;

						  	switch (tecla){
				        		case 77: //m
				        		resumeAudio();
				        		break;
				      			case 78: //n
				      			pauseAudio();
				      			break;
				      		}
				      	}
				      }
						//detector de colisiones con el camion
						function detectorColision(){
							let colisionHorizontal=origenAstroX;
							let colisionVertical=origenAstroY;
							let camionPosicionXy=camion1X+camionWidth;
							let camionPosicionYy=camion1Y+camionHeight;
							if((colisionHorizontal>=camion1X)&&(colisionHorizontal<=camionPosicionXy)&&
								((colisionVertical+10)>=camion1Y)&&(colisionVertical<=(camionPosicionYy+10)))
							{
								escudos-=25;
							}
						}
					//control de la reparacion de los edificios
					function controlReparacion(){
						if(vidaModulo3>=300){
							modulo3Reparado=true;
						}
						if(vidaModulo6>=200){
							modulo6Reparado=true;
						}
						if(vidaModulo8>=200){
							modulo8Reparado=true;
						}
						if(vidaModulo2>=200){
							modulo2Reparado=true;
						}
						if(vidaPaneles>=350){
							panelesReparado=true;
						}
					}
					//funcion detectar colosion interruptor
					function colisionInterruptor(){
						let interruptorX=290;
						let interruptorY=570;
						var colisionIzquierda=origenAstroX;
						var colisionDerecha=origenAstroX;
						var colisionSuperior=origenAstroY+radioAstro;
						
						//colision con el interruptor por arriba
						if((colisionSuperior==(interruptorY+10))&&((interruptorX-10)<=origenAstroX)&&(origenAstroX<=(interruptorX+50))){
							interruptorGirado=true;
							origenAstroY-=2;
						}
						else{
							interruptorGirado=false;
						}
						//colision con el interruptor por la izquierda
						if((colisionIzquierda==(interruptorX-20))&&((interruptorY-10)<=origenAstroY)&&(origenAstroY<=(interruptorY+10))){
							interruptorGirado=true;
							origenAstroX-=2;
						}	
						//colision con el interruptor por la derecha
						if((colisionDerecha==(interruptorX+40))&&((interruptorY-10)<=origenAstroY)&&(origenAstroY<=(interruptorY+10))){
							interruptorGirado=true;
							origenAstroX+=2;
						}	
					}
					//funcion que dibuja interruptor
					function dibujarInterruptor(){
						let interruptorX=290;
						let interruptorY=570;
						let interruptorHeight=20;//altura del interruptor
						let interruptorWidth=40;//anchura del interruptor
						if(interruptorGirado==false){
							ctx.beginPath();
							ctx.drawImage(interruptorOff,interruptorX,interruptorY,interruptorWidth,interruptorHeight);
							ctx.closePath();
						}
						else{
							ctx.beginPath();
							ctx.drawImage(interruptorOn,interruptorX,interruptorY,interruptorWidth,interruptorHeight);
							ctx.closePath();
						}
					}	
					//funcion que dibuja el icono según los parámetros que se le pasen
					function dibujarIcono(imagen,puntox,puntoy,anchura,altura){
						ctx.beginPath();
						ctx.drawImage(imagen,puntox,puntoy,anchura,altura);
						ctx.closePath();
					}
					//funcion que dibuja iconos on / off, se puede reducir
					function dibujarIconos(){
						let iconOff=new Image();//imagen de icono apagado
						iconOff.src='pilaOff.png';
				     	let iconOn=new Image();//imagen de icono encendido
				     	iconOn.src='pilaOn.png';
				     	let icono8X=810;
				     	let icono8Y=265;
				     	let icono6X=755;
				     	let icono6Y=520;
				     	let icono2X=30;
				     	let icono2Y=440;
				     	let iconoPanelX=130;
				     	let iconoPanelY=270;
				     	let icono3X=380;
				     	let icono3Y=220;
						let iconHeight=20;//altura de los iconos on off
						let iconWidth=40;//anchura de los iconos on off

						if(panelesReparado!=true){
							dibujarIcono(iconOff,iconoPanelX,iconoPanelY,iconWidth,iconHeight);
						}
						else{
							dibujarIcono(iconOn,iconoPanelX,iconoPanelY,iconWidth,iconHeight);
						}
						if(modulo8Reparado!=true){
							dibujarIcono(iconOff,icono8X,icono8Y,iconWidth,iconHeight);
						}
						else{
							dibujarIcono(iconOn,icono8X,icono8Y,iconWidth,iconHeight);
						}
						if(modulo6Reparado!=true){
							dibujarIcono(iconOff,icono6X,icono6Y,iconWidth,iconHeight);
						}
						else{
							dibujarIcono(iconOn,icono6X,icono6Y,iconWidth,iconHeight);
						}
						if(modulo2Reparado!=true){
							dibujarIcono(iconOff,icono2X,icono2Y,iconWidth,iconHeight);
						}
						else{
							dibujarIcono(iconOn,icono2X,icono2Y,iconWidth,iconHeight);
						}
						if(modulo3Reparado!=true){
							dibujarIcono(iconOff,icono3X,icono3Y,iconWidth,iconHeight);
						}
						else{
							dibujarIcono(iconOn,icono3X,icono3Y,iconWidth,iconHeight);
						}
					}
						//reparacion de modulos y paneles
						function ejecutarReparacion(){
							energia+=1;
							herramientas--;
							reparacion.play();
						}
						//detector de colisión con los diferentes objetos del escenario, renombrar
						function detectorColisionEscenario(){
							let colisionIzquierda=origenAstroX;
							let colisionDerecha=origenAstroX;
							let colisionSuperior=origenAstroY+radioAstro;
							let colisionInferior=origenAstroY-radioAstro;
							let piedra7PosicionYy=piedra7Y+piedra7Height;
							let piedra7PosicionXy=piedra7X+piedra7Width;
							let piedra4PosicionYy=piedra4Y+piedra4Height;
							let piedra4PosicionXy=piedra4X+piedra4Width;
							let modulo8PosicionXy=modulo8X+modulo8Width;
							let modulo8PosicionYy=modulo8Y+modulo8Height;
							let panelesPosicionYy=panelesY+panelesHeight;
							let panelesPosicionXy=panelesX+panelesWidth;
							let modulo6PosicionXy=modulo6X+modulo6Width;
							let modulo6PosicionYy=modulo6Y+modulo6Height;
							let modulo2PosicionXy=modulo2X+modulo2Width;
							let modulo2PosicionYy=modulo2Y+modulo2Height;
							let modulo3PosicionXy=modulo3X+modulo3Width;
							let cajaPosicionXy=cajaX+cajaWidth;
							let cajaPosicionYy=cajaY+cajaHeight;

							//detección de colisión con la piedra 7 por la izquierda
							if((colisionIzquierda==(piedra7X-20))&&((piedra7Y-10)<=origenAstroY)&&(origenAstroY<=(piedra7PosicionYy+10))){
								origenAstroX-=2;
							}
							//detección de colisión con la piedra 7 por la derecha
							else if((colisionDerecha==(piedra7X+60))&&((piedra7Y-10)<=origenAstroY)&&(origenAstroY<=(piedra7PosicionYy+10))){
								origenAstroX+=2;
							}
							//detección de colisión con la piedra 7 por arriba
							else if((colisionSuperior==piedra7Y+10)&&((piedra7X-20)<=origenAstroX)&&(origenAstroX<=(piedra7PosicionXy+20))){
								origenAstroY-=2;
							}
							//detección de colisión con la piedra 7 por abajo
							else if((colisionInferior==piedra7Y+30)&&((piedra7X-20)<=origenAstroX)&&(origenAstroX<=(piedra7PosicionXy+20))){
								origenAstroY+=2;
							}
								//detección de colisión con la piedra 4 por abajo
								else if((colisionInferior==piedra4Y+30)&&((piedra4X-20)<=origenAstroX)&&(origenAstroX<=(piedra4PosicionXy+10))){
									origenAstroY+=2;
								}
							//detección de colisión con la piedra 4 por la derecha
							else if((colisionDerecha==(piedra4X+60))&&((piedra4Y-10)<=origenAstroY)&&(origenAstroY<=(piedra4PosicionYy+10))){
								origenAstroX+=2;
							}
							//detección de colisión con el modulo8 por la izquierda
							else if((colisionIzquierda==(modulo8X-10))&&((modulo8Y-10)<=origenAstroY)&&(origenAstroY<=(modulo8PosicionYy-10))){
								origenAstroX-=2;
								if(!modulo8Reparado){
									vidaModulo8++;
									ejecutarReparacion();
								}
							}
							//detección de colisión con el modulo8 por abajo
							else if((colisionInferior==(modulo8Y+30))&&((modulo8X-10)<=origenAstroX)&&(origenAstroX<=(modulo8PosicionXy+60))){
								origenAstroY+=2;
								if(!modulo8Reparado){
									vidaModulo8++;
									ejecutarReparacion();
								}
							}
							//deteccion de colision con paneles por abajo
							else if((colisionInferior==(panelesY-10))&&((panelesX-20)<=origenAstroX)&&(origenAstroX<=panelesPosicionXy)){
								origenAstroY+=2;
								if(!panelesReparado){
									vidaPaneles++;
									ejecutarReparacion();
								}
							}
							//detección de colisión con paneles por la derecha
							else if((colisionDerecha==(panelesY-80))&&((panelesY-10)<=origenAstroY)&&(origenAstroY<=(panelesPosicionYy+10))){
								origenAstroX+=2;
								if(!panelesReparado){
									vidaPaneles++;
									ejecutarReparacion();
								}
							}
							//detección de colisión con el modulo 6 por arriba
							else if((colisionSuperior==modulo6Y+10)&&(modulo6X<=origenAstroX)&&(origenAstroX<=(modulo6PosicionXy+45))){
								origenAstroY-=2;
								if(!modulo6Reparado){
									vidaModulo6++;
									ejecutarReparacion();
								}
							}
							//detección de colisión con el modulo 6 por la izquierda
							else if(colisionIzquierda==modulo6X&&((modulo6Y-10)<=origenAstroY)&&(origenAstroY<=(modulo6PosicionYy+10))){
								origenAstroX-=2;
								if(!modulo6Reparado){
									vidaModulo6++;
									ejecutarReparacion();
								}
							}
							//detección de colisión con el modulo 6 por la derecha
							else if((colisionDerecha==(modulo6X+130))&&((modulo6Y-10)<=origenAstroY)&&(origenAstroY<=(modulo6PosicionYy+10))){
								origenAstroX+=2;
								if(!modulo6Reparado){
									vidaModulo6++;
									ejecutarReparacion();
								}
							}
							//detección de colisión con el modulo 2 por la derecha
							else if((colisionDerecha==(modulo2X+100))&&((modulo2Y-60)<=origenAstroY)&&(origenAstroY<=(modulo2PosicionYy-40))){
								origenAstroX+=2;
								if(!modulo2Reparado){
									vidaModulo2++;
									ejecutarReparacion();
								}
							}
							//detección de colisión con el modulo 2 por abajo
							else if((colisionInferior==(modulo2Y-10))&&((modulo2X-20)<=origenAstroX)&&(origenAstroX<=(modulo2PosicionXy+30))){
								origenAstroY+=2;
								if(!modulo2Reparado){
									vidaModulo2++;
									ejecutarReparacion();
								}
							}
							//detección de colisión con el modulo 2 por arriba
							else if((colisionSuperior==(modulo2Y-30))&&((modulo2X-20)<=origenAstroX)&&(origenAstroX<=(modulo2PosicionXy+30))){
								origenAstroY-=2;
								if(!modulo2Reparado){
									vidaModulo2++;
									ejecutarReparacion();
								}
							}
							//deteccion de colision con el modulo 3 por abajo
							else if(colisionInferior==270&&(modulo3X<=origenAstroX)&&(origenAstroX<=(modulo3PosicionXy+10))){
								origenAstroY+=2;
								if(!modulo3Reparado){
									vidaModulo3++;
									ejecutarReparacion();
								}
							}
							//detección de colisión con la caja por arriba
							else if((colisionSuperior==(cajaY+10))&&(cajaX<=origenAstroX)&&(origenAstroX<=cajaPosicionXy)){
								origenAstroY-=2;
								contactoCaja=true;
								controlCaja();
							}
							//detección de colisión con la caja por la izquierda
							else if((colisionIzquierda==cajaX-10)&&((cajaY-10)<=origenAstroY)&&(origenAstroY<=(cajaPosicionYy+10))){
								origenAstroX-=2;
								contactoCaja=true;
								controlCaja();
							}
							//detección de colisión con la caja por la derecha
							else if((colisionDerecha==(cajaX+0))&&((cajaY-10)<=origenAstroY)&&(origenAstroY<=(cajaPosicionYy+10))){
								origenAstroX+=2;
								contactoCaja=true;
								controlCaja();
							}
						}
						//mecánica de cuenta atras
						function cuentaAtras(){	
							if(segundos>0){	
								contador=segundos-=1.66;
							}
							else{
								segundos=0;
							}
						}
						//control de las condiciones de derrota
						function controlaDerrota(){
							if(escudosDestruidos==true||oxigenoAgotado==true){
								Derrota=true;
							}
						}
						//control de las condiciones de victoria
						function controlaVictoria(){
							if(modulo8Reparado&&modulo6Reparado&&modulo2Reparado&&modulo3Reparado&&panelesReparado&&interruptorGirado){
								Victoria=true;
							}
						}
						//manda mensaje de exito
						function Exito(){
							if(Victoria==true){
								alert("GOOD NEWS\n THE BASE HAS BEEN REPAIRED");
								document.location.reload();
							}
						}
						//manda mensaje de fracaso
						function Fracaso(){
							if(Derrota==true){
								alert("BAD NEWS\nTHE BASE IS DAMAGED");
								document.location.reload();
							}
						}
						//dibujar el astrunauta según la posición que tenga, renombrar	
						function dibujarAstronautaInicio(){
							if(dibujarInicio){
								ctx.beginPath();
								ctx.arc(origenAstroX,origenAstroY,radioAstro,0,Math.PI*2);
								ctx.drawImage(astroUp,origenAstroX-10,origenAstroY-15,20,20);//dibujo del astronauta quieto
								ctx.closePath();
							}
						}
						//dibujo del astronauta
						function dibujaAstronauta(imagen,posicionX,posicionY,anchura,altura){
							ctx.beginPath();
							ctx.drawImage(imagen,posicionX,posicionY,anchura,altura);
							ctx.closePath();
						}
						//animación del movimiento del astronauta
						function dibujarJeep(){
							var a;
							var tiempo;
							var tiempo2;
							var tiempo3;
							if(arribaPresionada){
								dibujarInicio=false;
								a=Math.round(Math.random()*2);
								switch (a){
									case 0:
									tiempo=2500;
									while(tiempo>0){
										tiempo--;
										dibujaAstronauta(imagen8,origenAstroX-10,origenAstroY-15,Astro1XWidth,Astro1XHeight);
									}
									break;
									case 1:
									tiempo2=2500;
									while(tiempo2>0){
										tiempo2--;
										dibujaAstronauta(imagen9,origenAstroX-10,origenAstroY-15,Astro1XWidth,Astro1XHeight);
									}
									break;
									default:
									tiempo3=1000;
									{
										while(tiempo3>0){
											tiempo3--;
											dibujaAstronauta(imagen10,origenAstroX-10,origenAstroY-15,Astro1XWidth,Astro1XHeight);
										}
									}
								}
							}
							if(abajoPresionada){
								dibujarInicio=false;
								a=Math.round(Math.random()*2);
								switch (a){
									case 0:
									tiempo=2500;
									while(tiempo>0){
										tiempo--;
										dibujaAstronauta(imagen11,origenAstroX-10,origenAstroY-15,Astro1XWidth,Astro1XHeight);
									}
									break;
									case 1:
									tiempo2=2500;
									while(tiempo2>0){
										tiempo2--;
										dibujaAstronauta(imagen12,origenAstroX-10,origenAstroY-15,Astro1XWidth,Astro1XHeight);
									}
									break;
									default:
									tiempo3=1000;
									{
										while(tiempo3>0){
											tiempo3--;
											dibujaAstronauta(imagen13,origenAstroX-10,origenAstroY-15,Astro1XWidth,Astro1XHeight);
										}
									}
								}
							}
							if(izquierdaPresionada){
								dibujarInicio=false;
								a=Math.round(Math.random()*2);
								switch (a){
									case 0:
									tiempo=2500;
									while(tiempo>0){
										tiempo--;
										dibujaAstronauta(imagen5,origenAstroX,origenAstroY-15,Astro1XWidth,Astro1XHeight);
									}
									break;
									case 1:
									tiempo2=2500;

									while(tiempo2>0){
										tiempo2--;
										dibujaAstronauta(imagen6,origenAstroX,origenAstroY-15,Astro1XWidth,Astro1XHeight);
									}
									break;
									default:
									tiempo3=1000;
									{
										while(tiempo3>0){
											tiempo3--;
											dibujaAstronauta(imagen7,origenAstroX,origenAstroY-15,Astro1XWidth,Astro1XHeight);
										}
									}
								}
							}
							if(derechaPresionada){
								dibujarInicio=false;
								a=Math.round(Math.random()*2);
								switch (a){
									case 0:
									tiempo=2500;
									while(tiempo>0){
										tiempo--;
										dibujaAstronauta(imagen2,origenAstroX,origenAstroY-15,Astro1XWidth,Astro1XHeight);
									}
									break;
									case 1:
									tiempo2=2500;
									while(tiempo2>0){
										tiempo2--;
										dibujaAstronauta(imagen3,origenAstroX,origenAstroY-15,Astro1XWidth,Astro1XHeight);
									}
									break;
									default:
									tiempo3=1000;
									{
										while(tiempo3>0){
											tiempo3--;
											dibujaAstronauta(imagen4,origenAstroX,origenAstroY-15,Astro1XWidth,Astro1XHeight);
										}
									}
								}
							}
						}
					//dibuja dialogo si quedan pocas herramientas
					function dibujarDialogoHerramientas(){
						if(herramientas<=100){
							ctx.beginPath();
							ctx.drawImage(dialogoTools,(origenAstroX-30),(origenAstroY-100),dialogo1Width,dialogo1Height);
							ctx.closePath();
						}
					}
					//dibuja dialogo si queda poca stamina
					function dibujarDialogoStamina(){
						if(energia<=100){
							ctx.beginPath();
							ctx.drawImage(dialogoStamina,(origenAstroX-30),(origenAstroY-100),dialogo1Width,dialogo1Height);
							ctx.closePath();
						}
					}
						//controla máximos y mínimos de herramientas
						function controlarHerramientas(){
							if(herramientas<0){
								herramientas=0;
							}
							else if(herramientas>600){
								herramientas=600;
							}
						}
						//mecanica de control de escudos
						function controlarEscudos(){
							if(escudos<0){
								escudos=0;
								movimiento=false;
							}
							if(escudos>1000){
								escudos=1000;
							}
						}
						//controla máximos y mínimos de energía y detiene al astronauta si está con energía 0
						function controlarEnergia(){
							if(energia<0){
								energia=0;
								movimiento=false;
							}
							else if(energia>1000){
								energia=1000;
							}
						}
						//función que controla la creación de Recurso1
						function controlarRecurso1(){
							if(recurso1dibujar==true){
								dibujarRecurso1();
							}
							else{
								recurso1dibujar=false;
							}
						}
						//funcion para dibujar marcadores
						function dibujarMarcador(a,b,c){
							ctx.font=("14px Arial bolder");
							ctx.fillStyle="Blue";
							ctx.fillText(a+b,(canvas.width-c),30+" ");
						}	
						//marcados de herramientas
						function dibujarHerramientas(){
							controlarHerramientas();
							dibujarMarcador("Tools: ",herramientas,400);
						}
						//marcador de escudos
						function dibujarEscudo(){
							controlarEscudos();
							dibujarMarcador("Life: ",escudos,100);
						}
						//marcador de energía
						function dibujarEnergia(){
							controlarEnergia();
							dibujarMarcador("Stamina: ",energia,200);
						}
						//marcador de tiempo
						function dibujarTiempo(){
							cuentaAtras();
							ctx.font=("14px Arial bolder");
							ctx.fillStyle="Blue";
							ctx.fillText("O2 time: "+Math.trunc(segundos/100),canvas.width-300,30+" ");
						}
						//animación del camion, cambiar nombre a la funcion
						function dibujarCamion(){
							if(dx>0){
								ctx.beginPath();
								ctx.drawImage(vehiculoDe,camion1X,camion1Y,camionWidth,camionHeight);
								ctx.closePath();
							}
							else{
								ctx.beginPath();
								ctx.drawImage(vehiculoIz,camion1X,camion1Y,camionWidth,camionHeight);
								ctx.closePath();
							}
						}
						function draw(){
							controlaDerrota();
							controlaVictoria();
							Exito();
							Fracaso();
							ctx.clearRect(0,0,canvas.width,canvas.height);
							dibujarJeep(); 
							dibujarAstronautaInicio();
							dibujarCamion();
							colisionInterruptor();
							controlarInterrutor();
							dibujarInterruptor();
							dibujarIconos();
							dibujarDialogoHerramientas();
							dibujarDialogoStamina();
							detectorColision();
							detectorColisionEscenario();
							dibujarHerramientas();
							dibujarEscudo();
							dibujarEnergia();
							controlReparacion();
							dibujarTiempo();
							oxigenLow();
							shieldLow();//renombrar

							camion1X+=dx;//aumento de la variable del camion

							//rebote del camion1 en borde izquierdo y derecho
							if(camion1X+dx>(canvas.width-60)||camion1X+dx<0){
								if(dx<=-4||dx>=4){
									dx=-dx/1.5;
								}
								else{
									dx=-dx*Math.random()*3.5;
								}
							}
							//paraliza al astronauta cuando está cargando
							if(recargaActivada){
								energia+=3;
								movimiento=false;
							}
							else{
								if(movimiento==true){
									//movimiento del astronauta a la derecha y detección de borde derecho
									if (derechaPresionada&&origenAstroX<(canvas.width-20)) {
										origenAstroX+=2;
										energia-=1;
									}
									//movimiento del astronauta a la izquierda y detección de borde izquierdo
									else if(izquierdaPresionada&&(origenAstroX-8>0)){
										origenAstroX-=2;
										energia-=1;	
									}
									//movimiento del astronauta y detección de borde superior
									else if(arribaPresionada&&origenAstroY+radioAstro>310){
										origenAstroY-=2;
										energia-=1;
									}
									//movimiento del astronauta hacia abajo y detección de borde inferior
									else if(abajoPresionada&&origenAstroY<(canvas.height-10)){
										origenAstroY+=2;
										energia-=1;
									}
								}
							}
							requestAnimationFrame(draw);//se llama recursivamente
						}
						generarMusica();
						draw();