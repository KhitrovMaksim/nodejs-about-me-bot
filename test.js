const socialNetworks = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/maksim-khitrov/' },
  { name: 'GitHub', link: 'https://github.com/KhitrovMaksim' },
];

function getSerializedSocialNetworks() {
  let serializedSocialNetworks = '';
  socialNetworks.forEach((socialNetwork) => {
    serializedSocialNetworks += `${socialNetwork.name} - ${socialNetwork.link}\n`;
  });
  return serializedSocialNetworks;
}

function getSerializedSocialNetworksMap() {
  return socialNetworks
    .map((socialNetwork) => `${socialNetwork.name} - ${socialNetwork.link}`)
    .join('\n');
}

console.log(getSerializedSocialNetworks());
console.log(getSerializedSocialNetworksMap());
