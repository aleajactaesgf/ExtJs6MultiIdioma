/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('NereaML.Application', {
    extend: 'Ext.app.Application',

    name: 'NereaML',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
    	//locale = location.href.match(/locale=([\w-]+)/);
    	//locale = (locale && locale[1]) || 'es';
    	/*Ext.Ajax.request({
            url: 'app/labels/labels-'+locale+'.json',            
            callback: function (options, success, response) {            	
                var data = Ext.decode(response.responseText, true);
                Ext.override(NereaML.view.Labels, data);
                Ext.create('NereaML.view.main.Main');
            }
        });*/
//    	var url= 'app/labels/Labels-'+locale+'.js';
//    	
//    	Ext.Loader.loadScript({
//    		url: url,
//    		onLoad: function (options) {
//    			Ext.create('NereaML.view.main.Main');
//    		}
//    	});
    	
    	// It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
       // var loggedIn;
        firebase.auth().onAuthStateChanged(function(user) {
        	
        	  if (user) {
        	    // User is signed in.
        		  Ext.create({
        	            xtype: 'app-main'
        	        });
        	  } else {
        		  Ext.create({
        	            xtype: 'login'
        	        });
        	  }
        	});
        // Check to see the current value of the localStorage key
        //loggedIn = localStorage.getItem("TutorialLoggedIn");
        //debugger
        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        
    	
    	
    },

    onAppUpdate: function () {
    	window.location.reload();
        /*Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );*/
    }
});
