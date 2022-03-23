export enum RamTechnology {
  DDR1 = 'DDR1',
  DDR2 = 'DDR2',
  DDR3 = 'DDR3',
  DDR4 = 'DDR4',
  DDR5 = 'DDR5',
}

class RamChip {
  constructor(
    private p_manufacturer: string,
    private p_name: string,
    public readonly memory: number,
    private p_frequency: number,
    private p_technology: RamTechnology,
  ) { }
}

export default RamChip;
