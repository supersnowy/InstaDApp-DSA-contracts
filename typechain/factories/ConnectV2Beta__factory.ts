/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ConnectV2Beta, ConnectV2BetaInterface } from "../ConnectV2Beta";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "LogDisableBeta",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "LogEnableBeta",
    type: "event",
  },
  {
    inputs: [],
    name: "disable",
    outputs: [
      {
        internalType: "string",
        name: "_eventName",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_eventParam",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "enable",
    outputs: [
      {
        internalType: "string",
        name: "_eventName",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_eventParam",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610647806100206000396000f3fe6080604052600436106100345760003560e01c806306fdde03146100395780632f2770db146100c9578063a3907d71146101b8575b600080fd5b34801561004557600080fd5b5061004e6102a7565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561008e578082015181840152602081019050610073565b50505050905090810190601f1680156100bb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100d16102e0565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b838110156101155780820151818401526020810190506100fa565b50505050905090810190601f1680156101425780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561017b578082015181840152602081019050610160565b50505050905090810190601f1680156101a85780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6101c0610478565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b838110156102045780820151818401526020810190506101e9565b50505050905090810190601f1680156102315780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561026a57808201518184015260208101905061024f565b50505050905090810190601f1680156102975780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6040518060400160405280600781526020017f426574612d76310000000000000000000000000000000000000000000000000081525081565b60608060003090508073ffffffffffffffffffffffffffffffffffffffff16636ca1d96a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561032e57600080fd5b505afa158015610342573d6000803e3d6000fd5b505050506040513d602081101561035857600080fd5b81019080805190602001909291905050506103db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f626574612d616c72656164792d64697361626c6564000000000000000000000081525060200191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166316ad2ac36040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561042357600080fd5b505af1158015610437573d6000803e3d6000fd5b505050506040518060400160405280601081526020017f4c6f6744697361626c65426574612829000000000000000000000000000000008152509250509091565b60608060003090508073ffffffffffffffffffffffffffffffffffffffff16636ca1d96a6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104c657600080fd5b505afa1580156104da573d6000803e3d6000fd5b505050506040513d60208110156104f057600080fd5b810190808051906020019092919050505015610574576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f626574612d616c72656164792d656e61626c656400000000000000000000000081525060200191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166316ad2ac36040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156105bc57600080fd5b505af11580156105d0573d6000803e3d6000fd5b505050506040518060400160405280600f81526020017f4c6f67456e61626c654265746128290000000000000000000000000000000000815250925050909156fea2646970667358221220c464f060fa5b983dab514d708bf13913befd56078438c54a678f0890bd6ff1f164736f6c63430007000033";

type ConnectV2BetaConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnectV2BetaConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnectV2Beta__factory extends ContractFactory {
  constructor(...args: ConnectV2BetaConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConnectV2Beta> {
    return super.deploy(overrides || {}) as Promise<ConnectV2Beta>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ConnectV2Beta {
    return super.attach(address) as ConnectV2Beta;
  }
  connect(signer: Signer): ConnectV2Beta__factory {
    return super.connect(signer) as ConnectV2Beta__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnectV2BetaInterface {
    return new utils.Interface(_abi) as ConnectV2BetaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnectV2Beta {
    return new Contract(address, _abi, signerOrProvider) as ConnectV2Beta;
  }
}