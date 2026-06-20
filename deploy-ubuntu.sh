#!/bin/bash
# DigitalOcean Droplet / Ubuntu 24.04 Setup Script for Neuron-backend
set -e

echo "Starting deployment process..."

# 1. Update and install prerequisites
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git nginx postgresql postgresql-contrib

# 2. Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 3. Install PM2 globally
sudo npm install pm2 -g

# 4. Setup PostgreSQL (Creates database 'strapi' and user 'strapiuser')
echo "Setting up PostgreSQL..."
sudo -u postgres psql -c "CREATE DATABASE strapi;" || echo "DB already exists"
sudo -u postgres psql -c "CREATE USER strapiuser WITH ENCRYPTED PASSWORD 'MyStrongDatabasePassword123!';" || echo "User already exists"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE strapi TO strapiuser;"

# 5. Clone Repository
echo "Cloning backend repository..."
cd /var/www
if [ ! -d "strapi" ]; then
  sudo git clone https://github.com/karthikkumargeddam/Neuron-backend.git strapi
fi
cd strapi

# 6. Install dependencies and build
echo "Installing NPM dependencies..."
sudo npm install
echo "Building admin panel..."
sudo npm run build

# 7. Start PM2
echo "Starting Strapi with PM2..."
sudo pm2 start npm --name "strapi" -- run start
sudo pm2 save
sudo pm2 startup

echo "Deployment script finished! Please configure your .env file and Nginx next."
