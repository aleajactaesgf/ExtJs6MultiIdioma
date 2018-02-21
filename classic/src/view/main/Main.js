/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('NereaML.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        //'NereaML.Firebase',
        'Ext.window.MessageBox',
        //'NereaML.view.Labels',
        'NereaML.view.main.MainController',
        'NereaML.view.main.MainModel',
        'NereaML.view.main.List',
        //'NereaML.view.main.FormMultiIdioma'
        'NereaML.view.widgets.Widgets',
        'NereaML.view.widgets.WidgetA'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',
    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        titleAlign:'center',
        title: {
            /*bind: {
                text: '{name}'
            },*/
        	text:'NML',
            flex: 0
        },
        iconCls: 'fa-th-list',
        iconAlign:'top',
        items : [/*
         * { xtype:'combo',
         * store:[['es','Castellano'],['de','Aleman'],['pt','Portugues']],
         * listeners:{ select:'selectIdioma' } },
         */
        	{
        		xtype : 'segmentedbutton',

        		items : [ {
        			iconCls : 'x-fa fa-sign-out',
        			// tooltip: 'España',
        			value : 'es',
        			handler : 'onLogOut',
        			// pressed: true
        		} ]

        	}, {
        		xtype : 'segmentedbutton',

        		items : [ {
        			iconCls : 'icon-spain',
        			tooltip : 'España',
        			value : 'es',
        			handler : 'onSwitchLanguage',
        			// pressed: true
        		}, {
        			iconCls : 'icon-germany',
        			handler : 'onSwitchLanguage',
        			tooltip : 'Alemania',
        			value : 'de'
        		}, {
        			iconCls : 'icon-portugal',
        			handler : 'onSwitchLanguage',
        			tooltip : 'Portugal',
        			value : 'pt'

        		}, {
        			iconCls : 'icon-estados-unidos',
        			handler : 'onSwitchLanguage',
        			tooltip : 'Estados Unidos',
        			value : 'en'

        		} ],
        		listeners : {
        			afterrender : function(segmentedbutton) {
        				// locale = location.href.match(/locale=([\w-]+)/);
        				// locale = (locale && locale[1]) || 'es';
        				// console.log("Main.js locale: "+locale);
        				segmentedbutton.setValue(locale);
        			}
        		}

        	}]
        
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch'/*
							 * , overflowHandler: 'none'
							 */
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 5,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: NereaML.view.Labels.tab.user,
        iconCls: 'x-fa fa-users',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist',
            reference:'mainlist'
        }]
    }, {
        title: NereaML.view.Labels.tab.detalle,
        iconCls: 'x-fa fa-user',
        items: [{
            xtype: 'widget-a',
            reference:'widgetA'
        }]
    }/*, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }*/],
    listeners: {
    	beforetabchange:'beforeCambioPestania'
    }
});
