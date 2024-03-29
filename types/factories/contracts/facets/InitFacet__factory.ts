/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  InitFacet,
  InitFacetInterface,
} from "../../../contracts/facets/InitFacet";

const _abi = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610350806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b7b0422d14610030575b600080fd5b61004361003e366004610301565b610045565b005b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320547fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c906001600160a01b031633146100f95760405162461bcd60e51b815260206004820152602c60248201527f4f6e6c79206f776e657220697320616c6c6f77656420746f20706572666f726d60448201526b103a3434b99030b1ba34b7b760a11b606482015260840160405180910390fd5b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff1660008115801561013f5750825b905060008267ffffffffffffffff16600114801561015c5750303b155b90508115801561016a575080155b156101885760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156101b257845460ff60401b1916600160401b1785555b7f8356a23936d9181410b4eb87f7ea6c98d92f0b339d590a092fe7e438640c39008790557fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f6020527f699d9daa71b280d05a152715774afa0a81a312594b2d731d6b0b2552b7d6f69f8054600160ff1991821681179092557ff97e938d8af42f52387bb74b8b526fda8f184cc2aa534340a8d75a88fbecc77580548216831790557f65d510a5d8f7ef134ec444f7f34ee808c8eeb5177cdfd16be0c40fe1ab43369580548216831790556307f5828d60e41b6000527f5622121b47b8cd0120c4efe45dd5483242f54a3d49bd7679be565d47694918c38054909116909117905583156102f857845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050565b60006020828403121561031357600080fd5b503591905056fea2646970667358221220c955f6b0e60b463af32df10ff65cdf27597c56d0785f522c1e3df52a2a03a26164736f6c63430008140033";

type InitFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InitFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InitFacet__factory extends ContractFactory {
  constructor(...args: InitFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      InitFacet & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): InitFacet__factory {
    return super.connect(runner) as InitFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InitFacetInterface {
    return new Interface(_abi) as InitFacetInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): InitFacet {
    return new Contract(address, _abi, runner) as unknown as InitFacet;
  }
}
