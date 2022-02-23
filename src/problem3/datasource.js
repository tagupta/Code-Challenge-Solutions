function Datasource() {
    this.targetURL = 'https://static.ngnrs.io/test/prices';
}

Datasource.prototype.getPrices = async function(){
    var response = await axios.get(this.targetURL);
    return response.data.data.prices;
}

Datasource.prototype.mid = function(obj){
    return parseFloat((obj.buy + obj.sell)/2)/100;
}

Datasource.prototype.quote = function(obj){
    return obj.pair.substr(3);
}
