var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');
var colors = require('colors');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'asdfasdf',
    database: 'bamazon_db',
    port: 3306
});

connection.connect();


function showProducts() {

	connection.query('SELECT * FROM products', function(error, response, fields) {
		if (error) throw error;
		var table = new Table({
		    head: ['Item ID #', 'Product Name', 'Price'],
		  	colWidths: [15, 30, 15],
		  	style: {head: ['cyan']}
		});

		for (var i = 0; i < 10; i++) {
		    table.push([response[i].item_id, response[i].product_name, response[i].price]) 
		}

		//why don't I have to call RowDataPacket?
		console.log(table.toString());

		promptPurchase();
	})
}

function promptPurchase() {
	inquirer.prompt(
		[{
			type: 'input',
			message: 'Please enter the ID # of the item you would like to purchase.',
			name: 'id'
		}]
	).then(function(response) {
		if (response.id == 12345 || response.id == 70700 || response.id == 38883 || response.id == 29054 || response.id == 76543 || response.id == 10001 || response.id == 59444 || response.id == 77777 || response.id == 90843 || response.id == 45242) {
			itemQuantity();
		} else {
			console.log('Sorry, this is not a valid ID #. Please try again')
			promptPurchase();
		}
	})
}

function itemQuantity() {
	inquirer.prompt(
			[{
				type: 'input',
				message: 'How many items would you like to purchase?',
				name: 'quantity'
			}]
		).then(function(response) {
			var item = parseInt(response.quantity)
			if (typeof item == 'number') {
				console.log('this number')
			} else {
				console.log('string')
			}
		})
}
showProducts()

connection.end()