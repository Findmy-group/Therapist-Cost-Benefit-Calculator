document.getElementById('calculate').addEventListener('click', function() {
  const clients = parseFloat(document.getElementById('clients').value) || 0;
  const rate = parseFloat(document.getElementById('rate').value) || 0;

  const weeks = 52;

  const manualAdmin = clients * weeks * 0.5897461538461538;
  const automatedAdmin = clients * weeks * 0.14743846153846152;
  const adminHoursSaved = manualAdmin - automatedAdmin;

  const noShowLoss = clients * rate * weeks * 0.05;
  const paymentDelaySaving = clients * rate * weeks * 0.0036353846153846154;
  const extraRevenue = clients * rate * weeks * 0.4423076923076923;

  const netBenefit = Math.round(adminHoursSaved + noShowLoss + paymentDelaySaving + extraRevenue);

  document.getElementById('adminHours').innerText = Math.round(adminHoursSaved);
  document.getElementById('noShowLoss').innerText = Math.round(noShowLoss);
  document.getElementById('delayImpact').innerText = Math.round(paymentDelaySaving);
  document.getElementById('extraRevenue').innerText = Math.round(extraRevenue);
  document.getElementById('netBenefit').innerText = netBenefit;
});
