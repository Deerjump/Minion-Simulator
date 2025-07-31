import type { ItemName } from './items';

export type ExpType =
  | 'COMBAT'
  | 'FISHING'
  | 'FARMING'
  | 'FORAGING'
  | 'ALCHEMY'
  | 'MINING'
  | 'ENCHANTING';

export type MinionStats = {
  name: string;
  baseResources: Array<{
    name: ItemName;
    amount: number;
    xp?: { type: ExpType; amount: number };
  }>;
  speed: Array<number>;
};

export const minions = {
  COBBLESTONE: {
    name: 'Cobblestone',
    baseResources: [
      {
        name: 'Cobblestone',
        amount: 1,
        xp: { type: 'MINING', amount: 0.1 },
      },
    ],
    speed: [14, 14, 12, 12, 10, 10, 9, 9, 8, 8, 7, 6],
  },
  OBSIDIAN: {
    name: 'Obsidian',
    baseResources: [
      {
        name: 'Obsidian',
        amount: 1,
        xp: { type: 'MINING', amount: 0.4 },
      },
    ],
    speed: [45, 45, 42, 42, 39, 39, 35, 35, 30, 30, 24, 21],
  },
  GLOWSTONE: {
    name: 'Glowstone',
    baseResources: [
      {
        name: 'Glowstone',
        amount: 3,
        xp: { type: 'MINING', amount: 0.2 },
      },
    ],
    speed: [25, 25, 23, 23, 21, 21, 19, 19, 16, 16, 13, 11],
  },
  GRAVEL: {
    name: 'Gravel',
    baseResources: [
      {
        name: 'Gravel',
        amount: 1,
        xp: { type: 'MINING', amount: 0.2 },
      },
    ],
    speed: [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 13],
  },
  SAND: {
    name: 'Sand',
    baseResources: [
      {
        name: 'Sand',
        amount: 1,
        xp: { type: 'MINING', amount: 0.2 },
      },
    ],
    speed: [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 13],
  },
  RED_SAND: {
    name: 'Red Sand',
    baseResources: [
      {
        name: 'Red Sand',
        amount: 1,
        xp: { type: 'MINING', amount: 0.2 },
      },
    ],
    speed: [26, 25, 24, 23, 22, 21, 20, 19, 18, 16, 13, 11],
  },
  MYCELIUM: {
    name: 'Mycelium',
    baseResources: [
      {
        name: 'Mycelium',
        amount: 1,
        xp: { type: 'MINING', amount: 0.2 },
      },
    ],
    speed: [26, 25, 24, 23, 22, 21, 20, 19, 18, 16, 13, 11],
  },
  ICE: {
    name: 'Ice',
    baseResources: [
      {
        name: 'Ice',
        amount: 1,
        xp: { type: 'MINING', amount: 0.5 },
      },
    ],
    speed: [14, 14, 12, 12, 10, 10, 9, 9, 8, 8, 7, 6],
  },
  COAL: {
    name: 'Coal',
    baseResources: [
      {
        name: 'Coal',
        amount: 1,
        xp: { type: 'MINING', amount: 0.3 },
      },
    ],
    speed: [15, 15, 13, 13, 12, 12, 10, 10, 9, 9, 7, 6],
  },
  IRON: {
    name: 'Iron',
    baseResources: [
      {
        name: 'Iron Ore',
        amount: 1,
        xp: { type: 'MINING', amount: 0.3 },
      },
    ],
    speed: [17, 17, 15, 15, 14, 14, 12, 12, 10, 10, 8, 7],
  },
  GOLD: {
    name: 'Gold',
    baseResources: [
      {
        name: 'Gold Ore',
        amount: 1,
        xp: { type: 'MINING', amount: 0.4 },
      },
    ],
    speed: [22, 22, 20, 20, 18, 18, 16, 16, 14, 14, 11, 9],
  },
  DIAMOND: {
    name: 'Diamond',
    baseResources: [
      {
        name: 'Diamond',
        amount: 1,
        xp: { type: 'MINING', amount: 0.4 },
      },
    ],
    speed: [29, 29, 27, 27, 25, 25, 22, 22, 19, 19, 15, 12],
  },
  LAPIS: {
    name: 'Lapis',
    baseResources: [
      {
        name: 'Lapis Lazuli',
        amount: 4.5,
        xp: { type: 'MINING', amount: 0.1 },
      },
    ],
    speed: [29, 29, 27, 27, 25, 25, 23, 23, 21, 21, 18, 16],
  },
  REDSTONE: {
    name: 'Redstone',
    baseResources: [
      {
        name: 'Redstone',
        amount: 4.5,
        xp: { type: 'MINING', amount: 0.2 },
      },
    ],
    speed: [29, 29, 27, 27, 25, 25, 23, 23, 21, 21, 18, 16],
  },
  EMERALD: {
    name: 'Emerald',
    baseResources: [
      {
        name: 'Emerald',
        amount: 1,
        xp: { type: 'MINING', amount: 0.4 },
      },
    ],
    speed: [28, 28, 26, 26, 24, 24, 21, 21, 18, 18, 14, 12],
  },
  QUARTZ: {
    name: 'Quartz',
    baseResources: [
      {
        name: 'Nether Quartz',
        amount: 1,
        xp: { type: 'MINING', amount: 0.3 },
      },
    ],
    speed: [22.5, 22.5, 21, 21, 19, 19, 17, 17, 14.5, 14.5, 11.5, 10],
  },
  END_STONE: {
    name: 'End Stone',
    baseResources: [
      {
        name: 'End Stone',
        amount: 1,
        xp: { type: 'MINING', amount: 0.4 },
      },
    ],
    speed: [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 13],
  },
  MITHRIL: {
    name: 'Mithril',
    baseResources: [
      {
        name: 'Mithril',
        amount: 2,
        xp: { type: 'MINING', amount: 0.4 },
      },
    ],
    speed: [80, 80, 75, 75, 70, 70, 65, 65, 60, 60, 55, 50],
  },
  HARD_STONE: {
    name: 'Hard Stone',
    baseResources: [
      {
        name: 'Hard Stone',
        amount: 1,
        xp: { type: 'MINING', amount: 0.1 },
      },
    ],
    speed: [14, 14, 12, 12, 10, 10, 9, 9, 8, 8, 7, 6],
  },
  SNOW: {
    name: 'Snow',
    baseResources: [
      {
        name: 'Snowball',
        amount: 4,
        xp: { type: 'MINING', amount: 0.1 },
      },
    ],
    speed: [13, 13, 12, 12, 11, 11, 9.5, 9.5, 8, 8, 6.5, 5.8],
  },
  OAK: {
    name: 'Oak',
    baseResources: [
      {
        name: 'Oak Log',
        amount: 4,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
    ],
    speed: [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27],
  },
  BIRCH: {
    name: 'Birch',
    baseResources: [
      {
        name: 'Birch Log',
        amount: 4,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
    ],
    speed: [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27],
  },
  SPRUCE: {
    name: 'Spruce',
    baseResources: [
      {
        name: 'Spruce Log',
        amount: 4,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
    ],
    speed: [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27],
  },
  JUNGLE: {
    name: 'Jungle',
    baseResources: [
      {
        name: 'Jungle Log',
        amount: 4,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
    ],
    speed: [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27],
  },
  DARK_OAK: {
    name: 'Dark Oak',
    baseResources: [
      {
        name: 'Dark Oak Log',
        amount: 4,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
    ],
    speed: [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27],
  },
  ACACIA: {
    name: 'Acacia',
    baseResources: [
      {
        name: 'Acacia Log',
        amount: 4,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
    ],
    speed: [48, 48, 45, 45, 42, 42, 38, 38, 33, 33, 27],
  },
  FLOWER: {
    name: 'Flower',
    baseResources: [
      {
        name: 'Poppy',
        amount: 1 / 14,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
      {
        name: 'Blue Orchid',
        amount: 1 / 14,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
      {
        name: 'Allium',
        amount: 1 / 14,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
      {
        name: 'Azure Bluet',
        amount: 1 / 14,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
      {
        name: 'Red Tulip',
        amount: 1 / 14,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
      {
        name: 'Orange Tulip',
        amount: 1 / 14,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
      {
        name: 'White Tulip',
        amount: 1 / 14,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
      {
        name: 'Pink Tulip',
        amount: 1 / 14,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
      {
        name: 'Oxeye Daisy',
        amount: 1 / 14,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
      {
        name: 'Dandelion',
        amount: 1 / 14,
        xp: { type: 'FORAGING', amount: 0.1 },
      },
      {
        name: 'Sunflower',
        amount: 1 / 14,
        xp: { type: 'FORAGING', amount: 0.2 },
      },
      {
        name: 'Lilac',
        amount: 1 / 14,
        xp: { type: 'FORAGING', amount: 0.2 },
      },
      {
        name: 'Rose Bush',
        amount: 1 / 14,
        xp: { type: 'FORAGING', amount: 0.2 },
      },
      {
        name: 'Peony',
        amount: 1 / 14,
        xp: { type: 'FORAGING', amount: 0.2 },
      },
    ],
    speed: [30, 29, 28, 27, 26, 25, 24, 23, 22, 20, 18, 15],
  },
  FISHING: {
    name: 'Fishing',
    baseResources: [
      {
        name: 'Raw Fish',
        amount: 0.5,
        xp: { type: 'FISHING', amount: 0.5 },
      },
      {
        name: 'Raw Salmon',
        amount: 0.25,
        xp: { type: 'FISHING', amount: 0.7 },
      },
      {
        name: 'Pufferfish',
        amount: 0.12,
        xp: { type: 'FISHING', amount: 1 },
      },
      {
        name: 'Clownfish',
        amount: 0.04,
        xp: { type: 'FISHING', amount: 2 },
      },
      {
        name: 'Prismarine Crystals',
        amount: 0.03,
        xp: { type: 'FISHING', amount: 0.5 },
      },
      {
        name: 'Prismarine Shard',
        amount: 0.03,
        xp: { type: 'FISHING', amount: 0.5 },
      },
      {
        name: 'Sponge',
        amount: 0.03,
        xp: { type: 'FISHING', amount: 0.5 },
      },
    ],
    speed: [75, 75, 67, 67, 59, 59, 51, 51, 43, 43, 35, 30],
  },
  CLAY: {
    name: 'Clay',
    baseResources: [
      {
        name: 'Clay',
        amount: 4,
        xp: { type: 'FISHING', amount: 0.1 },
      },
    ],
    speed: [32, 32, 30, 30, 27.5, 27.5, 24, 24, 20, 20, 16, 14],
  },
  WHEAT: {
    name: 'Wheat',
    baseResources: [
      {
        name: 'Wheat',
        amount: 1,
        xp: { type: 'FARMING', amount: 0.2 },
      },
      {
        name: 'Seeds',
        amount: 1.5,
        xp: { type: 'FARMING', amount: 0.1 },
      },
    ],
    speed: [15, 15, 13, 13, 11, 11, 10, 10, 9, 9, 8, 7],
  },
  MELON: {
    name: 'Melon',
    baseResources: [
      {
        name: 'Melon',
        amount: 5,
        xp: { type: 'FARMING', amount: 0.1 },
      },
    ],
    speed: [24, 24, 22.5, 22.5, 21, 21, 18.5, 18.5, 16, 16, 13, 10],
  },
  PUMPKIN: {
    name: 'Pumpkin',
    baseResources: [
      {
        name: 'Pumpkin',
        amount: 1,
        xp: { type: 'FARMING', amount: 0.3 },
      },
    ],
    speed: [32, 32, 30, 30, 27, 27, 24, 24, 20, 20, 16, 12],
  },
  CARROT: {
    name: 'Carrot',
    baseResources: [
      {
        name: 'Carrot',
        amount: 3,
        xp: { type: 'FARMING', amount: 0.1 },
      },
    ],
    speed: [20, 20, 18, 18, 16, 16, 14, 14, 12, 12, 10, 8],
  },
  POTATO: {
    name: 'Potato',
    baseResources: [
      {
        name: 'Potato',
        amount: 3,
        xp: { type: 'FARMING', amount: 0.1 },
      },
    ],
    speed: [20, 20, 18, 18, 16, 16, 14, 14, 12, 12, 10, 8],
  },
  MUSHROOM: {
    name: 'Mushroom',
    baseResources: [
      {
        name: 'Red Mushroom',
        amount: 0.5,
        xp: { type: 'FARMING', amount: 0.3 },
      },
      {
        name: 'Brown Mushroom',
        amount: 0.5,
        xp: { type: 'FARMING', amount: 0.3 },
      },
    ],
    speed: [30, 30, 28, 28, 26, 26, 23, 23, 20, 20, 16, 12],
  },
  CACTUS: {
    name: 'Cactus',
    baseResources: [
      {
        name: 'Cactus',
        amount: 3,
        xp: { type: 'FARMING', amount: 0.2 },
      },
    ],
    speed: [27, 27, 25, 25, 23, 23, 21, 21, 18, 18, 15, 12],
  },
  COCOA_BEANS: {
    name: 'Cocoa Beans',
    baseResources: [
      {
        name: 'Cocoa Beans',
        amount: 3,
        xp: { type: 'FARMING', amount: 0.2 },
      },
    ],
    speed: [27, 27, 25, 25, 23, 23, 21, 21, 18, 18, 15, 12],
  },
  SUGAR_CANE: {
    name: 'Sugar Cane',
    baseResources: [
      {
        name: 'Sugar Cane',
        amount: 3,
        xp: { type: 'FARMING', amount: 0.1 },
      },
    ],
    speed: [22, 22, 20, 20, 18, 18, 16, 16, 14.5, 14.5, 12, 9],
  },
  NETHER_WART: {
    name: 'Nether Wart',
    baseResources: [
      {
        name: 'Nether Wart',
        amount: 3,
        xp: { type: 'FARMING', amount: 0.2 },
      },
    ],
    speed: [50, 50, 47, 47, 44, 44, 41, 41, 38, 38, 32, 27],
  },
  COW: {
    name: 'Cow',
    baseResources: [
      {
        name: 'Leather',
        amount: 1,
        xp: { type: 'FARMING', amount: 0.2 },
      },
      {
        name: 'Raw Beef',
        amount: 1,
        xp: { type: 'FARMING', amount: 0.1 },
      },
    ],
    speed: [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13, 10],
  },
  PIG: {
    name: 'Pig',
    baseResources: [
      {
        name: 'Raw Porkchop',
        amount: 1,
        xp: { type: 'FARMING', amount: 0.2 },
      },
    ],
    speed: [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13, 10],
  },
  CHICKEN: {
    name: 'Chicken',
    baseResources: [
      {
        name: 'Raw Chicken',
        amount: 1,
        xp: { type: 'FARMING', amount: 0.1 },
      },
      {
        name: 'Feather',
        amount: 1,
        xp: { type: 'FARMING', amount: 0.2 },
      },
    ],
    speed: [26, 26, 24, 24, 22, 22, 20, 20, 18, 18, 15, 12],
  },
  SHEEP: {
    name: 'Sheep',
    baseResources: [
      {
        name: 'Mutton',
        amount: 1,
        xp: { type: 'FARMING', amount: 0.1 },
      },
      {
        name: 'Wool',
        amount: 1,
        xp: { type: 'FARMING', amount: 0.1 },
      },
    ],
    speed: [24, 24, 22, 22, 20, 20, 18, 18, 16, 16, 12, 9],
  },
  RABBIT: {
    name: 'Rabbit',
    baseResources: [
      {
        name: 'Raw Rabbit',
        amount: 1,
        xp: { type: 'FARMING', amount: 0.1 },
      },
      {
        name: 'Rabbit Hide',
        amount: 0.7,
        xp: { type: 'FARMING', amount: 0.2 },
      },
      {
        name: "Rabbit's Foot",
        amount: 0.7,
        xp: { type: 'FARMING', amount: 0.2 },
      },
    ],
    speed: [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13, 10],
  },
  ZOMBIE: {
    name: 'Zombie',
    baseResources: [
      {
        name: 'Rotten Flesh',
        amount: 1,
        xp: { type: 'COMBAT', amount: 0.3 },
      },
      {
        name: 'Poisonous Potato',
        amount: 0.02,
      },
      {
        name: 'Carrot',
        amount: 0.01,
        xp: { type: 'FARMING', amount: 0.1 },
      },
      {
        name: 'Potato',
        amount: 0.01,
        xp: { type: 'FARMING', amount: 0.1 },
      },
    ],
    speed: [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13],
  },
  REVENANT: {
    name: 'Revenant',
    baseResources: [
      {
        name: 'Rotten Flesh',
        amount: 3.5,
        xp: { type: 'COMBAT', amount: 0.3 },
      },
      {
        name: 'Diamond',
        amount: 0.2,
        xp: { type: 'MINING', amount: 0.4 },
      },
    ],
    speed: [29, 29, 26, 26, 23, 23, 19, 19, 14.5, 14.5, 10, 8],
  },
  VOIDLING: {
    name: 'Voidling',
    baseResources: [
      {
        name: 'Obsidian',
        amount: 2.5,
        xp: { type: 'MINING', amount: 0.4 },
      },
      {
        name: 'Nether Quartz',
        amount: 0.4,
        xp: { type: 'MINING', amount: 0.3 },
      },
      {
        name: 'Enchanted Ender Pearl',
        amount: 0.000625,
        xp: { type: 'COMBAT', amount: 48 },
      },
    ],
    speed: [45, 45, 42, 42, 39, 39, 35, 35, 30, 30, 24],
  },
  INFERNO: {
    name: 'Inferno',
    baseResources: [
      {
        name: 'Crude Gabagool',
        amount: 1,
      },
    ],
    speed: [1013, 982, 950, 919, 886, 855, 823, 792, 760, 728, 697],
  },
  VAMPIRE: {
    name: 'Vampire',
    baseResources: [
      {
        name: 'Hemovibe',
        amount: 1,
        xp: { type: 'COMBAT', amount: 5 },
      },
    ],
    speed: [190, 190, 175, 175, 160, 160, 140, 140, 117, 117, 95],
  },
  SKELETON: {
    name: 'Skeleton',
    baseResources: [
      {
        name: 'Bone',
        amount: 1,
        xp: { type: 'COMBAT', amount: 0.2 },
      },
    ],
    speed: [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13],
  },
  CREEPER: {
    name: 'Creeper',
    baseResources: [
      {
        name: 'Gunpowder',
        amount: 1,
        xp: { type: 'COMBAT', amount: 0.3 },
      },
    ],
    speed: [27, 27, 25, 25, 23, 23, 21, 21, 18, 18, 14],
  },
  SPIDER: {
    name: 'Spider',
    baseResources: [
      {
        name: 'String',
        amount: 1,
        xp: { type: 'COMBAT', amount: 0.2 },
      },
      {
        name: 'Spider Eye',
        amount: 0.5,
        xp: { type: 'COMBAT', amount: 0.3 },
      },
    ],
    speed: [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13],
  },
  TARANTULA: {
    name: 'Tarantula',
    baseResources: [
      {
        name: 'String',
        amount: 3.5,
        xp: { type: 'COMBAT', amount: 0.2 },
      },
      {
        name: 'Spider Eye',
        amount: 1,
        xp: { type: 'COMBAT', amount: 0.3 },
      },
      {
        name: 'Iron Ingot',
        amount: 0.2,
        xp: { type: 'MINING', amount: 0.3 },
      },
    ],
    speed: [29, 29, 26, 26, 23, 23, 19, 19, 14.5, 14.5, 10, 8],
  },
  CAVE_SPIDER: {
    name: 'Cave Spider',
    baseResources: [
      {
        name: 'Spider Eye',
        amount: 1,
        xp: { type: 'COMBAT', amount: 0.3 },
      },
      {
        name: 'String',
        amount: 0.5,
        xp: { type: 'COMBAT', amount: 0.2 },
      },
    ],
    speed: [26, 26, 24, 24, 22, 22, 20, 20, 17, 17, 13],
  },
  BLAZE: {
    name: 'Blaze',
    baseResources: [
      {
        name: 'Blaze Rod',
        amount: 1,
        xp: { type: 'COMBAT', amount: 0.3 },
      },
    ],
    speed: [33, 33, 31, 31, 28.5, 28.5, 25, 25, 21, 21, 16.5, 15],
  },
  MAGMA_CUBE: {
    name: 'Magma Cube',
    baseResources: [
      {
        name: 'Magma Cream',
        amount: 2,
        xp: { type: 'COMBAT', amount: 0.2 },
      },
    ],
    speed: [32, 32, 30, 30, 28, 28, 25, 25, 22, 22, 18, 16],
  },
  ENDERMAN: {
    name: 'Enderman',
    baseResources: [
      {
        name: 'Ender Pearl',
        amount: 1,
        xp: { type: 'COMBAT', amount: 0.3 },
      },
    ],
    speed: [32, 32, 30, 30, 28, 28, 25, 25, 22, 22, 18],
  },
  GHAST: {
    name: 'Ghast',
    baseResources: [
      {
        name: 'Ghast Tear',
        amount: 1,
        xp: { type: 'COMBAT', amount: 0.5 },
      },
    ],
    speed: [50, 50, 47, 47, 44, 44, 41, 41, 38, 38, 32, 30],
  },
  SLIME: {
    name: 'Slime',
    baseResources: [
      {
        name: 'Slimeball',
        amount: 1,
        xp: { type: 'COMBAT', amount: 0.2 },
      },
      {
        name: 'Slimeball',
        amount: 0.5,
        xp: { type: 'COMBAT', amount: 0.2 },
      },
      {
        name: 'Slimeball',
        amount: 0.5,
        xp: { type: 'COMBAT', amount: 0.2 },
      },
    ],
    speed: [26, 26, 24, 24, 22, 22, 19, 19, 16, 16, 12],
  },
} as const satisfies { [key: string]: MinionStats };
export type MinionType = keyof typeof minions;
