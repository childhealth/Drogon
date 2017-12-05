# Drogon
Experimental node.js application to investigate the functionality and software architecture for a standalone service to:

* Receive blood spot result CSV files from the [UK Newborn Screening Laboratories Network](http://www.newbornscreening.org/site/index.asp)
* Transform contents into [Immunisation Administration event FHIR messages](https://nhsconnect.github.io/Digital-Child-Health/Generated/Profile.ImmunisationAdministration/Profile.ImmunisationAdministration.html)
* Publish FHIR events to the National Events Management Services (NEMS)

# Design
![](https://github.com/childhealth/Drogon/blob/master/Arch.jpg)
## Configuration Manager
A utility module (cmgr.js) that:
* Reads configuration data from a local file (config.json)
* Exposes the data as properties that can be getted by other modules
## Audit Manager
A utility module (amgr.js) that:
* Provides an audit log write method that can be called by other modules
* Appends all audit writes to a local audit log text file (auditlog.csv)
## Input Channel Adaptor
To decouple the channel (transport and method) used to receive or fetch the blood spot CSV files from a laboratory, an Input Channel Adaptor module provides a standard interface to the Input Manager while inplementing all the channel specific functionality.
If there 
