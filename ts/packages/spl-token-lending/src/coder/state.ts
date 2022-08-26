import { Idl, StateCoder } from "@project-serum/anchor";

export class SplTokenLendingStateCoder implements StateCoder {
  constructor(_idl: Idl) {}

  encode<T = any>(_name: string, _account: T): Promise<Buffer> {
    throw new Error("SplTokenLending does not have state");
  }
  decode<T = any>(_ix: Buffer): T {
    throw new Error("SplTokenLending does not have state");
  }
}
