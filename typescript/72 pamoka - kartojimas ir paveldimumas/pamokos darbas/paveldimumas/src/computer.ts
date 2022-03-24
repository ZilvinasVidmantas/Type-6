import MotherBoard from './mother-board.js';
import Processor from './processor.js';
import RamChip from './ram-chip.js';

class Computer {
  constructor(
    // Kompiuteris turi motininę plokštę
    private motherBoard: MotherBoard,

    // Kompiuteris turi procesorių
    private processor: Processor,

    // Kompiuteris turi operatyvią atmintį
    private ramChips: RamChip[],
  ) { }

  public get ram(): number {
    return this.ramChips.reduce((total, ramChip) => total + ramChip.memory, 0);
  }

  public get ramStr(): string {
    return `${this.ram} Gb`;
  }

  public addRamChip = (ramChip: RamChip): void => {
    this.ramChips.push(ramChip);
  };
}

export default Computer;
