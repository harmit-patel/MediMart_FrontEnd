# Medimart - Medicine Inventory System

Medimart is a powerful and user-friendly medicine inventory management system designed for store owners. It helps in managing medicines efficiently by allowing manual entry and bulk uploads, providing expiry alerts, and notifying when stock is running low.

## 🚀 Features

### 🔐 Authentication
- Owner registration and login system.
- Secure authentication using Spring Security.

### 📊 Dashboard
- Displays all uploaded medicines with details.
- Search functionality to quickly find medicines.

### 📦 Medicine Inventory Management
- Add medicines manually by filling details like:
  - Name
  - Company
  - Manufacturing Date
  - Expiry Date
  - Reorder Stock Number
  - Quantity
- Bulk upload medicines via Excel file.

### ⚠️ Alerts & Notifications
- **Expiry Alerts:**
  - Medicines expiring in 7 days are highlighted in **red**.
  - Email notification sent to the owner.
- **Low Stock Alerts:**
  - If stock goes below the reorder level, an email notification is sent.

### 🛠️ CRUD Operations
- **Update Stock:** Increment or decrement medicine quantity.
- **Delete Medicine:** Remove expired or unnecessary medicines.

## 🏗️ Tech Stack
- **Frontend:** React.js
- **Backend:** Spring Boot
- **Database:** MySQL

### 📩 Notifications
- Email alerts sent for expired medicines.
- Email alerts for low stock levels.
 
