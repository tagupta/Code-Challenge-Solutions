var ds = new Datasource();

ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            var list = `<div>
                            Mid price for ${ price.pair } is ${ ds.mid(price) } ${ ds.quote(price) }.
                        </div>`;
            $('#display').append(list);
        });
    }).catch(error => {
        console.error(error);
    });