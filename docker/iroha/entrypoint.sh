#!/usr/bin/env bash
sleep 10
irohad --genesis_block genesis-chainfox.block.json --config config.docker --keypair_name $KEY --overwrite-ledger true
