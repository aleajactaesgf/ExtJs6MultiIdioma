Ext.define('NereaML.view.authentication.AuthenticationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //TODO: implement central Facebook OATH handling here

    onFaceBookLogin : function() {
        this.redirectTo('dashboard', true);
    },

    onLoginButton: function() {
        //this.redirectTo('dashboard', true);
    	let view = this.getView();
    	let values = this.getView().getForm().getValues();
    	firebase.auth().signInWithEmailAndPassword( values.userid, values.password ).
    	then( data => {
    	    //console.log('Usuario Registrado Correctamente');
    		view.ownerCt.destroy();
    		/*Ext.create({
                xtype: 'app-main'
            });*/
    	}).
    	catch( (error) => {
    		  var errorCode = error.code;
    		  var errorMessage = error.message;
    		  
    		  Ext.Msg.show({
					 title:NereaML.view.Labels.error,
					 closable : false,
					 msg: errorCode+': '+errorMessage,
					 buttons: Ext.MessageBox.OK,
					 icon: Ext.MessageBox.ERROR
				 });
    		  
    		});
    },

    onLoginAsButton: function() {
        //this.redirectTo('login', true);
    	this.getView().destroy();
    	Ext.create({
            xtype: 'login'
        });
    },

    onNewAccount:  function() {
        //this.redirectTo('register', true);
    	this.getView().destroy();
    	Ext.create({
          xtype: 'register'
      });
    },

    onSignupClick:  function() {
        //this.redirectTo('dashboard', true);
    	let values = this.getView().getForm().getValues();
    	let view = this.getView(); 
    	
    	firebase.auth().createUserWithEmailAndPassword(values.email, values.password).
    	then(function(){
    	    //console.log('Usuario Registrado Correctamente');
    		Ext.ComponentQuery.query('login')[0].destroy();
    		Ext.ComponentQuery.query('register')[0].destroy();
    		
    	}).catch(function(error) {
    		   console.log(error.code);
    		   console.log(error.message);
    	});
    },

    onResetClick:  function() {
        this.redirectTo('dashboard', true);
    }
});