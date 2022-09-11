class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  # Add routes
  get "/printers" do
    printers = Printer.all
    printers.to_json
  end

  post "/printers" do
    new_printer = Printer.create(
      model: params[:model],
      lease_terms: params[:lease_terms],
      payment_per_month: params[:payment_per_month],
      purchase_price: params[:purchase_price],
      condition: params[:condition],
      enterprise_id: params[:enterprise_id],

    )

    new_printer.to_json
  end

  patch "/printers/:id" do
    printer = Printer.find(params[:id])
    printer.update(
      # model: params[:model],
      lease_terms: params[:lease_terms],
      payment_per_month: params[:payment_per_month],
      purchase_price: params[:purchase_price],
      condition: params[:condition],
      enterprise_id: params[:enterprise_id],
    )
    printer.to_json
  end

  delete "/printers/:id" do
    printer = Printer.find(params[:id])
    printer.destroy
    printer.to_json
  end

  #CLIENTS
  get "/clients" do
    clients = Client.all
    clients.to_json
  end

  post "/clients" do
    new_client = Client.create(
      name: params[:name],
      location: params[:location],
      phone: params[:phone],
      email: params[:email],

    )

    new_client.to_json
  end

  patch "/clients/:id" do
    client = Client.find(params[:id])
    client.update(name: params[:name],
                  # location: params[:location],
                  phone: params[:phone],
                  email: params[:email])
    client.to_json
  end

  delete "/clients/:id" do
    client = Client.find(params[:id])
    client.destroy
    client.to_json
  end

  #COMPUTERS
  get "/computers" do
    computers = Computer.all
    computers.to_json
  end

  post "/computers" do
    new_computer = Computer.create(
      model: params[:model],
      core: params[:core],
      disk_space: params[:disk_space],
      ram: params[:ram],
      lease_terms: params[:lease_terms],
      payment_per_month: params[:payment_per_month],
      purchase_price: params[:purchase_price],
      condition: params[:condition],
      client_id: params[:client_id],

    )

    new_computer.to_json
  end

  patch "/computers/:id" do
    computer = Computer.find(params[:id])
    computer.update(
      # model: params[:model],
      core: params[:core],
      disk_space: params[:disk_space],
      ram: params[:ram],
      lease_terms: params[:lease_terms],
      payment_per_month: params[:payment_per_month],
      purchase_price: params[:purchase_price],
      condition: params[:condition],
      client_id: params[:client_id],
    )
    computer.to_json
  end

  delete "/computers/:id" do
    computer = Computer.find(params[:id])
    computer.destroy
    computer.to_json
  end

  #ENTERPRISES
  get "/enterprises" do
    enterprises = Enterprise.all
    enterprises.to_json
  end

  post "/enterprises" do
    enterprises = Enterprise.create(
      business_name: params[:business_name],
      address: params[:address],
      physical_location: params[:physical_location],
      phone: params[:phone],
      email: params[:email],

    )

    enterprises.to_json
  end

  patch "/enterprises/:id" do
    enterprises = Enterprise.find(params[:id])
    enterprises.update(
      # business_name: params[:business_name],
      address: params[:address],
      physical_location: params[:physical_location],
      phone: params[:phone],
      email: params[:email],
    )
    enterprises.to_json
  end

  delete "/enterprises/:id" do
    enterprise = Enterprise.find(params[:id])
    enterprise.destroy
    enterprise.to_json
  end

  #MANUFACTURERS
  get "/manufacturers" do
    manufacturers = Manufacturer.all
    manufacturers.to_json
  end

  post "/manufacturers" do
    new_manufacturer = Manufacturer.create(
      company_name: params[:company_name],

    )

    new_manufacturer.to_json
  end

  patch "/manufacturers/:id" do
    manufacturer = Manufacturer.find(params[:id])
    manufacturer.update(company_name: params[:company_name],)
    manufacturer.to_json
  end

  delete "/manufacturers/:id" do
    manufacturer = Manufacturer.find(params[:id])
    manufacturer.destroy
    manufacturer.to_json
  end
end
