import MotherBoard from './mother-board.js';
import RamChip, { RamTechnology } from './ram-chip.js';
import Processor from './processor.js';
import Computer from './computer.js';

const board: MotherBoard = new MotherBoard('Gigabyte 320d');

const ramChip1: RamChip = new RamChip('SandDisk', 'RTD: 174', 2048, 1777, RamTechnology.DDR5);
const ramChip2: RamChip = new RamChip('SandDisk', 'RTD: 174', 2048, 1777, RamTechnology.DDR5);
const ramChip3: RamChip = new RamChip('SandDisk', 'RTD: 174', 2048, 1777, RamTechnology.DDR5);
const ramChip4: RamChip = new RamChip('SandDisk', 'RTD: 174', 2048, 1777, RamTechnology.DDR5);

const ramChips: RamChip[] = [ramChip1, ramChip2];

const processor: Processor = new Processor('Intel i9 9th gen');

const computer: Computer = new Computer(board, processor, ramChips);

console.log(computer);

console.log('total Ram:', computer.ramStr);

computer.addRamChip(ramChip3);
computer.addRamChip(ramChip4);

console.log('total Ram:', computer.ramStr);
