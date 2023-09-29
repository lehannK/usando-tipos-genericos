interface Ship {
  name: string;
  pilot: string;
}

interface TransportShip extends Ship {
  capacity: number;
}

function modifyShip<shipType extends Ship>(
  modifiedShip: shipType,
  newName: string,
  newPilot: string
): shipType | undefined {
  modifiedShip.name = newName;
  modifiedShip.pilot = newPilot;
  console.log(modifiedShip);
  return modifiedShip;
}

const cargoShip: TransportShip = {
  name: "heavy ship",
  pilot: "captain rob ",
  capacity: 5,
};

const ordinaryShip: Ship = {
  name: "usual ship",
  pilot: "captain john",
};

console.log(cargoShip);
console.log(ordinaryShip);

modifyShip(cargoShip, "super heavy ship", "captain rob jr");
modifyShip(ordinaryShip, "usual star ship", "captain john jr");
