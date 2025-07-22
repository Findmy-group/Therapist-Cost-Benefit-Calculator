document.getElementById('calculate').addEventListener('click', function() {
    const clients = parseFloat(document.getElementById('clients').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value) || 0;

    // Baseline constants derived from the spreadsheet (for 25 clients/week at £50)
    const baselineClients = 25;
    const baselineRate = 50;

    // From the spreadsheet, Net Benefit for 25 clients/£50 is £32,428.42
    // We extract individual benefits as ratios for scaling within fixed formulas.

    const adminPerClientPerWeek = 766.67 / (baselineClients * 52);
    const automatedAdminPerClientPerWeek = 191.67 / (baselineClients * 52);

    const noShowRate = 0.05; // 5%
    const paymentDelayFactor = (236.30 / (baselineClients * baselineRate * 52)); // proportional interest factor
    const extraSessionFactor = (28750 / (baselineClients * baselineRate * 52)); // proportion for extra revenue

    const manualAdmin = clients * 52 * adminPerClientPerWeek;
    const automatedAdmin = clients * 52 * automatedAdminPerClientPerWeek;
    const adminHoursSaved = manualAdmin - automatedAdmin;

    const noShowLoss = clients * rate * 52 * noShowRate;
    const paymentDelaySaving = clients * rate * 52 * paymentDelayFactor * (1 - 0.033333); // approximate adjusted difference
    const extraRevenue = clients * rate * 52 * extraSessionFactor;

    const netBenefit = Math.round(adminHoursSaved + noShowLoss + paymentDelaySaving + extraRevenue);

    // Round all outputs
    document.getElementById('adminHours').innerText = Math.round(adminHoursSaved);
    document.getElementById('noShowLoss').innerText = Math.round(noShowLoss);
    document.getElementById('delayImpact').innerText = Math.round(paymentDelaySaving);
    document.getElementById('extraRevenue').innerText = Math.round(extraRevenue);
    document.getElementById('netBenefit').innerText = netBenefit;
});
