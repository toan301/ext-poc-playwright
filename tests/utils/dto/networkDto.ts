export class NetworkDTO {
    network: string;
    address: string;
    symbol: string;

    constructor(network: string, address: string, symbol: string) {
        this.network = network;
        this.address = address;
        this.symbol = symbol;
    }
}