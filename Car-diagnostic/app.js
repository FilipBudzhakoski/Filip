document.addEventListener('DOMContentLoaded', () => {
  const vinForm = document.getElementById('vinForm');
  const vinInput = document.getElementById('vinInput');
  const diagBtn = document.getElementById('btnDiagnostics');
  const aiBtn = document.getElementById('btnAI');
  const refreshBtn = document.getElementById('refreshBtn');

  if (vinForm && vinInput) {
    vinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      lookupVIN(vinInput.value.trim());
    });
  }

  if (diagBtn) diagBtn.addEventListener('click', getDiagnostics);
  if (aiBtn) aiBtn.addEventListener('click', getPrediction);
  if (refreshBtn) refreshBtn.addEventListener('click', refreshCars);

  // Load cars on page load
  refreshCars();
});

function validateVIN(vin) {
  return /^[A-HJ-NPR-Z0-9]{17}$/i.test(vin);
}

function showLoading(containerId) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = '<div class="spinner-border text-primary"></div>';
}

function showResult(containerId, html) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = html;
}

async function lookupVIN(vin) {
  if (!validateVIN(vin)) {
    showResult('vinResult', '<div class="alert alert-warning">Please enter a valid 17-character VIN (no I, O, Q).</div>');
    return;
  }
  showLoading('vinResult');

  try {
    const res = await fetch(`http://localhost:5000/api/cars/vin/${encodeURIComponent(vin)}`);
    const data = await res.json();
    if (data && !data.message) {
      showResult('vinResult', `
        <p><strong>${data.make} ${data.model} (${data.year})</strong></p>
        <p>VIN: ${data.vin}</p>
      `);
    } else {
      showResult('vinResult', '<div class="alert alert-info">No data found for that VIN.</div>');
    }
  } catch (err) {
    showResult('vinResult', '<div class="alert alert-danger">VIN lookup failed. Try again later.</div>');
    console.error(err);
  }
}

async function getDiagnostics() {
  showLoading('diagResult');
  try {
    const res = await fetch('http://localhost:5000/diagnostics');
    const items = await res.json();
    const data = items[0] || { status: 'Unknown', issues: [] };
    showResult('diagResult', `
      <p>Status: <strong>${data.status}</strong></p>
      <p>Issues: ${data.issues.length ? data.issues.join(', ') : 'None'}</p>
    `);
  } catch (err) {
    showResult('diagResult', '<div class="alert alert-danger">Diagnostics failed. Try again later.</div>');
    console.error(err);
  }
}

async function refreshCars() {
  showLoading('carsList');
  try {
    const res = await fetch('http://localhost:5000/api/cars');
    const cars = await res.json();
    showResult('carsList', cars.map(car => `
      <div class="car-card mb-2 p-2 border rounded">
        <p><strong>${car.make} ${car.model}</strong> (${car.year})</p>
        <p>VIN: ${car.vin}</p>
        <p>Engine: ${car.engine}</p>
        <p>Mileage: ${car.mileage}</p>
      </div>
    `).join(''));
  } catch (err) {
    showResult('carsList', '<div class="alert alert-danger">Failed to load car list.</div>');
    console.error(err);
  }
}

async function getPrediction() {
  showLoading('aiResult');
  try {
    const res = await fetch('http://localhost:5000/predictions/1');
    const prediction = await res.json();
    showResult('aiResult', `
      <p>Risk: <strong>${prediction.risk}</strong></p>
      <p>Recommendation: ${prediction.recommended}</p>
    `);
  } catch (err) {
    showResult('aiResult', '<div class="alert alert-danger">AI analysis failed. Try again later.</div>');
    console.error(err);
  }
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { validateVIN, showLoading, showResult };
}
