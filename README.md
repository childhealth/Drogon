# Drogon
Experimental node.js application to investigate the functionality and software architecture for a standalone service to:

* Receive blood spot result CSV files from the [UK Newborn Screening Laboratories Network](http://www.newbornscreening.org/site/index.asp)
* Transform contents into [Immunisation Administration event FHIR messages](https://nhsconnect.github.io/Digital-Child-Health/Generated/Profile.ImmunisationAdministration/Profile.ImmunisationAdministration.html)
* Publish FHIR events to the National Events Management Services (NEMS)

# Design
![](https://github.com/childhealth/Drogon/blob/master/Arch.jpg)
## Configuration Manager
