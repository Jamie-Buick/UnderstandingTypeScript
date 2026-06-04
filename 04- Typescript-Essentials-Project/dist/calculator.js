"use strict";
//data:
// initial amount
// annual contribution
// expected return
// duration
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    const { InitialAmount, AnnualContribution, ExpectedReturn, Duration } = data;
    if (InitialAmount < 0) {
        return 'Initial Investment amount must be at least zero';
    }
    if (Duration <= 0) {
        return 'No valid amount of years provided';
    }
    if (ExpectedReturn < 0) {
        return 'No valid expected return provided.';
    }
    let total = InitialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < Duration; i++) {
        total = total * (1 + ExpectedReturn);
        totalInterestEarned = total - totalContributions - InitialAmount;
        totalContributions = totalContributions + AnnualContribution;
        total = total + AnnualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        });
    }
    return annualResults;
}
function printResults(results) {
    // print output result data 
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('--------------------------------------');
    }
}
const investmentData = {
    InitialAmount: 5000,
    AnnualContribution: 500,
    ExpectedReturn: 0.08,
    Duration: 10,
};
const results = calculateInvestment(investmentData);
printResults(results);
//# sourceMappingURL=calculator.js.map