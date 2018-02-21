Ext.define('overrides.localized.Component', {
    override: 'Ext.Component',
    initComponent: function() {
        var me = this,
            localized = me.localized,
            value;
        if (Ext.isObject(localized)) {
            for (var prop in localized) {
                value = localized[prop];
                if (value) {
                    me[prop] = eval(value);
                }
            }
        }
        me.callParent(arguments);
    }
});