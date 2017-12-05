# Drogon
Experimental node.js application to investigate the functionality and software architecture for a standalone service to:

* Receive blood spot result CSV files from the [UK Newborn Screening Laboratories Network](http://www.newbornscreening.org/site/index.asp)
* Transform contents into [Immunisation Administration event FHIR messages](https://nhsconnect.github.io/Digital-Child-Health/Generated/Profile.ImmunisationAdministration/Profile.ImmunisationAdministration.html)
* Publish FHIR events to the National Events Management Services (NEMS)

# Design
![](https://github.com/childhealth/Drogon/blob/master/Arch.jpg)
## Configuration Manager
A utility module (cmgr.js) that:
* Reads configuration data from a local data file
* Exposes the data as properties that can be get by other modules
## Audit Manager
A utility module (amgr.js) that:
* Provides an audit log write method that can be called by other modules
* Appends all audit writes to an audit log text file
