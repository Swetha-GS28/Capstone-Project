# Problem Statement

## 1. Title

**Blood Donation Network and Emergency Matching Platform**

## 2. Domain

**Healthcare / Blood Donation Management**

The project focuses on improving the process of finding suitable blood donors during emergency situations by using a web-based platform.

## 3. Who is the User? (2–3 User Types, with Roles)

### 1. Donor

A registered individual who is willing to donate blood. The donor can provide their blood group, location, availability, and donation history.

### 2. Hospital Staff

Hospital staff can create emergency blood requests, enter patient requirements, search for compatible donors, and track the status of blood requests.

### 3. Admin

The administrator manages users, hospitals, donor information, blood requests, and monitors the overall functioning of the platform.

## 4. What Problem Are We Solving?

During medical emergencies, patients may need blood immediately, but finding a suitable donor within a short period can be difficult. Families often depend on personal contacts, social media groups, or manual searches to find compatible donors. This process can cause delays, especially when the required blood group is not readily available. For example, if a hospital urgently requires two units of A+ blood, staff may have difficulty identifying available and nearby donors quickly. The proposed system aims to make this process faster by connecting hospitals with suitable registered blood donors through an online platform.

## 5. Proposed Solution

The application will provide a centralized platform for connecting blood donors with hospitals during emergency situations.

The main features will include:

* Donor registration and login.
* Hospital registration and login.
* Donor profile management.
* Blood group and location information.
* Donor availability status.
* Creation of emergency blood requests by hospitals.
* Blood group compatibility checking.
* Matching suitable donors with blood requests.
* Prioritizing available and nearby donors.
* Donor acceptance or rejection of requests.
* Tracking blood request status.
* Recording completed donations.
* Donation history for donors.
* Admin management of donors, hospitals, and blood requests.

The system will help reduce the time required to identify suitable blood donors during emergencies.

## 6. Core Entities / Database Tables

The main database tables will be:

1. **Donor**
2. **Patient**
3. **Hospital**
4. **Hospital_User**
5. **Blood_Request**
6. **Donation**
7. **Admin**

These entities will be connected using primary keys and foreign keys to maintain relationships between donors, patients, hospitals, blood requests, and donations.

## 7. User Roles & Permissions

### Donor

**Permissions:**

* Register and log in.
* Manage personal profile.
* Enter and update blood group information.
* Set availability status.
* View emergency requests.
* Accept or decline donation requests.
* View donation history.

### Hospital Staff

**Permissions:**

* Register and log in.
* Manage hospital information.
* Create emergency blood requests.
* Enter patient blood requirements.
* Search and view compatible donors.
* Send donation requests.
* Track donor responses.
* Update blood request status.
* View previous requests.

### Admin

**Permissions:**

* Manage donor accounts.
* Manage hospital accounts.
* Monitor blood requests.
* Manage user information.
* Monitor donation records.
* Block or remove invalid accounts.
* View system reports.

## 8. Success Criteria

The project will be considered successful if:

* A donor can register and create a profile successfully.
* A hospital can create an emergency blood request quickly.
* The system can identify compatible blood groups correctly.
* The system can filter donors based on availability.
* The system can prioritize suitable nearby donors.
* A hospital can view matched donors without manually searching through all registered donors.
* A donor can accept or decline a request.
* The system can track the status of a blood request.
* Completed donations are recorded correctly.
* User and donation information is stored securely in the database.

## 9. Out of Scope

To keep the project manageable, the following features will not be included in the initial version:

* Actual medical diagnosis or treatment.
* Performing blood-group testing through the application.
* Direct blood collection or transportation.
* Online payment systems.
* Integration with government healthcare databases.
* Real-time GPS tracking of donors.
* Automated medical approval of donors.
* Physical blood-bank inventory management.
* Direct emergency ambulance services.
* Automatic SMS services in the initial version.

The platform will assist with donor matching and communication, but actual medical compatibility and donation eligibility must be verified by qualified medical professionals.

## 10. Chosen Track

**Java – Spring Boot**

### Technology Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Java with Spring Boot
* **Database:** MySQL
* **Database Management:** MySQL Workbench
* **Development Environment:** VS Code
* **Version Control:** Git and GitHub
* **API Testing:** Postman
