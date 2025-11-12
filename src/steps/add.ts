import { Step, type ExecutionDetails } from "grafast";

class AddStep extends Step<number> {
  constructor($a: Step<number>, $b: Step<number>) {
    super();
    this.addDependency($a);
    this.addDependency($b);
  }

  execute(details: ExecutionDetails<[number, number]>) {
    const {
      indexMap,
      values: [aDep, bDep],
    } = details;
    return indexMap((i) => {
      const a = aDep.at(i);
      const b = bDep.at(i);
      return a + b;
    });
  }
}

export function add($a: Step<number>, $b: Step<number>) {
  return new AddStep($a, $b);
}
