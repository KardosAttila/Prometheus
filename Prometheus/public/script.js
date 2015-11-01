//console.log('debug');

var tables = [];
for (var i = 1; i <= 12; ++i) {
    tables[i] = $('<table class="table table-striped"><caption>' +
                   i +
                  '</caption></table>');
}   

var months = {
    'Jan' : 1,
    'Feb' : 2,
    'Mar' : 3,
    'Apr' : 4,
    'May' : 5,
    'Jun' : 6,
    'Jul' : 7,
    'Aug' : 8,
    'Sep' : 9,
    'Oct' : 10,
    'Nov' : 11,
    'Dec' : 12,
}

$('table tr').each(function () {
    for(var month in months) {
        if($(this).find('td:nth-child(2)').innerHTML.indexOf(month)) {
            console.log($(this).children('td')[1]);
            tables[months.month].add($(this));
        }
    }
});

tables.forEach(function(table) {
    $('body').append(table);
});

console.log(tables);