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


function productsDisplay() {

	connection.query('SELECT * FROM products', function(error, response, fields) {
		if (error) throw error;
		var table = new Table({
		    head: ['Item ID #', 'Product Name', 'Price'],
		  	colWidths: [15, 40, 15],
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
		}, 
		{
			type: 'input',
			message: 'How many items would you like to purchase?',
			name: 'quantity'
		}]
	).then(function(response) {
		if (response.id == 12345 || response.id == 70700 || response.id == 38883 || response.id == 29054 || response.id == 76543 || response.id == 10001 || response.id == 59444 || response.id == 77777 || response.id == 90843 || response.id == 45242) {

			var numberItems = parseInt(response.quantity);

			purchasedOrders(numberItems, response.id);
		} else {
			console.log('Sorry, this is not a valid ID #. Please try again')
			promptPurchase();
		}
	})
}

function itemQuantity(quantity, cid) {
    connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [quantity, cid], function(error, results, fields) {
        if (error) throw error;
    })
}	

function purchasedOrders(quantity, cid) {

    connection.query('SELECT * FROM products WHERE item_id = ?', [cid], function(error, results, fields) {
        if (error) throw error;

        if (quantity > results[0].stock_quantity) {
        	console.log('Sorry all out! Please order again.');
        	promptPurchase();
        } else {
			//Order details
	        console.log('\n');
			console.log(`${quantity} items purchased`);
			console.log(`${results[0].product_name} at ${results[0].price} each`)
			var totalPrice = quantity * results[0].price;
	        console.log(`Total: ${totalPrice}`);
	        console.log('\n');
	        console.log('Your order is on the way! Thanks for shopping with us.'.yellow)
	        //Order details

	        var updatedQuantity = results[0].stock_quantity - quantity;
		    itemQuantity(updatedQuantity, results[0].item_id);
    	}     
	})      
}

productsDisplay()

// connection.end()







