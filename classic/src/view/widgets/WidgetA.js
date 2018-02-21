Ext.define('NereaML.view.widgets.WidgetA', {
    extend: 'Ext.panel.Panel',
    xtype: 'widget-a',
    cls: 'admin-widget shadow',
    requires: ['NereaML.view.widgets.WidgetsModel',,
    		   'NereaML.view.widgets.WidgetsController',
    		   'Ext.form.field.File'],    
    viewModel: 'widgets',
    controller:'widgets',
    items: [
        {
            xtype: 'image',
            reference:'imageView',
            cls: 'widget-top-container-first-img',
            height: 100,
            width: 100,
            alt: 'profile-image',
            bind: {
            	src: '{urlFoto}'
            }
        },
        {
            xtype: 'component',
            cls: 'widget-top-first-container postion-class',
            height: 150
        },
        {
            xtype: 'container',
            cls: 'widget-bottom-first-container postion-class',
            height: 250,
            padding: '60 0 0 30',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            defaults : {
                margin:'5 0 0 0'
            },
            items: [
                {
                    xtype: 'label',
                    cls: 'widget-name-text',                   
                    bind: {
                        html: '{nombre}'
                    }
                },
                {
                    xtype: 'label',
                    bind: {
                        html: '{email}'
                    }
                },
                {
                    xtype: 'label',
                    bind: {
                        html: '{telefono}'
                    }
                },
                {
                    xtype: 'toolbar',
                    cls: 'widget-tool-button',
                    //flex: 1,
                    items: [
                        {
                        	xtype: 'progressbar',
                        	reference: 'progressbar',
                        	text: NereaML.view.Labels.progressbarUp,
                        	width: 300,
                        	bind: {
                                hidden: '{!subiendo}'
                            },
                        },
                        {
                            xtype: 'filefield',
                            accept: 'image/*',
                            buttonOnly: true,
                            hideLabel: true,
                            fileSelected: null,
                            bind: {
                                hidden: '{subiendo}'
                            },
                            buttonConfig: {                                
                                xtype: 'filebutton',
                                ui: 'soft-blue',
                                text: 'Modificar Foto',                                
                                iconCls: 'x-fa fa-camera-retro'                                    
                            },
                            listeners: {
                                //focus: 'onFocusUploadButton',
                                change: 'onChangeUploadButton'
                            }
                        }
                        /*,
                        {
                            ui: 'soft-blue',
                            bind: {
                                hidden: '{subiendo}'
                            },
                            iconCls:'x-fa fa-camera-retro',
                            text: 'Modificar Foto'
                        }*/
                    ]
                }
            ]
        }
    ]
});
