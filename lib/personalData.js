class PersonalData {
  constructor(personalData) {
    this.setPersonalData(personalData);
  }

  setPersonalData(newPersonalData) {
    this.firstName = newPersonalData.firstName;
    this.lastName = newPersonalData.lastName;
    this.birthDate = newPersonalData.birthDate;
    this.socialNetworks = newPersonalData.socialNetworks;
  }

  getSerializedPersonalData() {
    return `First name - ${this.firstName}\nLast name - ${this.lastName}\nBirth date - ${this.birthDate}`;
  }

  getSerializedSocialNetworks() {
    let serializedSocialNetworks = '';
    this.socialNetworks.forEach((socialNetwork) => {
      serializedSocialNetworks += `${socialNetwork.name} - ${socialNetwork.link}\n`;
    });
    return serializedSocialNetworks;
  }
}

module.exports = PersonalData;
