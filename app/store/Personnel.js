Ext.define('NereaML.store.Personnel', {
	extend: 'Ext.data.Store',
	alias: 'store.personnel',
	model: 'NereaML.model.User'//,
//	autoLoad: true,
//	proxy: {
//		type: 'ajax',
//		noCache:false,
//		pageParam: undefined,
//		startParam: undefined,
//		limitParam: undefined,
//		url: 'https://nereaml-64b79.firebaseio.com/users.json',
//		//url:'https://firestore.googleapis.com/v1beta1/projects/nereaml-64b79/databases/(default)/documents/users',
//		reader: {
//			type: 'json',
//			/*rootProperty: function(data){
//				return '/';
//                //return data.documents;
//            },*/
//            transform: function(o) {
//                var outjson = this.traverse(o);
//                return outjson;
//            },
//            traverse: function(o) {
//                var outjson = [];            	
//                for (var i in o) {
//                	o[i].id = i;
//                	outjson.push(o[i]);                    
//                }
//                return outjson;
//            }
//		},
//		actionMethods: {
//			create: 'POST', read: 'GET', update: 'POST', destroy: 'POST'
//		}
//	}
});
