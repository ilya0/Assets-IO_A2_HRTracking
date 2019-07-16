//this is the structure for a user when importing from an api
export interface User {
    AddressLine1: string,
    AddressLine2: string,
    AddressLine3: string,
    CitizenshipId: number,
    CitizenshipLegislationCode: number,
    CitizenshipStatus: string,
    CitizenshipToDate: string,
    City: string,
    CorrespondenceLanguage: string,
    Country: string,
    CreationDate: string,
    DateOfBirth: string,
    DisplayName: string,
    DriversLicenseExpirationDate: string,
    DriversLicenseId: string,
    DriversLicenseIssuingCountry: string,
    EffectiveStartDate: string,
    Ethnicity: string,
    FirstName: string,
    Gender: string,
    HireDate: string,
    HomeFaxAreaCode: number,
    HomeFaxCountryCode: number,
    HomeFaxExtension: number,
    HomeFaxLegislationCode: number,
    HomeFaxNumber: number,
    HomePhoneAreaCode: number,
    HomePhoneCountryCode: number,
    HomePhoneExtension: number,
    HomePhoneLegislationCode: number,
    HomePhoneNumber: number,
    Honors: string,
    LastName: string,
    LastUpdateDate: string,
    LegalEntityId: number,
    LicenseNumber: number,
    MaritalStatus: string,
    MiddleName: string,
    MilitaryVetStatus: string,
    NameSuffix: null
    NationalId: string,
    NationalIdCountry: string,
    NationalIdExpirationDate: string,
    NationalIdType: string,
    PassportExpirationDate: string,
    PassportId: number,
    PassportIssueDate: string,
    PassportIssuingCountry: string,
    PassportNumber: number,
    PersonId: number,
    PersonNumber: number,
    PostalCode: string,
    PreferredName: string,
    PreviousLastName: string,
    ProjectedTerminationDate: string,
    Region: string,
    Region2: string,
    Religion: string,
    ReligionId: string,
    Salutation: string,
    TerminationDate: string,
    UserName: string,
    WorkEmail: string,
    WorkFaxAreaCode: number,
    WorkFaxCountryCode: number,
    WorkFaxExtension: number,
    WorkFaxLegislationCode: number,
    WorkFaxNumber: number,
    WorkMobilePhoneAreaCode:  number,
    WorkMobilePhoneCountryCode: number,
    WorkMobilePhoneExtension: number,
    WorkMobilePhoneLegislationCode: number,
    WorkMobilePhoneNumber:  number,
    WorkPhoneAreaCode: string,
    WorkPhoneCountryCode: string,
    WorkPhoneExtension: string,
    WorkPhoneLegislationCode: string,
    WorkPhoneNumber: string,
    WorkerType: string,
}