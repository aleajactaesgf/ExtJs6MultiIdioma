Ext.define('overrides.reader', {
    override: 'Ext.data.reader.Reader',
    read: function(response, readOptions) {
        var data, result, responseText;
        if (response &&  response.responseText !== "null") {
            responseText = response.responseText;
            if (responseText) {
                result = this.getResponseData(response);
                if (result && result.__$isError) {
                    return new Ext.data.ResultSet({
                        total: 0,
                        count: 0,
                        records: [],
                        success: false,
                        message: result.msg
                    });
                } else {
                    data = this.readRecords(result, readOptions);
                }
            } else if (responseText !== '') {
                data = this.readRecords(response, readOptions);
            }
        }
        return data || this.nullResultSet;
    }
});