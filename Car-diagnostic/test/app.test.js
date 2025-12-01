const { validateVIN, showLoading, showResult } = require('../app.js');

describe('validateVIN', () => {
  test('valid 17-char VIN returns true', () => {
    expect(validateVIN('1HGCM82633A004352')).toBe(true);
  });
  test('short VIN returns false', () => {
    expect(validateVIN('1HGCM82633A00435')).toBe(false);
  });
  test('VIN containing I, O, or Q returns false', () => {
    expect(validateVIN('I1GCM82633A004352')).toBe(false);
    expect(validateVIN('1HGCM82633A00435O')).toBe(false);
    expect(validateVIN('1HGCM82633A00435Q')).toBe(false);
  });
  test('empty VIN returns false', () => {
    expect(validateVIN('')).toBe(false);
  });
});

describe('DOM helper functions', () => {
  let container;
  beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    container.id = 'testContainer';
    document.body.appendChild(container);
  });

  test('showLoading sets loading text', () => {
    showLoading('testContainer');
    expect(container.innerHTML).toBe('<em>Loading...</em>');
  });

  test('showResult sets provided HTML', () => {
    showResult('testContainer', '<p>Done</p>');
    expect(container.innerHTML).toBe('<p>Done</p>');
  });
});