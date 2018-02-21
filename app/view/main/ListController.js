/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('NereaML.view.main.ListController', {
	extend: 'NereaML.view.main.MainController',

	alias: 'controller.list',
	init: function () {
		let store = this.getView().getStore();
		
		this.usersRef = NereaML.Firebase.database.ref('users');
		

		this.usersRef.orderByChild('userAlta').on('value', function(snapshot) {
			let arrUser = [];	       		
			snapshot.forEach(function(user) {

				let userAux = {};
				userAux = user.val();
				userAux.id = user.key;
				arrUser.push(userAux);
			});
			store.loadData(arrUser);
		});
	},
	onAddClick: function () {
		var me = this;
		var grid = me.getView();
		var store = grid.getStore();
		var plugin = grid.findPlugin('rowediting');
		var model = store.config.model;
		var record = Ext.create(model);

		store.insert(0, record);
		plugin.startEdit(record, 0);
	},
	onEdicionClick: function( tableview, rowIndex, colIndex, item, e, record, row ){
		 tableview.grid.findPlugin('rowediting').startEdit(record,0);
	},
	onEliminarClick: function( tableview, rowIndex, colIndex, item, e, record, row ){
		
		Ext.Msg.show({
 		    title:NereaML.view.Labels.informacion,
 		    closable : false,
 		    msg: NereaML.view.Labels.desInfoEliminar,
 		    buttons: Ext.MessageBox.YESNO,
 		    icon: Ext.MessageBox.INFO,
 		    fn:function( btn ){
 		    	if(btn === 'yes'){
 		    		const removeUSerRef = NereaML.Firebase.database.ref('users/'+record.getId());		
 		    		removeUSerRef.remove().
 		    		then( data => {
 		    			console.log("Document removed!");
 		    		})
 		    		.catch( error => {
 		    			Ext.Msg.show({
 		    				title:NereaML.view.Labels.error,
 		    				closable : false,
 		    				msg: NereaML.view.Labels.desErrorServer+': '+error,
 		    				buttons: Ext.MessageBox.OK,
 		    				icon: Ext.MessageBox.ERROR
 		    			});
 		    		});
 		    	}
 		    }
 		});
		
		
		
		 //tableview.grid.findPlugin('rowediting').startEdit(record,0);
		//var grid = tableview.grid;
		//var store = grid.getStore();		
		
		/*Ext.Ajax.request({
			url:'https://nereaml-64b79.firebaseio.com/users/'+record.getId()+'.json',
		    method:'DELETE',
		    scope: this,
		    parametrosControl:{
		    	store:store,
		    	record:record		    	
		    },
		    success: function(response, opts) {
		         //var obj = Ext.decode(response.responseText);
		         //console.dir(obj);
		         opts.parametrosControl.store.reload();
		         
		     },
		    failure: function(response, opts) {
		    	 Ext.Msg.show({
		 		    title:NereaML.view.Labels.error,
		 		    closable : false,
		 		    msg: NereaML.view.Labels.desErrorServer,
		 		    buttons: Ext.MessageBox.OK,
		 		    icon: Ext.MessageBox.ERROR
		 		});
		     }
		 });*/
	},
	editRowEditing: function ( editor, context, eOpts ) {
		var me = this;
	
		var grid = context.grid;
		var store = grid.getStore();
		var record = context.record;
		var form = editor.getEditor().getForm();
		var urlApi = '';
		var params = {};
		var metodo = '';
		
		
		
		params = editor.getEditor().getForm().getValues();
		
		if ( record.phantom ){//Alta
			 /*urlApi = 'https://nereaml-64b79.firebaseio.com/users.json';
			 metodo = 'POST';*/
			 
			 var fecha = Ext.Date.format(new Date(), 'Y-m-d H:i:s.u');
			 params.fecAlta = fecha;
			 params.fecModificacion= fecha;
			 params.userAlta= firebase.auth().currentUser.email;
			 
			 const newUser = me.usersRef.push();
			 newUser.set(params).
			 then( data => {
				    //console.log("Document successfully written!");
			 })
			 .catch( error => {
				 //console.error("Error writing document: ", error);
				 record.reject();
				 grid.findPlugin('rowediting').startEdit(record, 0);		 

				 Ext.Msg.show({
					 title:NereaML.view.Labels.error,
					 closable : false,
					 msg: NereaML.view.Labels.desErrorServer+': '+error,
					 buttons: Ext.MessageBox.OK,
					 icon: Ext.MessageBox.ERROR
				 });
			 });
			 
			 
			 
		}else{//Edicion
			//urlApi = 'https://nereaml-64b79.firebaseio.com/users/'+record.getId()+'.json';
			//metodo = 'PATCH';
			const editUSerRef = NereaML.Firebase.database.ref('users/'+record.getId());

			var fecha = Ext.Date.format(new Date(), 'Y-m-d H:i:s.u');
			//params.fecAlta = Ext.Date.format(record.get('fecAlta'), 'Y-m-d H:i:s.u');
			params.fecModificacion= fecha;
			
			editUSerRef.update(params).
			 then( data => {
				    console.log("Document successfully written!");
			 })
			 .catch( error => {
				//console.error("Error writing document: ", error);
				 record.reject();
				 grid.findPlugin('rowediting').startEdit(record, 0);		 

				 Ext.Msg.show({
					 title:NereaML.view.Labels.error,
					 closable : false,
					 msg: NereaML.view.Labels.desErrorServer+': '+error,
					 buttons: Ext.MessageBox.OK,
					 icon: Ext.MessageBox.ERROR
				 });
			 });
		}
		//console.log(urlApi,metodo);
		//console.log(params);


		/*Ext.Ajax.request({
			url:urlApi,
		    method:metodo,
		    scope: this,
		    params:JSON.stringify(params),
		    parametrosControl:{
		    	grid:grid,
		    	record:record		    	
		    },
		    success: ()=>store.reload(),
		    failure: function(response, opts) {
		    	var record = opts.parametrosControl.record;
		    	record.reject();
		    	var grid = opts.parametrosControl.grid;
 		    	var plugin = grid.findPlugin('rowediting');
 		    	plugin.startEdit(record, 0);
		    	 
		         Ext.Msg.show({
		 		    title:NereaML.view.Labels.error,
		 		    closable : false,
		 		    msg: NereaML.view.Labels.desErrorServer,
		 		    buttons: Ext.MessageBox.OK,
		 		    icon: Ext.MessageBox.ERROR
		 		});
		     }
		 });
		*/
	},
	
	cancelEdit: function(editor, context, eOpts){
		var grid = context.grid;
		var store = grid.getStore();
		var record = context.record;
		
		if (record.phantom){
			store.remove(record);
		}
	}
});
