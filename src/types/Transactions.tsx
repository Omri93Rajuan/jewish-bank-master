import User from "./User";

export default interface Transactions {
  amount: number;
  from: User;
  to: User;
}
