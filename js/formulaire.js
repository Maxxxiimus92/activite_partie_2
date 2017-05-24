$(function(){
	$('#btn1').click(function(){
		$('hr').after('<div id="conteneur">Texte du label <input type="text" id="tex"><button id="btnok">OK</button><button id="btnannuler">Annuler</button></div>');
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
		$('hr').after('<div id="conteneur">id de la zone de texte <input type="text" id="tex"><button id="btnok">OK</button><button id="btnannuler">Annuler</button></div>');
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
	});

	$('#btn3').click(function(){
		$('hr').after('<div id="conteneur">Texte du bouton <input type="text" id="tex"><button id="btnok">OK</button><button id="btnannuler">Annuler</button></div>');
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
