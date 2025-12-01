-- Drop existing table if it exists
DROP TABLE IF EXISTS cars;

-- Recreate cars table
CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    vin VARCHAR(17) UNIQUE NOT NULL,
    make VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    engine VARCHAR(50),
    mileage INT
);

-- Seed demo data
INSERT INTO cars (vin, make, model, year, engine, mileage) VALUES
('1HGCM82633A123456', 'Honda', 'Accord', 2003, '2.4L', 180000),
('WDB12345678901234', 'Mercedes', 'C-Class', 2015, '2.0L', 95000),
('JHMFA16586S654321', 'Toyota', 'Corolla', 2018, '1.8L', 45000),
('WAUZZZ4G7FN000001', 'Audi', 'A6', 2015, '3.0 TDI', 120000),
('5YJSA1E26HF000001', 'Tesla', 'Model S', 2017, 'Electric', 60000);