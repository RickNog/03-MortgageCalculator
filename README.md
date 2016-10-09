# Mortgage Calculator

The San Diego real estate market is an excellent place to invest your extra cash. Lets build a mortgage calculator using jQuery to calculate your monthly payment on a home mortgage. For this you will need to build a form that accepts the loan balance, interest rate, loan term in years and period (either monthly or bi-monthly) and a calculate button.

<img src="http://i.imgur.com/Amq3Vv9.png" />

## Tasks

1. Create a basic HTML page, and make sure it has the following HTML elements.
   - An `input` element for the user to enter the mortgage loan balance in US dollars.
   - An `input` element for the user to enter the annual percentage rate of charge (APR).
   - An `input` element for the user to enter the loan term in years.
   - A `select` element for the user to select a period, populated with `option` elements where the value attribute is set to the available periods, in the case, either 'monthly' or 'bimonthly', and the content inside of the `option` elements represents the corresponding number of periods over a year (12 or 6).
   - A `button` element for the user to calculate their monthly mortgage payment based on the above inputs.
   - A `p` element to display the expected output.
   
2. Write the following JavaScript in your `index.js` file
   - Create a function that will be called when the user clicks on the `button` element you added to your HTML.
   - This function should grab the values entered by the user from the `input` elements and the `select` element.
   - The function should then calculate the monthly payment as follows (we can break this formula into 4 'buckets' for readability):
        
        // number of payments
        numberOfPayments = loanTerm * period

        // monthly interest rate       
        monthlyInterestRate = (interestRate / 100) / period          

        // compounded interest rate
        compoundedIntestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)  
        
        // interest quotient
        interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedIntestRate - 1)
        
        // final calculation
        monthlyPayment = loanBalance * interestQuotient;
