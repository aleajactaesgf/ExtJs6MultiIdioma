Ext.define('NereaML.Firebase', {
	singleton : true,    
	storage : null,
	storageRef : null,
	fotosNereaMLRef:null,
	database:null,
	config :{
		apiKey: "",
		authDomain: "",
		databaseURL: "",
		projectId: "",
		storageBucket: "",
		messagingSenderId: ""
	},
	constructor : function(){
		this.callParent();
		firebase.initializeApp(this.config);
		this.database = firebase.database();
		//Get a reference to the storage service, which is used to create references in your storage bucket
		this.storage =  firebase.storage();
		// Create a storage reference from our storage service
		this.storageRef = this.storage.ref();
		//Create a child reference
		this.fotosNereaMLRef = this.storageRef.child('/Ruta a los documentos');
    }

});