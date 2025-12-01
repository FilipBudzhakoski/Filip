-- ✅ Create the cars table
CREATE TABLE IF NOT EXISTS cars (
    vin VARCHAR(17) PRIMARY KEY,
    make VARCHAR(50),
    model VARCHAR(50),
    year INT,
    engine VARCHAR(50),
    mileage INT
);

-- ✅ Seed with demo data
INSERT INTO cars (vin, make, model, year, engine, mileage) VALUES
('WAUZZZ4F9BN075203', 'Audi', 'A6', 2011, '2.0 TDI', 185000),
('WVWZZZ1JZXW000001', 'Volkswagen', 'Golf IV', 2000, '1.9 TDI', 250000),
('YS3DD78N4X7054321', 'Saab', '9-3', 1999, '2.0 Turbo', 220000),
('VF1BG0A052Y123456', 'Renault', 'Laguna', 2002, '1.8 16V', 198000),
('JM1BK32F781234567', 'Mazda', '3', 2008, '2.0 Petrol', 145000),
('WBAVB13576KX12345', 'BMW', '320i', 2006, '2.0 Petrol', 160000);
('YV1TS65KX11234567', 'Volvo', 'V70', 2005, '2.4 D5', 210000),
('YV1MS382762345678', 'Volvo', 'S60', 2006, '2.0T', 175000),
('YS3FD49Y681234567', 'Saab', '9-3 SportCombi', 2008, '1.9 TiD', 190000),
('YS2R4X20001234567', 'Scania', 'R-series Truck', 2012, '12.7L Diesel', 450000),

