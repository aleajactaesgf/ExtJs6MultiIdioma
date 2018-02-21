/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('NereaML.view.widgets.WidgetsController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.widgets',

    onFocusUploadButton: function(filefield, eOpts) {
        // Al resetear el formulario pierde estos valores
        // Al hacer focus se le añade estos valores
    	filefield.fileInputEl.set({
            multiple: true
        });
    },
    onChangeUploadButton: function(filefield, value, eOpts) {
    	let me  = this;
    	let view = me.getView();
    	let viewModel = view.getViewModel();
    	let data = viewModel.getData();
    	let refView = me.getReferences();
    	let progressbar = refView.progressbar;
    	let imageView = refView.imageView;
    	
    	const file = filefield.fileInputEl.dom.files[0];
    	const storageRef = NereaML.Firebase.storage.ref(`/fotosNereaML/${data.id}/${file.name}`);
    	
    	//Creamos una tarea
    	const task = storageRef.put(file);
    	
    	viewModel.set('subiendo',true);
    	
    	task.on('state_changed', snapshot => {
    		let porUno = ( snapshot.bytesTransferred / snapshot.totalBytes );
    		let percentage = porUno * 100;
    		progressbar.updateProgress( porUno, NereaML.view.Labels.progressbarUp+' '+percentage+'%');
    	}, error =>{
    		viewModel.set('subiendo',false);
    		console.error( error.message );
    	}, () =>{
    		progressbar.updateProgress( 1, NereaML.view.Labels.progressbarUp+' '+'100%');
    		
    		//Actualizar datos viewmodel y Firebase
    		viewModel.set('subiendo',false);
    		viewModel.set('urlFoto', task.snapshot.downloadURL);
    		const editUSerRef = NereaML.Firebase.database.ref('users/'+data.id);
    		var params = {};
    		params.urlFoto = task.snapshot.downloadURL;
    		
    		editUSerRef.update(params).
			 then( data => {
				    console.log("Document successfully written!");
			 })
			 .catch( error => {
				//console.error("Error writing document: ", error);

				 Ext.Msg.show({
					 title:NereaML.view.Labels.error,
					 closable : false,
					 msg: NereaML.view.Labels.desErrorServer+': '+error,
					 buttons: Ext.MessageBox.OK,
					 icon: Ext.MessageBox.ERROR
				 });
			 });
    		
    	});
    }
});
