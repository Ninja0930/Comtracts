import React from 'react'
// import CurrencyItem from '../CurrencyItem';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import {  useContractWrite } from 'wagmi';
import { PRESALE_CONTRACT_ADDRESS, USDT_CONTRACT_ADDRESS } from '../../../utils/env';
import * as  presaleContractABI from '../../../token_presale_abi.json';
import * as  erc20ContractABI from '../../../token_abi.json';
// import { useCallback } from 'react';
// import { parseEther } from 'viem';
function SupplyModal() {
    const { abi } = presaleContractABI
    const { abi: erc20ABI } = erc20ContractABI

    const { write: buyWithUSDT } = useContractWrite({
        address: PRESALE_CONTRACT_ADDRESS,
        abi: abi,
        functionName: 'buyWithUSDT'
    })

    const { write: buyTokens } = useContractWrite({
        address: PRESALE_CONTRACT_ADDRESS,
        abi: abi,
        functionName: 'buyTokens'
    })

    const { writeAsync: approve } = useContractWrite({
        address: USDT_CONTRACT_ADDRESS,
        abi: erc20ABI,
        functionName: 'approve'
    })

    const [totalSupplyValue, setTotalSupplyValue] = React.useState(0);
    const [maxiumSupplyValue, setMaxiumSupplyValue] = React.useState(0);

    return (
    <React.Fragment>

        <div className=' bg-[#fff] dark:bg-[rgb(27,27,27)] ml-[-300px] transition-all px-[20px] buy-usdt flex flex-col items-center justify-center border-gray-500 rounded-[1rem] shadow-2xl w-[550px]' style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 8px 0px' }}>
            <div className='bg-[#fff] dark:bg-[rgb(27,27,27)] transition-all flex flex-col items-center rounded-t-[1rem] w-full mt-3'>
                <div className='flex flex-col items-center justify-center px-8 py-2 mt-2'>
                    <span className='flex dark:text-white transition-all' style={{ fontFamily: 'Might', fontWeight: '700', fontSize: '22px' }}>Supply Information</span>
                </div>
            </div>
            <div className='flex bg-[#fff] dark:bg-[rgb(27,27,27)] flex-col w-full'>

                <div className='flex bg-[#fff] dark:bg-[rgb(27,27,27)] px-6 items-center justify-between w-full mt-[20px]'>
                    <span className='  dark:text-white' style={{ fontFamily: 'Might' }}>
                        Supply Information
                    </span>
                </div>

                <div className='flex bg-slate-300 dark:bg-gray-500 my-2 mx-auto items-center justify-between w-[100%] h-[1px] ' />
                <div className='flex flex-col items-center justify-between w-full sm:flex-row gap-4 dark:bg-[rgb(27,27,27)]'>
                    <div className='flex flex-col items-center justify-center md:w-80% mt-3 mb-5 w-[48%]'>
                        <span className=' text-[14px] ml-[25px] w-full items-start text-gray-500' style={{ fontFamily: 'Smack' }}>TOTAL SUPPLY</span>
                        <div className='flex flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-2 px-4 dark:shadow-none' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                            <div className='flex flex-row items-center justify-center'>
                                <input value={totalSupplyValue} disabled className='border-none dark:bg-[rgb(30,31,34)]  dark:text-white outline-none appearance-none w-[90%]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center md:w-80% mt-3 mb-5 w-[48%]'>
                        <span className=' text-[14px] ml-[25px] w-full items-start text-gray-500' style={{ fontFamily: 'Smack' }}>MAXIUM SUPPLY</span>
                        <div className='flex flex-col rounded-[0.5rem] bg-[#fff] dark:bg-[rgb(30,31,34)] py-2 px-4' style={{ boxShadow: 'rgb(109 177 255 / 98%) 0.5px 0.5px 3.5px 0.5px' }}>

                            <div className='flex flex-row items-center justify-center'>
                                <input value={maxiumSupplyValue} disabled className='border-none dark:bg-[rgb(30,31,34)] dark:text-white outline-none appearance-none w-[90%]' type='text' inputMode='numeric' onChange={({ target: { value } }) => {
                                }} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </React.Fragment>
    )
}

export default SupplyModal
