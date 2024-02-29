import React from 'react'
import Header from "./header";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function ProfilePage() {
    const { useState } = React;
    const [bannerFile, setBannerFile] = useState();
    const [userName, setUserName] = useState('unnamed');
    const [email, setEmail] = useState('fam@gmail.com');
    const [bio, setBio] = useState('Your bio here.');
    const [avatarFile, setAvatarFile] = useState();
    const [message, setMessage] = useState();
    const handleBannerFile = (e) => {
        console.log(e.target.files);
        setBannerFile(URL.createObjectURL(e.target.files[0]));
        // setMessage("");
        // const fileType = file['type'];
        // const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        // if (validImageTypes.includes(fileType)) {
        //     setFile(URL.createObjectURL(e.target.files[0]));
        // } else {
        //     setMessage("only images accepted");
        //     alert({message});
        // }

    };
    const handleAvatarFile = (e) => {
        console.log(e.target.files);
        setAvatarFile(URL.createObjectURL(e.target.files[0]));
    };
    return (
        <div className="w-full h-screen overflow-y-hidden dark:bg-[rgb(22,22,22)]">
            <Header />
            <div className=''>
                <div className=' w-full justify-center group profile_banner items-center h-[10rem] overflow-y-hidden bg-[#e1e1e1] hover:bg-[#cbcbcb] transition-all dark:bg-[rgb(30,30,30)] dark:hover:bg-[rgb(33,33,33)] cursor-pointer lg:h-[25rem] sm:h-[15rem]'>
                    {bannerFile ?
                        <span className='w-full h-full flex bg-contain bg-no-repeat bg-center overflow-y-hidden'>
                            <img className='w-full h-fit' src={bannerFile} alt="" />
                        </span>
                        : <span className='w-full h-full'>
                            {/* <img className=' w-full h-full' src='' alt="" /> */}
                            <div className=' w-full h-full'>
                            </div>
                        </span>
                    }
                    <span className='profile_banner_edit_but opacity-[0.0001] w-full flex justify-center items-center group-hover:opacity-100 transition-all lg:mt-[-100px] md:mt-[-70px] mt-[-50px] absolute'>
                        <svg class="h-5 w-5 text-[#ffffff] sm:h-8 sm:w-8" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M12 20h9" />  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                    </span>
                    <input type="file" onChange={handleBannerFile} class="opacity-0 w-full h-[20rem] absolute cursor-pointer mt-[-20rem]" />
                </div>
                <div className=' absolute z-10 mt-[-70px] lg:mt-[-160px] sm:mt-[-110px] ml-[40px] lg:ml-[70px]'>
                    <div className='justify-center flex group items-center h-[6rem] w-[6rem] overflow-y-hidden bg-[#e1e1e1] hover:bg-[#cbcbcb] transition-all dark:bg-[rgb(30,30,30)] dark:hover:bg-[rgb(33,33,33)] cursor-pointer lg:h-[12rem] lg:w-[12rem] sm:h-[9rem] sm:w-[9rem] dark:border-[rgb(22,22,22)] border-[#ffffff] border-[5px] rounded-[50%]'>
                        {avatarFile ?
                            <span className='w-full h-full flex bg-contain bg-no-repeat bg-center overflow-y-hidden'>
                                <img className='w-full h-fit' src={avatarFile} alt="" />
                            </span>
                            : <span className='w-full h-full'>
                                {/* <img className=' w-full h-full' src='' alt="" /> */}
                                <div className=' w-full h-full'>
                                </div>
                            </span>
                        }
                    </div>
                    <div className='justify-center bg-none flex group items-center mt-[-98px] sm:mt-[-145px] lg:mt-[-192px] h-[6rem] w-[6rem] overflow-y-hidden transition-all cursor-pointer lg:h-[12rem] lg:w-[12rem] sm:h-[9rem] sm:w-[9rem] rounded-[50%]'>
                        <span className='profile_banner_edit_but opacity-[0.0001] w-fit m-auto flex justify-center items-center group-hover:opacity-100 transition-all lg:mt-[-100px] md:mt-[-70px] mt-[-50px] absolute'>
                            <svg class="h-5 w-5 text-[#ffffff] sm:h-8 sm:w-8" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M12 20h9" />  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                        </span>
                        <input type="file" onChange={handleAvatarFile} class="opacity-0 w-full h-full cursor-pointer border rounded-[50%]" />
                    </div>
                </div>
                <div className=' flex flex-wrap'>
                    <div className=' w-[90%] lg:w-[30%] sm:w-[50%] flex flex-col justify-center items-center px-[40px] sm:px-[60px] lg:px-[90px]'>
                        <div className=' flex justify-start items-start mt-[50px] w-full'>
                            <p className=' text-[rgb(22,22,22)] dark:text-white text-[35px] first-letter:uppercase' style={{ fontFamily: 'Smack' }}>{userName}</p>
                        </div>
                        <div className=' w-full mt-[50px]'>
                            <ConnectButton.Custom>
                                {({
                                    account,
                                    chain,
                                    openAccountModal,
                                    openChainModal,
                                    openConnectModal,
                                    authenticationStatus,
                                    mounted,
                                }) => {
                                    // Note: If your app doesn't use authentication, you
                                    // can remove all 'authenticationStatus' checks
                                    const ready = mounted && authenticationStatus !== 'loading';
                                    const connected =
                                        ready &&
                                        account &&
                                        chain &&
                                        (!authenticationStatus ||
                                            authenticationStatus === 'authenticated');

                                    return (
                                        <div
                                            {...(!ready && {
                                                'aria-hidden': true,
                                                'style': {
                                                    opacity: 0,
                                                    pointerEvents: 'none',
                                                    userSelect: 'none',
                                                },
                                            })}
                                        >
                                            {(() => {
                                                if (!connected) {
                                                    return (
                                                        <div className=" flex gap-[4px] justify-center items-center">
                                                            <svg class="h-8 w-8 text-[#256fc4] dark:text-[white]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M20 12h-13l3 -3m0 6l-3 -3" /></svg>
                                                            <button onClick={openConnectModal} type="button" className='dark:text-white text-[#256fc4] text-[18px] sm:text-base md:text-[18px] transition-all evermore hover:opacity-[0.7] no-underline rounded-full dark:hover:text-white hover:text-blue-800' style={{ fontFamily: 'Smack' }}>
                                                                SignIn
                                                            </button>
                                                        </div>
                                                    );
                                                }

                                                if (chain.unsupported) {
                                                    return (
                                                        <button onClick={openChainModal} type="button" style={{ boxShadow: 'rgb(0 0 0 / 98%) 3px 3px 3px 3px' }}>
                                                            Wrong network
                                                        </button>
                                                    );
                                                }

                                                return (
                                                    <div className=" flex flex-col gap-[15px] justify-center items-start">
                                                        <div
                                                            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 rounded-lg bg-gradient-to-tr from-[#ffffff] dark:from-[rgb(36,37,38)] dark:to-[rgb(36,37,38)] to-[#dedede] text-[rgb(22,22,22)] dark:text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-1"
                                                            type="button" style={{ fontFamily: 'Smack' }}>
                                                            <span>

                                                                {chain.hasIcon && (
                                                                    <div
                                                                        style={{
                                                                            background: chain.iconBackground,
                                                                            borderRadius: 999,
                                                                            overflow: 'hidden',
                                                                            marginRight: 4,
                                                                        }}
                                                                    >
                                                                        {chain.iconUrl && (
                                                                            <img
                                                                                alt={chain.name ?? 'Chain icon'}
                                                                                src={chain.iconUrl}
                                                                                className=' w-[25px] h-[25px]'
                                                                            />
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </span>
                                                            <span className=" text-[15px] first-letter:uppercase lowercase text-[rgb(22,22,22)] dark:text-white">
                                                                {chain.name}
                                                            </span>
                                                        </div>
                                                        <div
                                                            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-[10px] px-3 rounded-lg bg-gradient-to-tr from-[#ffffff] dark:from-[rgb(36,37,38)] dark:to-[rgb(36,37,38)] to-[#dedede] text-[rgb(22,22,22)] dark:text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-2"
                                                            type="button" style={{ fontFamily: 'Smack' }}>
                                                            <span className=" text-[15px] uppercase text-[rgb(22,22,22)] dark:text-white">
                                                                {account.displayBalance
                                                                    ? account.displayBalance
                                                                    : ''}
                                                            </span>
                                                        </div>
                                                        <div
                                                            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-[10px] px-3 rounded-lg bg-gradient-to-tr from-[#ffffff] dark:from-[rgb(36,37,38)] dark:to-[rgb(36,37,38)] to-[#dedede] text-[rgb(22,22,22)] dark:text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-2"
                                                            type="button" style={{ fontFamily: 'Smack' }}>
                                                            <span className=" text-[15px] first-letter:uppercase lowercase text-[rgb(22,22,22)] dark:text-white">
                                                                {account.displayName}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })()}
                                        </div>
                                    );
                                }}
                            </ConnectButton.Custom>
                        </div>
                    </div>
                    <div className=' w-[90%] sm:w-[40%] mt-[50px] flex flex-col gap-[20px] sm:gap-[50px]  px-[40px] sm:px-[60px] lg:px-[90px]'>
                        <p className=' text-[rgb(22,22,22)] dark:text-white text-[25px] first-letter:uppercase' style={{ fontFamily: 'Smack' }}>{email}</p>
                        <p className=' text-[rgb(22,22,22)] dark:text-white text-[25px] first-letter:uppercase' style={{ fontFamily: 'Smack' }}>{bio}</p>
                    </div>
                    <div className=' flex justify-end items-end  px-[40px] sm:px-[60px] lg:px-[90px] mt-[30px]'>
                        <button
                            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-[14px] px-3 rounded-lg bg-gradient-to-tr from-[#ffffff] dark:from-[rgb(36,37,38)] dark:to-[rgb(36,37,38)] to-[#dedede] text-[rgb(22,22,22)] dark:text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-2"
                            type="button" style={{ fontFamily: 'Smack' }}>
                            <span className=" text-[20px] first-letter:uppercase lowercase text-[rgb(22,22,22)] dark:text-white">
                                Edit Profile
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfilePage