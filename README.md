# bamazon-app
Using node.js and MySQL to build an Amazon-like storefront 

## Bamazon Customer Portal

The Bamazon Customer Portal allows users to see items available for purchase. Customer will input an item ID # along with the amount they would like to purchase. 

If purchase is successful, the below will be shown. 

![Successful order](/images/successful-order.png)

Once order has been fulfilled, the quantity of the SQL database will be updated.

![Quantity before](/images/quantity-before.png)

![Quantity after](/images/quantity-after.png)

If there are not enough items for a specific item, the user will be notified. 

![Out of Stock](/images/insufficient-quantity.png)
