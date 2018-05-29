// Drogon - 

"use strict";

var readline = require('readline-sync');
var figlet = require('figlet');
var config = require('./cmgr.js');
var audit = require('./amgr.js');
var mail = require('./nhsmail.js');

const INFO = 'INFO';
const DROGON = 'DROGON';

var cmgr = new config();
var amgr = new audit(cmgr);

amgr.Log(INFO, DROGON, 'Started');

console.log(figlet.textSync('Drogon'));

var username = readline.question('Email username? ');
var password = readline.question('Email password? ', {
  hideEchoBack: true 
});

var email = new mail(cmgr, username, password);

email.Open();


email.Close();

var uuid = require('node-uuid');

function writeEvent() 
{
  var event = new Object();
  event["resourceType"] = "Bundle";
  event["type"] = "message";
  event["entry"] = [];

  var messageHeader = new Object();
  var pubid = uuid.v4();
  messageHeader["fullUrl"] = "urn:uuid:" + pubid;

  var resource = new Object();
  resource["resourceType"] = "MessageHeader";
  resource["extension"] = [
    {
      "url": "https://fhir.nhs.uk/StructureDefinition/Extension-DCH-MessageEventType-1",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "https://fhir.nhs.uk/DCH-MessageEventType-1",
            "code": "",
            "display": ""
          }
        ]
      }
    }
  ];
  resource.extension[0].valueCodeableConcept.coding[0].code = "new";
  resource.extension[0].valueCodeableConcept.coding[0].display = "New event message";
  var now = new Date();
  resource["timestamp"] = now.toISOString();
  resource["event"] = {
    "system": "https://fhir.nhs.uk/DCH-ChildHealthEventType-1",
    "code": "",
    "display": ""
  };
  resource.event.code = "CH006";
  resource.event.display = "Blood Spot";
  resource["source"] = {
    "endpoint": ""
  };
  resource.source.endpoint = "urn:nhs-uk:addressing:ods:695N0";
  resource["responsible"] = {
    "reference": ""
  };
  var responsibleid = uuid.v4();
  resource.responsible.reference = "urn:uuid:" + responsibleid;
  resource["data"] = [
  {
    "reference": ""
  }
  ];
  var dataid = uuid.v4();
  resource.data[0].reference = "urn:uuid:" + dataid;  
  messageHeader["resource"] = resource;
  event["entry"][0] = messageHeader;

  return event;
}

var event = writeEvent();
//console.log(JSON.stringify(event, null, 2));

amgr.Log(INFO, DROGON, 'Finished');

// Blood Spot Result - this is the information provided by a laboratory
// MAK 27-11-2017
class BloodSpotResult {
  // constructor
  constructor(National_Id, Lab_Serial_No, Provider_unit, nhs_no, Surname, First_Name, Date_Of_Birth, Gender_Code, GP_Name, GP_Code, Birth_Order, Birth_Confinement, Birth_Weight,Gestation_Length,
    NICU, Mothers_Surname, Alternate_Surname, Mothers_Firstname, Address_1, Address_2, Address_3, Address_4, Address_5, Postcode, Mothers_Telephone, Date_of_receipt, Date_Of_Collection, Previous_Lab_Serial_No,
    Sample_Taker, Lab_Code, PKU_Status_Code, PKU_Supplementary_Code, PKU_Status, CHT_Status_Code, CHT_Supplementary_Code, CHT_Status, Sickle_Status_Code, Sickle_Supplementary_Code, Sickle_Status,
    CF_Status_Code, CF_Supplementary_Code, CF_Status, MCADD_Status_Code, MCADD_Supplementary_Code, MCADD_Status, HCU_Status_Code, HCU_Supplementary_Code, HCU_Status, MSUD_Status_Code, MSUD_Supplementary_Code,
    MSUD_Status, GA1_Status_Code, GA1_Supplementary_Code, GA1_Status, IVA_Status_Code, IVA_Supplementary_Code, IVA_Status) {
    this.National_Id = National_Id;
    this.Lab_Serial_No = Lab_Serial_No;
    this.Provider_unit = Provider_unit;
    this.nhs_no = nhs_no;
    this.Surname = Surname;
    this.First_Name = First_Name;
    this.Date_Of_Birth = Date_Of_Birth;
    this.Gender_Code = Gender_Code;
    this.GP_Name = GP_Name;
    this.GP_Code = GP_Code;
    this.Birth_Order = Birth_Order;
    this.Birth_Confinement = Birth_Confinement;
    this.Birth_Weight = Birth_Weight;
    this.Gestation_Length = Gestation_Length;
    this.NICU = NICU;
    this.Mothers_Surname = Mothers_Surname;
    this.Alternate_Surname = Alternate_Surname;
    this.Mothers_Firstname = Mothers_Firstname;
    this.Address_1 = Address_1;
    this.Address_2 = Address_2;
    this.Address_3 = Address_3;
    this.Address_4 = Address_4;
    this.Address_5 = Address_5;
    this.Postcode = Postcode;
    this.Mothers_Telephone = Mothers_Telephone;
    this.Date_of_receipt = Date_of_receipt;
    this.Date_Of_Collection = Date_Of_Collection;
    this.Previous_Lab_Serial_No = Previous_Lab_Serial_No;
    this.Sample_Taker = Sample_Taker;
    this.Lab_Code = Lab_Code;
    this.PKU_Status_Code = PKU_Status_Code;
    this.PKU_Supplementary_Code = PKU_Supplementary_Code;
    this.PKU_Status = PKU_Status;
    this.CHT_Status_Code = CHT_Status_Code;
    this.CHT_Supplementary_Code = CHT_Supplementary_Code;
    this.CHT_Status = CHT_Status;
    this.Sickle_Status_Code = Sickle_Status_Code;
    this.Sickle_Supplementary_Code = Sickle_Supplementary_Code;
    this.Sickle_Status = Sickle_Status;
    this.CF_Status_Code = CF_Status_Code;
    this.CF_Supplementary_Code = CF_Supplementary_Code;
    this.CF_Status = CF_Status;
    this.MCADD_Status_Code = MCADD_Status_Code;
    this.MCADD_Supplementary_Code = MCADD_Supplementary_Code;
    this.MCADD_Status = MCADD_Status;
    this.HCU_Status_Code = HCU_Status_Code;
    this.HCU_Supplementary_Code = HCU_Supplementary_Code;
    this.HCU_Status = HCU_Status;
    this.MSUD_Status_Code = MSUD_Status_Code;
    this.MSUD_Supplementary_Code = MSUD_Supplementary_Code;
    this.MSUD_Status = MSUD_Status;
    this.GA1_Status_Code = GA1_Status_Code;
    this.GA1_Supplementary_Code = GA1_Supplementary_Code;
    this.GA1_Status = GA1_Status;
    this.IVA_Status_Code = IVA_Status_Code;
    this.IVA_Supplementary_Code = IVA_Supplementary_Code;
    this.IVA_Status = IVA_Status;
  }

}