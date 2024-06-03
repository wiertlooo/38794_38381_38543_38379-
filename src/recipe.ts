export interface Component {
  readonly name: string;
  readonly amount: string;
}

export interface Recipe {
  readonly id: string;
  readonly name: string;
  readonly components: Component[];
  readonly instruction: string;
  readonly type: "BREAKFAST" | "LUNCH" | "DINNER";
  readonly imageURL: string;
}
