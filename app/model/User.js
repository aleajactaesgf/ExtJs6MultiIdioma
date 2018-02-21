Ext.define('NereaML.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'nombre', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'telefono', type: 'string'},
        {name: 'saldo', type: 'number'},
        {name: 'fecAlta', type: 'date', dateFormat:'Y-m-d H:i:s.u'},
        {name: 'fecModificacion', type: 'date', dateFormat: 'Y-m-d H:i:s.u'},
        {name: 'urlFoto', type: 'string', defaultValue: 'resources/images/user-profile/screenshot-128.png'},
        {name: 'subiendo', type: 'boolean', defaultValue: false, persist: false}
    ]
});