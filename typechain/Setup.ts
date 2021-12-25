/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SetupInterface extends utils.Interface {
  functions: {
    "defaultImplementation()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "defaultImplementation",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "defaultImplementation",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Setup extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SetupInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    defaultImplementation(overrides?: CallOverrides): Promise<[string]>;
  };

  defaultImplementation(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    defaultImplementation(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    defaultImplementation(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    defaultImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}