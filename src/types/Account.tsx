import Loan from "./Loan";
import Transactions from "./Transactions";

export default interface Account {
  balance: number;
  id: string;
  loans: Loan[];
  transactions: Transactions[];
}
