
document.getElementById('calculate').addEventListener('click', function () {
  const clients = parseFloat(document.getElementById('clients').value) || 0;
  const rate = parseFloat(document.getElementById('rate').value) || 0;
  const weeks_full = 52;
  const weeks_no_show = 46;

  const hoursPerClientManual = 0.5897461538461538;
  const hoursPerClientAutomated = 0.14743846153846152;
  const interestFactor = 0.0036353846153846154;
  const automatedRatio = 0.03334743969530258;
  const extraSessionsFactor = 0.4423076923076923;

  const manualAdmin = clients * weeks_full * hoursPerClientManual;
  const automatedAdmin = clients * weeks_full * hoursPerClientAutomated;
  const adminHoursSaved = manualAdmin - automatedAdmin;

  const noShowLoss = clients * rate * weeks_no_show * 0.05;
  const manualDelayCost = clients * rate * weeks_full * interestFactor;
  const automatedDelayCost = manualDelayCost * automatedRatio;
  const paymentDelaySaving = manualDelayCost - automatedDelayCost;
  const extraSessionRevenue = clients * rate * weeks_full * extraSessionsFactor;

  const netBenefit = Math.round(adminHoursSaved + noShowLoss + paymentDelaySaving + extraSessionRevenue);

  document.getElementById('adminHours').innerText = Math.round(adminHoursSaved);
  document.getElementById('noShowLoss').innerText = Math.round(noShowLoss);
  document.getElementById('delayImpact').innerText = Math.round(paymentDelaySaving);
  document.getElementById('extraRevenue').innerText = Math.round(extraSessionRevenue);
  document.getElementById('netBenefit').innerText = netBenefit;
});
