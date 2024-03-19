import React from 'react'
// import CurrencyItem from '../CurrencyItem';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import {  useContractWrite } from 'wagmi';
// import { PRESALE_CONTRACT_ADDRESS, USDT_CONTRACT_ADDRESS } from '../../../utils/env';
// import * as  presaleContractABI from '../../../token_presale_abi.json';
// import * as  erc20ContractABI from '../../../token_abi.json';
// import { useCallback } from 'react';
// import { parseEther } from 'viem';
function MakerDaoModal() {
    // const { abi } = presaleContractABI
    // const { abi: erc20ABI } = erc20ContractABI

    // const [selectedCurrency, setSelectedCurrency] = React.useState(null);
    // const { write: buyWithUSDT } = useContractWrite({
    //     address: PRESALE_CONTRACT_ADDRESS,
    //     abi: abi,
    //     functionName: 'buyWithUSDT'
    // })

    // const { write: buyTokens } = useContractWrite({
    //     address: PRESALE_CONTRACT_ADDRESS,
    //     abi: abi,
    //     functionName: 'buyTokens'
    // })

    // const { writeAsync: approve } = useContractWrite({
    //     address: USDT_CONTRACT_ADDRESS,
    //     abi: erc20ABI,
    //     functionName: 'approve'
    // })


    // const handleCurrencyClick = (currency) => {
    //     setSelectedCurrency(currency);
    // };

    // const [value, setValue] = React.useState('');
    // const [transferValue, setTransferValue] = React.useState(0);
    // const [totalSupplyValue, setTotalSupplyValue] = React.useState(0);
    // const [maxiumSupplyValue, setMaxiumSupplyValue] = React.useState(0);
    const [stakeAmount, setStakeAmount] = React.useState('');
    // const [totalStakeAmount, setTotalStakeAmount] = React.useState(0);
    // const [address, setAddress] = React.useState('');


    // const handleBuyButton = useCallback(async (address, currency) => {

    //     if (currency === 'USDT') {
    //         await approve({ args: [PRESALE_CONTRACT_ADDRESS, value * 1000000], from: address });
    //         buyWithUSDT({ args: [value], from: address });
    //     }

    //     if (currency === 'ETH') {

    //         buyTokens({
    //             value: parseEther(value.toString()),
    //             from: address
    //         })
    //     }


    // }, [buyTokens, buyWithUSDT, approve, value])

    return (
        <React.Fragment>

            <div className=' ml-[-300px] bg-[#ffffff] dark:bg-[rgb(27,27,27)] transition-all px-[20px] buy-usdt flex flex-col items-center justify-center border-gray-500 rounded-[1rem] shadow-2xl w-[550px]' style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 8px 0px' }}>
                <div className='bg-[#fff] dark:bg-[rgb(27,27,27)] transition-all flex flex-col items-center rounded-t-[1rem] w-full mt-3'>
                    <div className='flex flex-col items-center justify-center px-8 py-2'>
                        <span className='flex dark:text-white transition-all' style={{ fontFamily: 'Might', fontWeight: '700', fontSize: '22px' }}>MakerDAO - Vault Management</span>
                    </div>
                </div>
                <div className='flex bg-[#fff] dark:bg-[rgb(27,27,27)] flex-col w-full mt-3'>

                    <div className='flex bg-[#fff] dark:bg-[rgb(27,27,27)] px-6 items-center justify-between w-full mt-[0px]'>
                        <span className=' dark:text-white' style={{ fontFamily: 'Might' }}>
                            MakerDAO - Vault Management
                        </span>
                    </div>

                    <div className='flex bg-slate-300 dark:bg-gray-500 my-2 mx-auto items-center justify-between w-[100%] h-[1px]' />

                    <div className='flex flex-col items-center justify-center w-full max-sm:flex-col'>
                        <div className='flex flex-col items-center justify-center md:w-80% mb-4 w-[70%]'>
                            <span className=' text-[14px] text-start items-start w-full ml-[25px] text-gray-500' style={{ fontFamily: 'Smack' }}>Collateral Type</span>

                            <div className='flex w-full flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-1.5 px-3' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                <div className='flex flex-row items-center justify-center w-full'>
                                    <input value={stakeAmount} className='border-none outline-none appearance-none w-[90%] dark:text-white dark:bg-[rgb(30,31,34)]' type='text' onChange={({ target: { value } }) => {
                                        if (!isNaN(value)) {
                                            setStakeAmount(value);
                                        }
                                    }} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center md:w-80% mb-4 w-[70%]'>
                            <span className=' text-[14px] text-start items-start w-full ml-[25px] text-gray-500' style={{ fontFamily: 'Smack' }}>Collateral Amount</span>

                            <div className='flex w-full flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-1.5 px-3' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                <div className='flex flex-row items-center justify-center w-full'>
                                    <input value={stakeAmount} className='border-none outline-none appearance-none w-[90%] dark:text-white dark:bg-[rgb(30,31,34)]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                        if (!isNaN(value)) {
                                            setStakeAmount(value);
                                        }
                                    }} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center md:w-80% mb-4 w-[70%]'>
                            <span className=' text-[14px] text-start items-start w-full ml-[25px] text-gray-500' style={{ fontFamily: 'Smack' }}>Dai Amount</span>

                            <div className='flex w-full flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-1.5 px-3' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                <div className='flex flex-row items-center justify-center w-full'>
                                    <input value={stakeAmount} className='border-none outline-none appearance-none w-[90%] dark:text-white dark:bg-[rgb(30,31,34)]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                        if (!isNaN(value)) {
                                            setStakeAmount(value);
                                        }
                                    }} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center md:w-80% mb-4 w-[70%]'>
                            <span className=' text-[14px] text-start items-start w-full ml-[25px] text-gray-500' style={{ fontFamily: 'Smack' }}>transactionStatus</span>

                            <div className='flex w-full flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-1.5 px-3' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                                <div className='flex flex-row items-center justify-center w-full'>
                                    <input value={stakeAmount} disabled className='border-none outline-none appearance-none w-[90%] dark:text-white dark:bg-[rgb(30,31,34)]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                        if (!isNaN(value)) {
                                            setStakeAmount(value);
                                        }
                                    }} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center mb-4 w-[70%] mt-[22px]'>
                            {/* <button onClick={() => console.log('1')} type="button" style={{ fontFamily: 'Might', fontSize: '18px' }} className="flex p-2 bg-[#256fc4] dark:bg-[rgb(18,18,18)] text-white items-center justify-center focus:outline-none rounded-[0.5rem] w-full hover:bg-[#6db1ff]">
                                                    Stake Now
                                                </button> */}
                            <a style={{ fontFamily: 'Might', width: '100%', fontSize: '20px', transition: '0.1s' }} className="relative rounded-[0.5rem] cursor-pointer group font-medium no-underline flex p-2 text-white items-center justify-center content-center focus:outline-none">
                                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]"  ></span>
                                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#256fc4] to-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]"></span>
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#256fc4] from-[#256fc4] dark:from-[rgb(18,18,18)] dark:to-[rgb(18,18,18)]"></span>
                                <span className="relative">Manage Vault</span>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </React.Fragment>

    )
}

export default MakerDaoModal