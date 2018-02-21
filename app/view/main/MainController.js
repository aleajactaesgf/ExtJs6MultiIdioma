/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('NereaML.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    selectIdioma: function( combo, record, eOpts ){
    	window.location = location.pathname + '?locale=' + combo.getValue();
    },
    onLogOut:function(){
    	firebase.auth().signOut().then(function() {
    		  // Sign-out successful.
    		}).catch(function(error) {
    		  // An error happened.
    		});
    },
    onSwitchLanguage: function( button ){
    	//window.location = location.pathname+ '?locale=' + button.getValue();;
    	localStorage.setItem("userLanguage",button.getValue());
    	locale = localStorage.getItem("userLanguage");
    	location.reload();
    },
    cargarStore: function( grid ){
    	var datos = {};
    	var store = grid.getStore();
    	/*db.collection("users").get().then((querySnapshot) => {
    	    querySnapshot.forEach((doc) => {    	    	
    	        //console.log(`${doc.id} => ${doc.data()}`);
    	        console.log(doc.data());
    	        store.loadRawData(doc.data(),true);    	        
    	    });
    	});*/
    },
    beforeCambioPestania: function( tabPanel, newCard, oldCard, eOpts ){
    	let me = this;
    	let ref = me.getReferences();
    	let mainlist = ref.mainlist;
    	let widgetA = ref.widgetA;
    	let store = mainlist.getStore();
    	let arrSelected = ref.mainlist.getSelectionModel().getSelection();
    	
    	if(arrSelected.length === 1){
    		widgetA.getViewModel().setData(arrSelected[0].getData());
    		return true;
    	}else{
    		if(store.getCount() === 0){
    			Ext.Msg.show({
    	 		    title:NereaML.view.Labels.informacion,
    	 		    closable : false,
    	 		    msg: NereaML.view.Labels.desInfAddUser,
    	 		    buttons: Ext.MessageBox.OK,
    	 		    icon: Ext.MessageBox.INFO
    	 		});
    		}else{
    			Ext.Msg.show({
    	 		    title:NereaML.view.Labels.informacion,
    	 		    closable : false,
    	 		    msg: NereaML.view.Labels.desInfSelReg,
    	 		    buttons: Ext.MessageBox.OK,
    	 		    icon: Ext.MessageBox.INFO
    	 		});
    		}
    		
    		return false;
    	}
    	
    	var view = me.getView();
    	if(!view.getCambiarTabpanel()){
    	    view.setCambiarTabpanel(true);
    	    return false;
    	}
        }
});
