class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
  
  # Add routes
  get '/printers' do 
    printers = Printer.all
    printers.to_json
  end

  post '/printers' do
    new_printer = Printer.create(
      body: params[:body],
      username: params[:username],
      
    )

    new_printer.to_json
  end

  patch '/printers/:id' do
    printer = Printer.find(params[:id])
    printer.update(body: params[:body])
    printer.to_json
  end

  delete '/printers/:id' do
    printer = Printer.find(params[:id])
    printer.destroy
    printer.to_json
  end

  #CLIENTS
  get '/clients' do 
    clients = Client.all
    clients.to_json
  end

  post '/clients' do
    new_client = Client.create(
      body: params[:body],
      username: params[:username],
      
    )

    new_client.to_json
  end

  patch '/clients/:id' do
    client = Printer.find(params[:id])
    client.update(body: params[:body])
    client.to_json
  end

  delete '/clients/:id' do
    client = Client.find(params[:id])
    client.destroy
    client.to_json
  end

  #COMPUTERS
  get '/computers' do 
    computers = Computer.all
    computers.to_json
  end

  post '/computers' do
    new_computer = Computer.create(
      body: params[:body],
      username: params[:username],
      
    )

    new_computer.to_json
  end

  patch '/computers/:id' do
    computer = Computer.find(params[:id])
    computer.update(body: params[:body])
    computer.to_json
  end

  delete '/computers/:id' do
    computer = Computer.find(params[:id])
    computer.destroy
    computer.to_json
  end

  #BUSINESS ENTITIES
  get '/business_entities' do 
    business_entities = BusinessEntity.all
    business_entities.to_json
  end

  post '/business_entities' do
    new_business_entities = BusinessEntity.create(
      body: params[:body],
      username: params[:username],
      
    )

    new_business_entities.to_json
  end

  patch '/business_entities/:id' do
    business_entities = BusinessEntity.find(params[:id])
    business_entities.update(body: params[:body])
    business_entities.to_json
  end

  delete '/business_entities/:id' do
    business_entity = BusinessEntity.find(params[:id])
    business_entity.destroy
    business_entity.to_json
  end



  #MANUFACTURERS
  get '/manufacturers' do 
    manufacturers = Manufacturer.all
    manufacturers.to_json
  end

  post '/manufacturers' do
    new_manufacturer = Manufacturer.create(
      body: params[:body],
      username: params[:username],
      
    )

    new_manufacturer.to_json
  end

  patch '/manufacturers/:id' do
    manufacturer = Manufacturer.find(params[:id])
    manufacturer.update(body: params[:body])
    manufacturer.to_json
  end

  delete '/manufacturers/:id' do
    manufacturer = Manufacturer.find(params[:id])
    manufacturer.destroy
    manufacturer.to_json
  end



end