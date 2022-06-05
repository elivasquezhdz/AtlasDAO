import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xFc1AC88238135B1B095fc23B7373ffD6e6685Bbc");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "AstroAvo",
        description: "This NFT will give you access to AtlasDao",
        image: readFileSync("scripts/assets/avo.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();