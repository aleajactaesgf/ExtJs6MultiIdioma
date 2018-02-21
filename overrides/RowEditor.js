/*Ext.define( 'EXTJS19471.grid.RowEditor', {
    override: 'Ext.grid.RowEditor',
    syncButtonPosition: function (context) {
        var me = this,
            scrollDelta = me.getScrollDelta(),
            floatingButtons = me.getFloatingButtons(),
            scrollingView = me.scrollingView,
            scrollHeight = Math.max(0, me.scroller.getSize().y - me.scroller.getClientSize().y),
            overflow = scrollDelta - (scrollHeight - me.scroller.getPosition().y);

        floatingButtons.show();

        if (overflow > 0) {
            if (!me._buttonsOnTop) {
                floatingButtons.setButtonPosition('top');
                me._buttonsOnTop = true;
                me.layout.setAlign('bottom');
                me.updateLayout();
            }
            scrollDelta = 0;
        } else if (me._buttonsOnTop !== false) {
            floatingButtons.setButtonPosition('bottom');
            me._buttonsOnTop = false;
            me.layout.setAlign('top');
            me.updateLayout();
        }else {
            floatingButtons.setButtonPosition(floatingButtons.position);
        }

        return scrollDelta;
    }
});*/