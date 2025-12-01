// --- DOM Elements ---
const vinForm = document.getElementById('vinForm');
const vinInput = document.getElementById('vinInput');
const vinResult = document.getElementById('vinResult');
const vinSpinner = document.getElementById('vinSpinner');

const addCarForm = document.getElementById('addCarForm');
const refreshBtn = document.getElementById('refreshBtn');
const carsList = document.getElementById('carsList');
const carsSpinner = document.getElementById('carsSpinner');

const btnDiagnostics = document.getElementById('btnDiagnostics');
const diagResult = document.getElementById('diagResult');
const diagSpinner = document.getElementById('diagSpinner');

const btnAI = document.getElementById('btnAI');
const aiResult = document.getElementById('aiResult');
const aiSpinner = document.getElementById('aiSpinner');

const editAlert = document.getElementById('editAlert');
let editModal;

// Initialize Bootstrap modal
document.addEventListener('DOMContentLoaded', () => {
  editModal = new bootstrap.Modal(document.getElementById('editCarModal'));
});

// --- Render car list with Edit + Delete buttons ---
function renderCars(cars) {
  const table = document.createElement('table');
  table.className = 'table table-striped';
  table.innerHTML = `
    <thead>
      <tr>
        <th>VIN</th><th>Make</th><th>Model</th><th>Year</th><th>Engine</th><th>Mileage</th><th>Actions</th>
      </tr>
    </thead>
    <tbody>
      ${cars.map(car => `
        <tr>
          <td>${car.vin}</td>
          <td>${car.make}</td>
          <td>${car.model}</td>
          <td>${car.year}</td>
          <td>${car.engine}</td>
          <td>${car.mileage}</td>
          <td>
            <button class="btn btn-sm btn-warning" onclick="openEditModal('${car.vin}')">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deleteCar('${car.vin}')">Delete</button>
          </td>
        </tr>`).join('')}
    </tbody>
  `;
  carsList.innerHTML = '';
  carsList.appendChild(table);
}

// --- Fetch all cars ---
async function fetchCars() {
  carsSpinner.classList.remove('d-none');
  try {
    const res = await fetch('http://localhost:5000/api/cars');
    const data = await res.json();
    renderCars(data);
  } catch (err) {
    carsList.innerHTML = `<p class="text-danger">Error loading cars</p>`;
    console.error(err);
  } finally {
    carsSpinner.classList.add('d-none');
  }
}

// --- VIN Lookup ---
vinForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  vinSpinner.classList.remove('d-none');
  vinResult.innerHTML = '';
  try {
    const res = await fetch(`http://localhost:5000/api/cars/vin/${vinInput.value}`);
    if (res.ok) {
      const car = await res.json();
      vinResult.innerHTML = `
        <div class="alert alert-success">
          Found: ${car.make} ${car.model} (${car.year}) – Engine: ${car.engine}, Mileage: ${car.mileage}
        </div>`;
    } else {
      vinResult.innerHTML = `<div class="alert alert-danger">Car not found</div>`;
    }
  } catch (err) {
    vinResult.innerHTML = `<div class="alert alert-danger">Error looking up VIN</div>`;
    console.error(err);
  } finally {
    vinSpinner.classList.add('d-none');
  }
});

// --- Add Car ---
addCarForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const vin = document.getElementById('vinInput').value;
  const make = document.getElementById('makeInput').value;
  const model = document.getElementById('modelInput').value;
  const year = document.getElementById('yearInput').value;
  const engine = document.getElementById('engineInput').value;
  const mileage = document.getElementById('mileageInput').value;

  try {
    await fetch('http://localhost:5000/api/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vin, make, model, year, engine, mileage })
    });
    fetchCars();
    addCarForm.reset();
  } catch (err) {
    console.error('Error adding car:', err);
    alert('Failed to add car');
  }
});

// --- Delete Car ---
async function deleteCar(vin) {
  if (!confirm(`Delete car with VIN ${vin}?`)) return;
  try {
    const res = await fetch(`http://localhost:5000/api/cars/${vin}`, { method: 'DELETE' });
    if (res.ok) {
      fetchCars();
    } else {
      alert('Error deleting car');
    }
  } catch (err) {
    console.error('Error deleting car:', err);
    alert('Failed to delete car');
  }
}

// --- Open Edit Modal ---
async function openEditModal(vin) {
  try {
    const res = await fetch(`http://localhost:5000/api/cars/vin/${vin}`);
    if (!res.ok) return alert('Car not found');
    const car = await res.json();

    document.getElementById('editVin').value = car.vin;
    document.getElementById('editMake').value = car.make;
    document.getElementById('editModel').value = car.model;
    document.getElementById('editYear').value = car.year;
    document.getElementById('editEngine').value = car.engine;
    document.getElementById('editMileage').value = car.mileage;

    editAlert.innerHTML = '';
    editModal.show();
  } catch (err) {
    console.error('Error loading car:', err);
    alert('Failed to load car for editing');
  }
}

// --- Save Changes in Edit Modal ---
document.getElementById('editCarForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  editAlert.innerHTML = '';

  const vin = document.getElementById('editVin').value;
  const make = document.getElementById('editMake').value.trim();
  const model = document.getElementById('editModel').value.trim();
  const year = document.getElementById('editYear').value;
  const engine = document.getElementById('editEngine').value.trim();
  const mileage = document.getElementById('editMileage').value;

  if (!make || !model || !year) {
    editAlert.innerHTML = `<div class="alert alert-danger">Make, Model, and Year are required.</div>`;
    return;
  }

  try {
    const res = await fetch(`http://localhost:5000/api/cars/${vin}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vin, make, model, year, engine, mileage })
    });

    if (res.ok) {
      editAlert.innerHTML = `<div class="alert alert-success">Car updated successfully!</div>`;
      setTimeout(() => {
        editModal.hide();
        fetchCars();
      }, 1000);
    } else {
      editAlert.innerHTML = `<div class="alert alert-danger">Error updating car. Please try again.</div>`;
    }
  } catch (err) {
    console.error('Error saving car:', err);
    editAlert.innerHTML = `<div class="alert alert-danger">Failed to update car.</div>`;
  }
});

// --- Diagnostics (demo) ---
btnDiagnostics.addEventListener('click', () => {
  diagSpinner.classList.remove('d-none');
  diagResult.innerHTML = '';
  setTimeout(() => {
    diagSpinner.classList.add('d-none');
    diagResult.innerHTML = `<div class="alert alert-warning">Diagnostics complete: No issues found 🚗</div>`;
  }, 2000);
});

// --- AI Prediction (demo) ---
btnAI.addEventListener('click', () => {
  aiSpinner.classList.remove('d-none');
  aiResult.innerHTML = '';
  setTimeout(() => {
    aiSpinner.classList.add('d-none');
    aiResult.innerHTML = `<div class="alert alert-info">AI Analysis: Car is in good condition 👍</div>`;
  }, 2000);
});

// --- Initial load ---
fetchCars();
