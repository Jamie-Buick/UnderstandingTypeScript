//data:
    // initial amount
    // annual contribution
    // expected return
    // duration


// Creating my own 'type' called InvestData. Its an object.
type InvestData = {
    InitialAmount: number;
    AnnualContribution: number;
    ExpectedReturn : number;
    Duration: number;
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
}

type CalculationResult = InvestmentResult[] | string;


function calculateInvestment(data: InvestData): CalculationResult { // => result[]

    const {InitialAmount, AnnualContribution, ExpectedReturn, Duration} = data;

    if (InitialAmount < 0 ) {
        return 'Initial Investment amount must be at least zero'
    }

    if (Duration <= 0) {
        return 'No valid amount of years provided'
    }

    if (ExpectedReturn < 0) {
        return 'No valid expected return provided.'
    }

    let total = InitialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;


    const annualResults : InvestmentResult[] = [];

    for (let i = 0; i < Duration; i++) {
        total = total * (1 + ExpectedReturn);
        totalInterestEarned = total - totalContributions - InitialAmount;
        totalContributions = totalContributions + AnnualContribution;
        total = total + AnnualContribution

        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        });
    }

    return annualResults;

}



function printResults(results : CalculationResult) {
    // print output result data 
    if (typeof results === 'string') {
        console.log(results);
        return;
    }

    for (const yearEndResult of results){
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('--------------------------------------');

    }

}

const investmentData: InvestData = {
    InitialAmount:5000,
    AnnualContribution:500,
    ExpectedReturn:0.08,
    Duration:10,
};

const results = calculateInvestment(investmentData);
printResults(results);