var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var companySale = [];

  for (var i = 0; i < salesData.length; i++) {
      if(!(salesData[i].name in companySale)) {
          companySale[salesData[i].name] = calculate(salesData[i].name);
      }
      
  }
  return companySale
}

function calculate(name) {
    var totalSale = 0;
    var totalTax = 0;
    var saleByState = 0;
    for (var company in companySalesData) {
        if (companySalesData.hasOwnProperty(company) && companySalesData[company].name === name) {
            for (var i = 0; i < companySalesData[company].sales.length; i++) {
                saleByState += companySalesData[company].sales[i];            
            }
            totalSale += saleByState;
            totalTax += saleByState * salesTaxRates[companySalesData[company].province];
            saleByState = 0;
        }
    }
    
    var total = {
        totalSale,
        totalTax
    }
    return total;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/