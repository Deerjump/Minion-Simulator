export type Fuel = {
  name: string,
  boost: number
  type: 'SPEED' | 'OUTPUT'| 'SPECIAL'
}
export const fuelTypes = {
  HAMSTER_WHEEL: {
    name: 'Hamster Wheel',
    boost: 0.5,
    type: 'SPEED'
  },
  FOUL_FLESH: {
    name: 'Foul Flesh',
    boost: 0.9,
    type: 'SPEED'
  },
  CATALYST: {
    name: 'Catalyst',
    boost: 3,
    type: 'OUTPUT'
  },
  HYPER_CATALYST: {
    name: 'Hyper Catalyst',
    boost: 4,
    type: 'OUTPUT'
  },
  TASTY_CHEESE: {
    name: 'Tasty Cheese',
    boost: 2,
    type: 'OUTPUT'
  },
  INFERNO_MINION_FUEL: {
    name: 'Inferno Minion Fuel',
    boost: 1,
    type: 'SPECIAL'
  },
  ENCHANTED_LAVA_BUCKET: {
    name: 'Enchanted Lava Bucket',
    boost: 0.25,
    type: 'SPEED'
  },
  MAGMA_BUCKET: {
    name: 'Magma Bucket',
    boost: 0.3,
    type: 'SPEED'
  },
  PLASMA_BUCKET: {
    name: 'Plasma Bucket',
    boost: 0.35,
    type: 'SPEED'
  },
  EVERBURNING_FLAME: {
    name: 'Everburning Flame',
    boost: 0.35,
    type: 'SPECIAL'
  }
} as const satisfies Record<string, Fuel>;
export type FuelType = keyof typeof fuelTypes