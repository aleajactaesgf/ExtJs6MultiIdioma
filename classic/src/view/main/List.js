/**
 * This view is an example list of people.
 */
Ext.define('NereaML.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    controller:'list',
    requires: [
    	//'Ext.grid.plugin.RowEditing',
        'NereaML.store.Personnel',
        'NereaML.view.main.ListController'
    ],
   
    title:NereaML.view.Labels.titleTablaPersonal,   

    store: {
        type: 'personnel'
    },
    plugins:[{
    	ptype: 'rowediting',
    	clicksToEdit: 2,
    	clicksToMoveEditor: 2,
    	autoCancel: true,
    	errorSummary: false,
    	listeners:{    	    
    		canceledit: 'cancelEdit',
    		edit: 'editRowEditing'
    	}
    }
    ],
    minHeight:240,
    //border:true,
    columns: [
        { text: NereaML.view.Labels.Nombre,  dataIndex: 'nombre', flex: 1,
        	editor: {
                xtype: 'textfield',
                allowBlank: false
            }	
        },
        { text: NereaML.view.Labels.Email, dataIndex: 'email', flex: 1,
        	editor: {
                xtype: 'textfield',
                allowBlank: false,
                vtype: 'email'
            }	
        },
        { text: NereaML.view.Labels.Telefono, dataIndex: 'telefono', flex: 1,
        	editor: {
                xtype: 'textfield',
                allowBlank: false
            }	
        },
        {   xtype: 'numbercolumn',
        	tdCls:'cell-grid-alig-right',
        	text: NereaML.view.Labels.saldo, 
        	dataIndex: 'saldo', flex: 1,
        	renderer: function(value, metaData) {
        	    return Ext.util.Format.currency(value); 
        	},
        	editor: {
        		xtype: 'numberfield'/*,
        		allowBlank: false,
        		listeners: {
        			focus: function(field) {
        				// Code to format the number field on focus
        				//field.setRawValue(Ext.util.Format.number(field.getValue(), '0.00'));
        				// Code to display the currency value in a text field. Make sure to use maskRe to disallow text, otherwise you //will end up getting NaN
        				field.setRawValue(field.getValue());
        			},
        			blur: function(field) {
        				// Code to format the number field on blur
        				//field.setRawValue(Ext.util.Format.number(field.getValue(), '0.00'));
        				// Code to display the currency value in a text field. Make sure to use maskRe to disallow text, otherwise you //will end up getting NaN
        				field.setRawValue(Ext.util.Format.currency(field.getValue()));
        			}
        		}*/
        	}
        },
        {   xtype: 'datecolumn',        	
        	text: NereaML.view.Labels.fecAlta, 
        	dataIndex: 'fecAlta', flex: 1,
        	renderer: function(value, metaData) {
        	    return Ext.util.Format.date(value, Ext.util.Format.dateFormat); 
        	}
        },
        {   xtype: 'datecolumn',
        	text: NereaML.view.Labels.fecModificacion, 
        	dataIndex: 'fecModificacion', flex: 1,
        	renderer: function(value, metaData) {
        	    return Ext.util.Format.date(value, Ext.util.Format.dateFormat); 
        	}
        },
        {
        	xtype: 'actioncolumn',
        	width: 50,
        	align:'center',
        	sortable: false,
        	editRenderer: function(){
        		return '';    
        	},
        	items: [{
        		iconCls: 'x-fa fa-pencil',
        		tooltip: NereaML.view.Labels.buttonEditar,
        		handler: 'onEdicionClick'
        	},{
        		iconCls:'x-fa fa-trash-o',
        		tooltip:  NereaML.view.Labels.buttonBorrar,        		
        		handler: 'onEliminarClick'
        	}]
        }
        
    ],
    tbar: [{
        text: NereaML.view.Labels.buttonAlta,
        iconCls: 'x-fa fa-plus',
        handler: 'onAddClick'
    }],

    listeners: {
       // select: 'onItemSelected',
        beforerender:'cargarStore'
    }
});

