export interface Pokemon {
    id: number;
    num: string;
    name: string;
    img: string;
    type: string[];
    height: string;
    weight: string;
    candy: string;
    candy_count: number;
    egg: string;
    spawn_chance: number;
    avg_spawns: number;
    spawn_time: string;
    multipliers: number[];
    weaknesses: string[];
    next_evolution?: Evolution[];
  }
  
  interface Evolution {
    num: string;
    name: string;
  }