(function() {var implementors = {};
implementors["pallet_contract_operator"] = [{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_contract_operator/struct.OperatorHasContracts.html\" title=\"struct pallet_contract_operator::OperatorHasContracts\">OperatorHasContracts</a>&lt;T&gt;","synthetic":true,"types":["pallet_contract_operator::OperatorHasContracts"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_contract_operator/struct.ContractHasOperator.html\" title=\"struct pallet_contract_operator::ContractHasOperator\">ContractHasOperator</a>&lt;T&gt;","synthetic":true,"types":["pallet_contract_operator::ContractHasOperator"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_contract_operator/struct.ContractParameters.html\" title=\"struct pallet_contract_operator::ContractParameters\">ContractParameters</a>&lt;T&gt;","synthetic":true,"types":["pallet_contract_operator::ContractParameters"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_contract_operator/struct.Module.html\" title=\"struct pallet_contract_operator::Module\">Module</a>&lt;T&gt;","synthetic":true,"types":["pallet_contract_operator::Module"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_contract_operator/enum.Call.html\" title=\"enum pallet_contract_operator::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Hash: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"pallet_contract_operator/trait.Trait.html\" title=\"trait pallet_contract_operator::Trait\">Trait</a>&gt;::<a class=\"type\" href=\"pallet_contract_operator/trait.Trait.html#associatedtype.Parameters\" title=\"type pallet_contract_operator::Trait::Parameters\">Parameters</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_contract_operator::Call"]},{"text":"impl&lt;AccountId, Parameters&gt; Freeze for <a class=\"enum\" href=\"pallet_contract_operator/enum.RawEvent.html\" title=\"enum pallet_contract_operator::RawEvent\">RawEvent</a>&lt;AccountId, Parameters&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Parameters: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_contract_operator::RawEvent"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_contract_operator/parameters/struct.DefaultParameters.html\" title=\"struct pallet_contract_operator::parameters::DefaultParameters\">DefaultParameters</a>","synthetic":true,"types":["pallet_contract_operator::parameters::DefaultParameters"]}];
implementors["pallet_plasm_staking"] = [{"text":"impl&lt;AccountId, Balance&gt; Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.IndividualExposure.html\" title=\"struct pallet_plasm_staking::IndividualExposure\">IndividualExposure</a>&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_plasm_staking::IndividualExposure"]},{"text":"impl&lt;AccountId, Balance&gt; Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.Exposure.html\" title=\"struct pallet_plasm_staking::Exposure\">Exposure</a>&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_plasm_staking::Exposure"]},{"text":"impl&lt;Balance&gt; Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.UnlockChunk.html\" title=\"struct pallet_plasm_staking::UnlockChunk\">UnlockChunk</a>&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_plasm_staking::UnlockChunk"]},{"text":"impl&lt;AccountId, Balance&gt; Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.StakingLedger.html\" title=\"struct pallet_plasm_staking::StakingLedger\">StakingLedger</a>&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_plasm_staking::StakingLedger"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.GenesisConfig.html\" title=\"struct pallet_plasm_staking::GenesisConfig\">GenesisConfig</a>&lt;T&gt;","synthetic":true,"types":["pallet_plasm_staking::GenesisConfig"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.Bonded.html\" title=\"struct pallet_plasm_staking::Bonded\">Bonded</a>&lt;T&gt;","synthetic":true,"types":["pallet_plasm_staking::Bonded"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.Ledger.html\" title=\"struct pallet_plasm_staking::Ledger\">Ledger</a>&lt;T&gt;","synthetic":true,"types":["pallet_plasm_staking::Ledger"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.Payee.html\" title=\"struct pallet_plasm_staking::Payee\">Payee</a>&lt;T&gt;","synthetic":true,"types":["pallet_plasm_staking::Payee"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.StakedContracts.html\" title=\"struct pallet_plasm_staking::StakedContracts\">StakedContracts</a>&lt;T&gt;","synthetic":true,"types":["pallet_plasm_staking::StakedContracts"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.CurrentElected.html\" title=\"struct pallet_plasm_staking::CurrentElected\">CurrentElected</a>&lt;T&gt;","synthetic":true,"types":["pallet_plasm_staking::CurrentElected"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.CurrentEra.html\" title=\"struct pallet_plasm_staking::CurrentEra\">CurrentEra</a>","synthetic":true,"types":["pallet_plasm_staking::CurrentEra"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.CurrentEraStart.html\" title=\"struct pallet_plasm_staking::CurrentEraStart\">CurrentEraStart</a>&lt;T&gt;","synthetic":true,"types":["pallet_plasm_staking::CurrentEraStart"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.CurrentEraStartSessionIndex.html\" title=\"struct pallet_plasm_staking::CurrentEraStartSessionIndex\">CurrentEraStartSessionIndex</a>","synthetic":true,"types":["pallet_plasm_staking::CurrentEraStartSessionIndex"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.ForceEra.html\" title=\"struct pallet_plasm_staking::ForceEra\">ForceEra</a>","synthetic":true,"types":["pallet_plasm_staking::ForceEra"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.StorageVersion.html\" title=\"struct pallet_plasm_staking::StorageVersion\">StorageVersion</a>","synthetic":true,"types":["pallet_plasm_staking::StorageVersion"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.Validators.html\" title=\"struct pallet_plasm_staking::Validators\">Validators</a>&lt;T&gt;","synthetic":true,"types":["pallet_plasm_staking::Validators"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/struct.Module.html\" title=\"struct pallet_plasm_staking::Module\">Module</a>&lt;T&gt;","synthetic":true,"types":["pallet_plasm_staking::Module"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"enum\" href=\"pallet_plasm_staking/enum.Call.html\" title=\"enum pallet_plasm_staking::Call\">Call</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as <a class=\"trait\" href=\"pallet_plasm_staking/trait.Trait.html\" title=\"trait pallet_plasm_staking::Trait\">Trait</a>&gt;::<a class=\"type\" href=\"pallet_plasm_staking/trait.Trait.html#associatedtype.Currency\" title=\"type pallet_plasm_staking::Trait::Currency\">Currency</a> as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"pallet_plasm_staking/trait.Trait.html\" title=\"trait pallet_plasm_staking::Trait\">Trait</a>&gt;::<a class=\"type\" href=\"pallet_plasm_staking/trait.Trait.html#associatedtype.Currency\" title=\"type pallet_plasm_staking::Trait::Currency\">Currency</a>: Currency&lt;&lt;T as Trait&gt;::AccountId&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Lookup: StaticLookup,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Lookup as StaticLookup&gt;::Source: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_plasm_staking::Call"]},{"text":"impl&lt;AccountId, Balance&gt; Freeze for <a class=\"enum\" href=\"pallet_plasm_staking/enum.RawEvent.html\" title=\"enum pallet_plasm_staking::RawEvent\">RawEvent</a>&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":["pallet_plasm_staking::RawEvent"]},{"text":"impl Freeze for <a class=\"struct\" href=\"pallet_plasm_staking/parameters/struct.StakingParameters.html\" title=\"struct pallet_plasm_staking::parameters::StakingParameters\">StakingParameters</a>","synthetic":true,"types":["pallet_plasm_staking::parameters::StakingParameters"]}];
implementors["plasm_cli"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"plasm_cli/enum.ChainSpec.html\" title=\"enum plasm_cli::ChainSpec\">ChainSpec</a>","synthetic":true,"types":["plasm_cli::ChainSpec"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_cli/chain_spec/struct.Extensions.html\" title=\"struct plasm_cli::chain_spec::Extensions\">Extensions</a>","synthetic":true,"types":["plasm_cli::chain_spec::Extensions"]}];
implementors["plasm_executor"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_executor/struct.Executor.html\" title=\"struct plasm_executor::Executor\">Executor</a>","synthetic":true,"types":["plasm_executor::Executor"]}];
implementors["plasm_node"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_node/struct.Exit.html\" title=\"struct plasm_node::Exit\">Exit</a>","synthetic":true,"types":["plasm_node::Exit"]}];
implementors["plasm_rpc"] = [{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"plasm_rpc/struct.LightDeps.html\" title=\"struct plasm_rpc::LightDeps\">LightDeps</a>&lt;F&gt;","synthetic":true,"types":["plasm_rpc::LightDeps"]}];
implementors["plasm_runtime"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.BlockHashCount.html\" title=\"struct plasm_runtime::BlockHashCount\">BlockHashCount</a>","synthetic":true,"types":["plasm_runtime::BlockHashCount"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.MaximumBlockWeight.html\" title=\"struct plasm_runtime::MaximumBlockWeight\">MaximumBlockWeight</a>","synthetic":true,"types":["plasm_runtime::MaximumBlockWeight"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.MaximumBlockLength.html\" title=\"struct plasm_runtime::MaximumBlockLength\">MaximumBlockLength</a>","synthetic":true,"types":["plasm_runtime::MaximumBlockLength"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.Version.html\" title=\"struct plasm_runtime::Version\">Version</a>","synthetic":true,"types":["plasm_runtime::Version"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.AvailableBlockRatio.html\" title=\"struct plasm_runtime::AvailableBlockRatio\">AvailableBlockRatio</a>","synthetic":true,"types":["plasm_runtime::AvailableBlockRatio"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.EpochDuration.html\" title=\"struct plasm_runtime::EpochDuration\">EpochDuration</a>","synthetic":true,"types":["plasm_runtime::EpochDuration"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.ExpectedBlockTime.html\" title=\"struct plasm_runtime::ExpectedBlockTime\">ExpectedBlockTime</a>","synthetic":true,"types":["plasm_runtime::ExpectedBlockTime"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.ExistentialDeposit.html\" title=\"struct plasm_runtime::ExistentialDeposit\">ExistentialDeposit</a>","synthetic":true,"types":["plasm_runtime::ExistentialDeposit"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.TransferFee.html\" title=\"struct plasm_runtime::TransferFee\">TransferFee</a>","synthetic":true,"types":["plasm_runtime::TransferFee"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.CreationFee.html\" title=\"struct plasm_runtime::CreationFee\">CreationFee</a>","synthetic":true,"types":["plasm_runtime::CreationFee"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.TransactionBaseFee.html\" title=\"struct plasm_runtime::TransactionBaseFee\">TransactionBaseFee</a>","synthetic":true,"types":["plasm_runtime::TransactionBaseFee"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.TransactionByteFee.html\" title=\"struct plasm_runtime::TransactionByteFee\">TransactionByteFee</a>","synthetic":true,"types":["plasm_runtime::TransactionByteFee"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.WeightFeeCoefficient.html\" title=\"struct plasm_runtime::WeightFeeCoefficient\">WeightFeeCoefficient</a>","synthetic":true,"types":["plasm_runtime::WeightFeeCoefficient"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.TargetBlockFullness.html\" title=\"struct plasm_runtime::TargetBlockFullness\">TargetBlockFullness</a>","synthetic":true,"types":["plasm_runtime::TargetBlockFullness"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.MinimumPeriod.html\" title=\"struct plasm_runtime::MinimumPeriod\">MinimumPeriod</a>","synthetic":true,"types":["plasm_runtime::MinimumPeriod"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.SessionKeys.html\" title=\"struct plasm_runtime::SessionKeys\">SessionKeys</a>","synthetic":true,"types":["plasm_runtime::SessionKeys"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.SessionsPerEra.html\" title=\"struct plasm_runtime::SessionsPerEra\">SessionsPerEra</a>","synthetic":true,"types":["plasm_runtime::SessionsPerEra"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.BondingDuration.html\" title=\"struct plasm_runtime::BondingDuration\">BondingDuration</a>","synthetic":true,"types":["plasm_runtime::BondingDuration"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.ContractTransferFee.html\" title=\"struct plasm_runtime::ContractTransferFee\">ContractTransferFee</a>","synthetic":true,"types":["plasm_runtime::ContractTransferFee"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.ContractCreationFee.html\" title=\"struct plasm_runtime::ContractCreationFee\">ContractCreationFee</a>","synthetic":true,"types":["plasm_runtime::ContractCreationFee"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.ContractTransactionBaseFee.html\" title=\"struct plasm_runtime::ContractTransactionBaseFee\">ContractTransactionBaseFee</a>","synthetic":true,"types":["plasm_runtime::ContractTransactionBaseFee"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.ContractTransactionByteFee.html\" title=\"struct plasm_runtime::ContractTransactionByteFee\">ContractTransactionByteFee</a>","synthetic":true,"types":["plasm_runtime::ContractTransactionByteFee"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.ContractFee.html\" title=\"struct plasm_runtime::ContractFee\">ContractFee</a>","synthetic":true,"types":["plasm_runtime::ContractFee"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.TombstoneDeposit.html\" title=\"struct plasm_runtime::TombstoneDeposit\">TombstoneDeposit</a>","synthetic":true,"types":["plasm_runtime::TombstoneDeposit"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.RentByteFee.html\" title=\"struct plasm_runtime::RentByteFee\">RentByteFee</a>","synthetic":true,"types":["plasm_runtime::RentByteFee"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.RentDepositOffset.html\" title=\"struct plasm_runtime::RentDepositOffset\">RentDepositOffset</a>","synthetic":true,"types":["plasm_runtime::RentDepositOffset"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.SurchargeReward.html\" title=\"struct plasm_runtime::SurchargeReward\">SurchargeReward</a>","synthetic":true,"types":["plasm_runtime::SurchargeReward"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.WindowSize.html\" title=\"struct plasm_runtime::WindowSize\">WindowSize</a>","synthetic":true,"types":["plasm_runtime::WindowSize"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.ReportLatency.html\" title=\"struct plasm_runtime::ReportLatency\">ReportLatency</a>","synthetic":true,"types":["plasm_runtime::ReportLatency"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.Runtime.html\" title=\"struct plasm_runtime::Runtime\">Runtime</a>","synthetic":true,"types":["plasm_runtime::Runtime"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.ModuleToIndex.html\" title=\"struct plasm_runtime::ModuleToIndex\">ModuleToIndex</a>","synthetic":true,"types":["plasm_runtime::ModuleToIndex"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.GenesisConfig.html\" title=\"struct plasm_runtime::GenesisConfig\">GenesisConfig</a>","synthetic":true,"types":["plasm_runtime::GenesisConfig"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.RuntimeApi.html\" title=\"struct plasm_runtime::RuntimeApi\">RuntimeApi</a>","synthetic":true,"types":["plasm_runtime::RuntimeApi"]},{"text":"impl&lt;C&gt; !Freeze for <a class=\"struct\" href=\"plasm_runtime/struct.RuntimeApiImpl.html\" title=\"struct plasm_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;C&gt;","synthetic":true,"types":["plasm_runtime::RuntimeApiImpl"]},{"text":"impl Freeze for <a class=\"enum\" href=\"plasm_runtime/enum.Event.html\" title=\"enum plasm_runtime::Event\">Event</a>","synthetic":true,"types":["plasm_runtime::Event"]},{"text":"impl Freeze for <a class=\"enum\" href=\"plasm_runtime/enum.Origin.html\" title=\"enum plasm_runtime::Origin\">Origin</a>","synthetic":true,"types":["plasm_runtime::Origin"]},{"text":"impl Freeze for <a class=\"enum\" href=\"plasm_runtime/enum.Call.html\" title=\"enum plasm_runtime::Call\">Call</a>","synthetic":true,"types":["plasm_runtime::Call"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"plasm_runtime/impls/struct.LinearWeightToFee.html\" title=\"struct plasm_runtime::impls::LinearWeightToFee\">LinearWeightToFee</a>&lt;C&gt;","synthetic":true,"types":["plasm_runtime::impls::LinearWeightToFee"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"plasm_runtime/impls/struct.TargetedFeeAdjustment.html\" title=\"struct plasm_runtime::impls::TargetedFeeAdjustment\">TargetedFeeAdjustment</a>&lt;T&gt;","synthetic":true,"types":["plasm_runtime::impls::TargetedFeeAdjustment"]}];
implementors["subkey"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"subkey/struct.Ed25519.html\" title=\"struct subkey::Ed25519\">Ed25519</a>","synthetic":true,"types":["subkey::Ed25519"]},{"text":"impl Freeze for <a class=\"struct\" href=\"subkey/struct.Sr25519.html\" title=\"struct subkey::Sr25519\">Sr25519</a>","synthetic":true,"types":["subkey::Sr25519"]},{"text":"impl Freeze for <a class=\"struct\" href=\"subkey/struct.Ecdsa.html\" title=\"struct subkey::Ecdsa\">Ecdsa</a>","synthetic":true,"types":["subkey::Ecdsa"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"subkey/vanity/struct.KeyPair.html\" title=\"struct subkey::vanity::KeyPair\">KeyPair</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"subkey/trait.Crypto.html\" title=\"trait subkey::Crypto\">Crypto</a>&gt;::<a class=\"type\" href=\"subkey/trait.Crypto.html#associatedtype.Pair\" title=\"type subkey::Crypto::Pair\">Pair</a>: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as <a class=\"trait\" href=\"subkey/trait.Crypto.html\" title=\"trait subkey::Crypto\">Crypto</a>&gt;::<a class=\"type\" href=\"subkey/trait.Crypto.html#associatedtype.Pair\" title=\"type subkey::Crypto::Pair\">Pair</a> as Pair&gt;::Seed: Freeze,&nbsp;</span>","synthetic":true,"types":["subkey::vanity::KeyPair"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()