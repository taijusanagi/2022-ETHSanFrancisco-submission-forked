import { ethers } from "hardhat";

import fs from "fs";
import path from "path";

async function main() {
    const SampleERC721Protectable = await ethers.getContractFactory("SampleERC721Protectable");
    const sampleERC721Protectable = await SampleERC721Protectable.deploy();
    const result = {
        sampleERC721Protectable: sampleERC721Protectable.address
    }
    fs.writeFileSync(path.join(__dirname, `../../src/lib/contract/deployments.json`), JSON.stringify(result));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });