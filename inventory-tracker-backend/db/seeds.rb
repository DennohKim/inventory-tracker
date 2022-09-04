puts "🌱 Seeding data..."

puts "Creating businesses..."
ufanisi = BusinessEntity.create(business_name: "Ufanisi SACCO", address: "23-00100", physical_location:"Ufanisi Building, Kawangware", phone: "0712 345 678", email:"info@ufanisi.com")

cooperative = BusinessEntity.create(business_name: "Cooperative University", address: "456-00100", physical_location:"Karen", phone: "0701 235 876", email:"info@cooperative.com")

cannonical = BusinessEntity.create(business_name: "Cannonical", address: "78-00100", physical_location:"Unga House Westlands", phone: "0723 890 456", email:"tech@cannonical.com")

mercycorps = BusinessEntity.create(business_name: "Mercy Corps Kenya", address: "678-00100", physical_location:"Upperhill", phone: "0789 837 837", email:"info@mercycorps.org")

knhcr = BusinessEntity.create(business_name: "KNHCR", address: "89-00100", physical_location:"Gigiri", phone: "0721 121 121", email:"info@knhcr.org")

puts "Creating manufacturers..."
epson = Manufacturer.create(company_name: "Epson")
hp = Manufacturer.create(company_name: "HP")
dell = Manufacturer.create(company_name: "Dell")
kyocera = Manufacturer.create(company_name: "Kyocera")
panasonic = Manufacturer.create(company_name: "Panasonic")

puts "Creating Printers..."

# ***************************************************************
# * A printer belongs to a manufacturer *
# * and a printer belongs to a company.                         *
# ***************************************************************
# Create printers Here
laserjet = Printer.create(model: "Laserjet MFP M283fdw", lease_terms: 2, payment_per_month: 2000, purchase_price: 94000, condition: "Good", business_entity_id: ufanisi.id , manufacturer_id: hp.id )

epsonl850 = Printer.create(model: "Epson L850 ", lease_terms: 3, payment_per_month: 4000, purchase_price: 80000, condition: "Good", business_entity_id: cooperative.id , manufacturer_id: epson.id)

km2560 = Printer.create(model: "Kyocera KM- 2560", lease_terms: 5, payment_per_month: 1500, purchase_price: 90000, condition: "Good", business_entity_id: cannonical.id , manufacturer_id: kyocera.id )

canon = Printer.create(model: "Canon G6040 duplex", lease_terms: 2, payment_per_month: 2500, purchase_price: 134900, condition: "Good", business_entity_id: mercycorps.id , manufacturer_id: panasonic.id)

dellinkjet = Printer.create(model: "All in one inkjet", lease_terms: 4, payment_per_month: 4000, purchase_price: 124000, condition: "Good", business_entity_id: knhcr.id , manufacturer_id: dell.id)


puts "Creating clients..."
dennis = Client.create(name: "Dennis Kimathi")
charles = Client.create(name: "Charles xavier")
luka = Client.create(name: "Luka Modric")
jordan = Client.create(name: "Jordan Peterson")
joel = Client.create(name: "Joel Matip")

puts "Creating computers..."
dell3500 = Computer.create(model: "Dell Vostro 3500 ", core: "i5", disk_space:"256 SSD", ram: "8GB", lease_terms: 2, payment_per_month: 2000, purchase_price: 6000, condition: "New" , client_id: dennis.id)

hp = Computer.create(model: "HP ELITEBOOK 840 G1", core: "i5", disk_space:"500GB HDD", ram: "8GB", lease_terms: 3, payment_per_month: 4000, purchase_price: 45000, condition: "New" , client_id: charles.id)

macbook = Computer.create(model: "Apple Macbook Pro A1708", core: "i5-6360U", disk_space:"256 SSD", ram: "8GB", lease_terms: 3, payment_per_month: 5000, purchase_price: 90000, condition: "Refurbished" , client_id: luka.id)

toshiba = Computer.create(model: "Toshiba Tecra x40-D", core: "i5-7300U", disk_space:"256 SSD", ram: "8GB", lease_terms: 4, payment_per_month: 4350, purchase_price: 34500, condition: "New" , client_id: jordan.id)

lenovo = Computer.create(model: "Lenovo V14", core: "Intel Celeron", disk_space:"1TB", ram: "4GB", lease_terms: 2, payment_per_month: 1500, purchase_price: 4, condition: "Good" , client_id: joel.id)




puts "🌱 Done seeding!"
