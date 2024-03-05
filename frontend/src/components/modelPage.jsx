import React from 'react'
import ContractModel from './contractModel'
import Header from "./header";



function ModelPage() {
    const [value, setValue] =
        React.useState('');

    const models = [
        <ContractModel key='Uniswap' contractName='Uniswap' imgSrc='./images/uniswaplogo.png' click="handleUniswapModalShow" contractTitle='Uniswap Contract' contractDescription='This is contract for uniswap trade.' />,
        <ContractModel key='CurveSwap' contractName='CurveSwap' imgSrc='./images/curve-dao-token-crv-logo.png' click="handleCurveModalShow" contractTitle='Curve Contract' contractDescription='This is contract for CurveSwap trade.' />,
        <ContractModel key='MakerDao' contractName='MakerDao' imgSrc='./images/maker-mkr-seeklogo.svg' click="handleMakerDaoModalShow" contractTitle='MakerDao' contractDescription='This is contract for MakerDao Vault Management.' />,
        <ContractModel key='Aave' contractName='Aave' imgSrc='./images/aave-aave-logo.png' click="handleAaveModalShow" contractTitle='Aave Contract' contractDescription='This is contract to Deposite to Aave.' />,
        <ContractModel key='SupplyInfo' contractName='SupplyInfo' imgSrc='./images/nimiq-exchange-token-logo-png-transparent.png' click="handleSupplyModalShow" contractTitle='SupplyInfo' contractDescription='You can get the information of Total Supply and Maxium Supply.' />,
        <ContractModel key='Transfer' contractName='Transfer' imgSrc='./images/The-Transfer-Token-TTT-Logo-Pngsource-DZKBBFLC.png' click="handleTransferModalShow" contractTitle='Transfer' contractDescription='You can transfer your token and USDT to destination address.' />,
        <ContractModel key='Stake' contractName='Stake' imgSrc='./images/xdai-stake-logo.png' click="handleStakeModalShow" contractTitle='Stake' contractDescription='You can Stake your token and get bonus token every month.' />,
        <ContractModel key='Mint' contractName='Mint' imgSrc='./images/pngwing.com.png' click="handleMintModalShow" contractTitle='Mint' contractDescription='You can mint the token here.' />,

    ];
    return (
        <div className="w-full h-screen overflow-y-hidden dark:bg-[rgb(18,18,18)]">
            <Header />
            <div className=' w-[100%] dark:bg-[rgb(18,18,18)] fixed top-[100px] flex justify-center items-center'>
                <div className=" m-h-screen xl:w-[30%] sm:w-[50%]">
                    <div className=" dark:bg-[rgb(27,27,27)] items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-3 sticky" style={{ marginTop: '5px' }}>
                        <div>
                            <div className="p-2 mr-1 rounded-full hover:bg-white dark:hover:bg-[rgb(75,85,99)] cursor-pointer">

                                <svg className="h-5 w-5 text-gray-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>

                            </div>
                        </div>

                        <input value={value} onChange={({ target: { value } }) => { setValue(value) }} className="font-bold rounded-full w-full py-[0.65rem] pl-4 text-gray-700 dark:text-white bg-gray-100 dark:bg-[rgb(50,50,50)] leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="Search" />

                        <div className="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">

                            <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>

                        </div>

                    </div>
                </div>
            </div>
            <div className="w-[100%] h-full dark:bg-[rgb(18,18,18)] z-[2] flex  flex-col items-center justify-center mt-[200px]">

                <div className='w-[90%] sm:w-[70%] dark:bg-[rgb(18,18,18)] overflow-y-scroll flex gap-x-5 gap-y-7 flex-wrap items-center justify-center mb-[200px] pb-[50px]'>
                    {
                        models.map((model, index) => {
                            if (model.key.toUpperCase().includes(value.toUpperCase())) {
                                return model
                            };
                        })

                    }
                </div>

            </div>
        </div>

    )
}

export default ModelPage