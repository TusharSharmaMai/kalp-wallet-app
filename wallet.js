import {
  getSeedPhrase,
  getKeyPairFromSeedPhrase,
  getEnrollmentId,
  createCsr,
} from "kalp-wallet-ts";

export function setupWallet(element) {
  let seedPhrase =
    "exclude annual crack mixed enough mother bright whisper helmet poverty oil seed";
  element.addEventListener("click", () => createWallet(seedPhrase));
}

export async function createWallet(seeds) {
  var seedPhrase;
  if (seeds) {
    seedPhrase = seeds;
  } else {
    seedPhrase = await getSeedPhrase();
  }
  console.log("seedPhrase -> ", seedPhrase);

  const keys = await getKeyPairFromSeedPhrase(seedPhrase);
  const pemPublicKey = keys.pemPublicKey;
  const pemPrivateKey = keys.pemPrivateKey;
  console.log(pemPrivateKey);
  console.log(pemPublicKey);

  const enrollmentId = await getEnrollmentId(pemPublicKey);
  console.log("enrollmentId -> ", enrollmentId, "\n");

  const csr = createCsr(enrollmentId, pemPrivateKey, pemPublicKey);
  console.log(csr);
}
