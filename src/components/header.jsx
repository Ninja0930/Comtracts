import React from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Input, Modal, Button } from "antd";
import { hover } from "@testing-library/user-event/dist/hover";
import * as antdModel from "../utils/antdmodal.css";
const Header = () => {
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

  const handleBuyButton = () => {
    setSelectedCurrency();
  };

  return (
    <div className="relative bg-white py-1 sm:py-2 md:py-3 flex items-center justify-between shadow-md">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-4 mx-auto sm:px-6 md:px-8">
        <div className="flex justify-center items-center gap-2">
          <a href='/'>
            <img
              src="/images/svg/commune.svg"
              alt="Logo"
              className="  cursor-pointer h-[140px] sm:h-16 md:h-18"
            />
          </a>
         <a href='/' className=' no-underline'><p className=' cursor-pointer text-[24px] font-bold mt-[7px]'>commune</p></a>
        </div>
        <nav className="flex-wrap items-center hidden space-x-4 pc-menu md:flex">
          <div
            style={{ display: "flex", gap: 12 }}
            className="flex flex-col items-center justify-center"
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
                                                <button onClick={openConnectModal} type="button" className='text-white text-sm sm:text-base md:text-[18px] transition-all evermore hover:opacity-[0.7] px-3 py-2 bg-[#e45744] border border-white no-underline rounded-full hover:bg-[#256fc4] hover:text-white' style={{ fontFamily: 'Smack' }}>
                                                    Connect Wallet
                                                </button>
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
                                            <div style={{ display: 'flex', gap: 12 }} className='flex items-center flex-col justify-center'>

                                                <button onClick={() => handleBuyButton(account.address, selectedCurrency)} type="button" className='text-white text-sm sm:text-base transition-all md:text-[18px] evermore hover:opacity-[0.7] px-3 py-2 bg-[#e45744] border border-white no-underline rounded-full hover:bg-[#256fc4] hover:text-white' style={{ fontFamily: 'Smack' }}>
                                                    Buy Now
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
          <button
            id="mobile-menu-button"
            className="p-2 text-white focus:outline-none"
            onClick={toggleMobileMenu}
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

          <div
            id="mobile-menu"
            className={mobileMenuVisible ? "block" : "hidden"}
          >
            <div className="flex justify-center w-full">
              <a
                href={"#home"}
                className="block py-2 text-sm text-white no-underline sm:text-base md:text-lg"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
