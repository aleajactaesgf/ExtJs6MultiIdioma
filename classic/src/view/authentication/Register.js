Ext.define('NereaML.view.authentication.Register', {
    extend: 'NereaML.view.authentication.LockingWindow',
    xtype: 'register',

    requires: [
        'NereaML.view.authentication.Dialog',
        'Ext.button.Button',
        'Ext.form.Label',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text'
    ],

    title: 'User Registration',
    defaultFocus: 'authdialog',  // Focus the Auth Form to force field focus as well

    items: [
        {
            xtype: 'authdialog',
            bodyPadding: '20 20',
            width: 455,
            reference : 'authDialog',

            defaultButton : 'submitButton',
            autoComplete: true,
            cls: 'auth-dialog-register',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults : {
                margin: '10 0',
                selectOnFocus : true
            },
            items: [
                {
                    xtype: 'label',
                    cls: 'lock-screen-top-label',
                    text: NereaML.view.Labels.CrearCuenta
                },
                {
                    xtype: 'textfield',
                    cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    allowBlank : false,
                    name: 'email',
                    emptyText: NereaML.view.Labels.Email,
                    vtype: 'email',
                    bind: '{email}',
                    triggers: {
                        glyphed: {
                            cls: 'trigger-glyph-noop auth-envelope-trigger'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    allowBlank : false,
                    emptyText: NereaML.view.Labels.Password,
                    name: 'password',
                    inputType: 'password',
                    bind: '{password}',
                    triggers: {
                        glyphed: {
                            cls: 'trigger-glyph-noop auth-password-trigger'
                        }
                    }
                },
                {
                    xtype: 'button',
                    scale: 'large',
                    ui: 'soft-blue',
                    formBind: true,
                    reference: 'submitButton',
                    bind: false,
                    margin: '5 0',
                    iconAlign: 'right',
                    iconCls: 'x-fa fa-angle-right',
                    text: NereaML.view.Labels.Registrar,
                    listeners: {
                        click: 'onSignupClick'
                    }
                },
                {
                	xtype: 'component',
                	html: '<div style="text-align:right">' +
                	'<a href="#" class="link-forgot-password">'+
                	'Back to Log In</a>' +
                	'</div>',
                	listeners   : {
                		el : {
                			click    : function(ev)
                			{
                				ev.preventDefault();
                				Ext.ComponentQuery.query('register')[0].getController().onLoginAsButton();
                			}
                		}
                	}
                }
            ]
        }
    ]
});
