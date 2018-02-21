//Ext.define('NereaML.view.login.Login', {
//    extend: 'Ext.window.Window',
//    xtype: 'login',
//
//    requires: [
//        'NereaML.view.login.LoginController',
//        'Ext.form.Panel'
//    ],
//
//    controller: 'login',
//    //bodyPadding: 5,
//    title: 'Nerea',
//    titleAlign : 'center',
//    closable: false,
//    autoShow: true,
//
//    items: {
//        xtype: 'form',
//        reference: 'form',
//        bodyPadding: 10,
//        defaults: {
//            //anchor: '100%',
//            //labelWidth: 120
//        },
//        items: [{
//            xtype: 'textfield',
//            name: 'username',
//            fieldLabel: NereaML.view.Labels.Email,
//            allowBlank: false,
//            vtype: 'email'
//        }, {
//            xtype: 'textfield',
//            name: 'password',
//            inputType: 'password',
//            fieldLabel: NereaML.view.Labels.Password,
//            allowBlank: false
//        }/*, {
//            xtype: 'displayfield',
//            hideEmptyLabel: true,
//            value: 'Enter any non-blank password'
//        }*/],
//        buttonAlign:'center',
//        buttons: [{
//            text: NereaML.view.Labels.login,
//            formBind: true,
//            listeners: {
//                click: 'onLoginClick'
//            }
//        }]
//    }
//});