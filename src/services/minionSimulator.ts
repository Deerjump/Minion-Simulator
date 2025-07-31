import { fuelTypes, type Fuel, type FuelType } from '../data/fuel';
import { minions, type MinionStats, type MinionType } from '../data/minions';

type Experience = { type: string; amount: number };
type Resource = {
  name: string;
  amount: number;
  xp?: Experience;
};

export class MinionSimulator {
  private minionStats: MinionStats;
  private fuel?: Fuel;
  constructor(minionType: MinionType, fuelType?: FuelType) {
    this.minionStats = minions[minionType];
    if (fuelType != undefined) this.fuel = fuelTypes[fuelType];
  }

  calculateRates(seconds: number, tier: number = 1): Resource[] {
    let minionSpeed = this.minionStats.speed[tier - 1];

    if (this.fuel?.type === 'SPEED') {
      minionSpeed /= 1 + this.fuel.boost;
    }

    const actions = Math.round(seconds / (minionSpeed * 2));
    console.log(
      `This ${this.minionStats.name} Minion will perform ${actions} actions per ${seconds} seconds`
    );
    const products: Resource[] = [];
    this.minionStats.baseResources.forEach(({ name, amount, xp }) => {
      let totalAmount = actions * amount;

      if (this.fuel?.type === 'OUTPUT') totalAmount *= this.fuel.boost;

      const totalXp = {
        type: xp?.type ?? '',
        amount: xp?.amount ?? 0 * totalAmount,
      };
      products.push({
        name,
        amount: totalAmount,
        xp: totalXp.type === '' ? undefined : xp,
      });
    });

    return products;
  }
}
