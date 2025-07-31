import { minions, type MinionStats, type MinionType } from '../data/minions';

type Experience = {type: string, amount: number}
type Resource = {
  name: string,
  amount: number,
  xp?: Experience
}

export class MinionSimulator {
  private minionStats: MinionStats;
  constructor(minionType: MinionType) {
    this.minionStats = minions[minionType];
  }

  calculateRates(seconds: number, tier: number = 1): Resource[] {
    const actions = Math.round(
      seconds / (this.minionStats.speed[tier - 1]*2)
    );
    console.log(
      `This ${this.minionStats.name} Minion will perform ${actions} actions per ${seconds} seconds`
    );
    const products: Resource[] = [];
    this.minionStats.baseResources.forEach(({ name, amount, xp }) => {
      const totalAmount = actions * amount;
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
