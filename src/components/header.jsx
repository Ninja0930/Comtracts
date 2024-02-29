import React from "react";
import Switcher from "./switcher";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { hover } from "@testing-library/user-event/dist/hover";
import * as antdModel from "../utils/antdmodal.css";
import { Space, Modal, Dropdown } from "antd";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import ProfilePage from "./profilePage";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Header = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  const [selectedCurrency, setSelectedCurrency] = React.useState(null);

  const [mobileMenuVisible, setMobileMenuVisible] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const openProfilePage = () => {
    navigate("/profile");
  };
  
  return (
    <div className=" fixed w-full z-[99] bg-[#ffffff] dark:bg-[rgb(36,37,38)] transition-all py-1 sm:py-2 md:py-3 flex items-center justify-between shadow-md">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-4 mx-auto sm:px-6 md:px-8">
        <div className="flex justify-center items-center gap-2">
          <a href='/'>
            <img
              src="/images/svg/commune.svg"
              alt="Logo"
              className="cursor-pointer sm:h-[70px] h-[50px]"
            />
          </a>
          <a href='/' className=' no-underline dark:text-white transition-all'><p className=' cursor-pointer text-[24px] font-bold mt-[7px]'>commune</p></a>
        </div>
        <nav className="flex-wrap gap-3 items-center hidden space-x-4 pc-menu md:flex">
          <div className=''>
            <Switcher size='30' />
          </div>
          <div
            style={{ display: "flex", gap: 12 }}
            className="flex flex-col items-center justify-center ml-[1px]"
          >
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
                        <div className=" flex gap-[15px] justify-center items-center">
                          {/* <svg class="h-8 w-8 text-[#256fc4] dark:text-[white]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
                          <button onClick={() => handleBuyButton(account.address, selectedCurrency)} type="button" className='dark:text-white text-[#256fc4] text-[18px] sm:text-base md:text-[18px] transition-all evermore hover:opacity-[0.7] no-underline rounded-full dark:hover:text-white hover:text-blue-800' style={{ fontFamily: 'Smack' }}>
                            SignOut
                          </button> */}
                          <div className=" flex gap-[7px] justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-7 w-7 text-[#256fc4] dark:text-[white]">
                              <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z" clip-rule="evenodd" />
                            </svg>
                            <button onClick={openProfilePage} type="button" className='dark:text-white text-[#256fc4] text-[18px] sm:text-base md:text-[18px] transition-all evermore hover:opacity-[0.7] no-underline rounded-full dark:hover:text-white hover:text-blue-800' style={{ fontFamily: 'Smack' }}>
                              Profile
                            </button>
                          </div>
                          <button
                            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 rounded-lg bg-gradient-to-tr from-[#ffffff] dark:from-[rgb(22,22,22)] dark:to-[rgb(22,22,22)] to-[#dedede] text-[rgb(22,22,22)] dark:text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-1"
                            type="button" onClick={openChainModal} style={{ fontFamily: 'Smack' }}>
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
                            <svg class="h-5 w-5 text-[rgb(22,22,22)] dark:text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                          </button>
                          <button
                            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-[10px] px-3 rounded-lg bg-gradient-to-tr from-[#ffffff] dark:from-[rgb(22,22,22)] dark:to-[rgb(22,22,22)] to-[#dedede] text-[rgb(22,22,22)] dark:text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-2"
                            type="button" onClick={openAccountModal} style={{ fontFamily: 'Smack' }}>
                            <span className=" text-[15px] uppercase text-[rgb(22,22,22)] dark:text-white">
                              {account.displayBalance
                                ? account.displayBalance
                                : ''}
                            </span>
                            <span className=" text-[15px] first-letter:uppercase lowercase text-[rgb(22,22,22)] dark:text-white">
                              {account.displayName}
                            </span>
                            <svg class="h-5 w-5 text-[rgb(22,22,22)] dark:text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                          </button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </div>
        </nav>

        <div className="md:hidden sp-menu">
          {/* <Dropdown className={{antdModel}} menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <button
                  id="mobile-menu-button"
                  className="p-2 text-[rgb(22,22,22)] dark:text-white focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </Space>
            </a>
          </Dropdown> */}
          <Menu as="div" className="relative inline-block text-left z-[99]">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#f0f0f0] dark:bg-[rgb(36,37,38)] px-3 py-2 text-sm font-semibold text-gray-900 dark:text-[white] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <button
                  id="mobile-menu-button"
                  className="p-2 text-[rgb(22,22,22)] dark:text-white focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-50 mt-4 right-0 w-[250px] origin-top-right divide-y divide-gray-100 dark:divide-[rgb(22,22,22)] rounded-md bg-[#ffffff] dark:bg-[rgb(36,37,38)] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="p-[40px] flex flex-col justify-start items-start gap-[20px]">

                  <Menu.Item>
                    <div className=' flex gap-[21px] justify-center items-center'>
                      <Switcher size='25' />
                      <span className=" text-[#256fc4] dark:text-white" style={{ fontFamily: 'Smack' }}>
                        Night Mode
                      </span>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div
                      style={{ display: "flex", gap: 12 }}
                      className="flex flex-col items-center justify-center ml-[1px]"
                    >
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
                                    <div className=" flex gap-[14px] justify-center items-center">
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
                                  <div className=" flex flex-col gap-[14px] justify-center items-start">
                                    {/* <svg class="h-8 w-8 text-[#256fc4] dark:text-[white]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
                                    <button onClick={() => handleBuyButton(account.address, selectedCurrency)} type="button" className='dark:text-white text-[#256fc4] text-[18px] sm:text-base md:text-[18px] transition-all evermore hover:opacity-[0.7] no-underline rounded-full dark:hover:text-white hover:text-blue-800' style={{ fontFamily: 'Smack' }}>
                                      SignOut
                                    </button> */}
                                    <div className=" flex gap-[17px] justify-center items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-7 w-7 text-[#256fc4] dark:text-[white]">
                                        <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z" clip-rule="evenodd" />
                                      </svg>
                                      <button onClick={openConnectModal} type="button" className='dark:text-white text-[#256fc4] text-[18px] sm:text-base md:text-[18px] transition-all evermore hover:opacity-[0.7] no-underline rounded-full dark:hover:text-white hover:text-blue-800' style={{ fontFamily: 'Smack' }}>
                                        Profile
                                      </button>
                                    </div>
                                    <button
                                      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 rounded-lg bg-gradient-to-tr from-[#ffffff] dark:from-[rgb(22,22,22)] dark:to-[rgb(22,22,22)] to-[#dedede] text-[rgb(22,22,22)] dark:text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-1"
                                      type="button" onClick={openChainModal} style={{ fontFamily: 'Smack' }}>
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
                                      <svg class="h-5 w-5 text-[rgb(22,22,22)] dark:text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                                    </button>
                                    <button
                                      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-[10px] px-3 rounded-lg bg-gradient-to-tr from-[#ffffff] dark:from-[rgb(22,22,22)] dark:to-[rgb(22,22,22)] to-[#dedede] text-[rgb(22,22,22)] dark:text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-2"
                                      type="button" onClick={openAccountModal} style={{ fontFamily: 'Smack' }}>
                                      <span className=" text-[15px] uppercase text-[rgb(22,22,22)] dark:text-white">
                                        {account.displayBalance
                                          ? account.displayBalance
                                          : ''}
                                      </span>
                                      <span className=" text-[15px] first-letter:uppercase lowercase text-[rgb(22,22,22)] dark:text-white">
                                        {account.displayName}
                                      </span>
                                      <svg class="h-5 w-5 text-[rgb(22,22,22)] dark:text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="6 9 12 15 18 9" /></svg>
                                    </button>
                                  </div>
                                );
                              })()}
                            </div>
                          );
                        }}
                      </ConnectButton.Custom>
                    </div>
                  </Menu.Item>
                </div>
                {/* <div className="py-1">

                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Move
                      </a>
                    )}
                  </Menu.Item>
                </div> */}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

    </div>
  );
};

export default Header;
