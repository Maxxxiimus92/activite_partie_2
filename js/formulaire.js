$(function(){
	$('#btn1').click(function(){
		/* L'intégration du texte d'aide dans la partie droite de l'écran doit se faire via une balise <div>, insérée dans les trois méthodes after() */
		$('hr').after('<div id="conteneur">Texte du label <input type="text" id="tex"><button id="btnok">OK</button><button id="btnannuler">Annuler</button><div id="consigne"></div></div>');
		/* L'affichage du texte d'aide se fait juste après la méthode after() pour chacun des boutons. Pour le bouton 1 */
		$('#consigne').load('aide.htm #aideLabel');
		$('.btnprincipal').attr('disabled','disabled');
		$('#conteneur').hide().fadeIn(2000);
		$('#tex').focus();
		$('#btnok').click(function(){
			var lid =  '<span>' + $('#tex').val() + '</span>';
			$('#gauche').append(lid);
			$('#conteneur').fadeOut(2000,function(){
				$('#conteneur').remove();
				$('.btnprincipal').removeAttr('disabled');Me
			});
		});
		$('#btnannuler').click(function(){
			$('#conteneur').fadeOut(2000,function(){
			$('#conteneur').remove();
			$('.btnprincipal').removeAttr('disabled');
			});
		});  
	});

	$('#btn2').click(function(){
		$('hr').after('<div id="conteneur">id de la zone de texte <input type="text" id="tex"><button id="btnok">OK</button><button id="btnannuler">Annuler</button><div id="consigne"></div></div>');
		$('#consigne').load('aide.htm #aideZoneTexte');
		$('.btnprincipal').attr('disabled','disabled');
		$('#conteneur').hide().fadeIn(2000);
		$('#tex').focus();
		$('#btnok').click(function(){
			var lid =  '<input type="text" id="' + $('#tex').val() + '"><br>';
			$('#gauche').append(lid);
			$('#conteneur').fadeOut(2000,function(){
				$('#conteneur').remove();
				$('.btnprincipal').removeAttr('disabled');
			});
		});
		$('#btnannuler').click(function(){
			$('#conteneur').fadeOut(2000,function(){
				$('#conteneur').remove();
				$('.btnprincipal').removeAttr('disabled');
			});
		});  
	});

	$('#btn3').click(function(){
		$('hr').after('<div id="conteneur">Texte du bouton <input type="text" id="tex"><button id="btnok">OK</button><button id="btnannuler">Annuler</button><div id="consigne"></div></div>');
		$('#consigne').load('aide.htm #aideBouton');
		$('.btnprincipal').attr('disabled','disabled');
		$('#conteneur').hide().fadeIn(2000);
		$('#tex').focus();
		$('#btnok').click(function(){
			var lid =  '<button>' + $('#tex').val() + '</button>';
			$('#gauche').append(lid);
			$('#conteneur').fadeOut(2000,function(){
				$('#conteneur').remove();
				$('.btnprincipal').removeAttr('disabled');
			});
		});
		$('#btnannuler').click(function(){
			$('#conteneur').fadeOut(2000,function(){
				$('#conteneur').remove();
				$('.btnprincipal').removeAttr('disabled');
			});
		});  
	});
});
