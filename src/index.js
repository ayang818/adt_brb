import * as web3 from '@solana/web3.js'
const conn = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');

// airdrop SOL
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';

const payer = Keypair.generate();

const airdropSignature = await conn.requestAirdrop(
  payer.publicKey,
  LAMPORTS_PER_SOL,
);

await conn.confirmTransaction(airdropSignature);