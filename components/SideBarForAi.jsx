'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SideBarForAi = () => {
  const [isOpen, setIsOpen] = useState({});
  const [activeLink, setActiveLink] = useState(null);
  const [showBar, setShowBar] = useState(false);

  const menuItems = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: '/dashboard.png',
      dropdown: false,
      href: '#',
      w: 24,
      h: 24,
    },
    {
      id: 'record-video',
      title: 'Record Video',
      icon: '/record-video.png',
      dropdown: false,
      href: '#',
      w: 28,
      h: 19,
    },
    {
      id: 'record-screen',
      title: 'Record Screen',
      icon: '/screenrecord.png',
      dropdown: false,
      href: '#',
      w: 23,
      h: 22.12,
    },
    {
      id: 'videos',
      title: 'Videos',
      icon: '/video.png',
      dropdown: false,
      href: '#',
      w: 24,
      h: 15.43,
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: '/project.png',
      dropdown: false,
      href: '#',
      w: 20,
      h: 20,
    },
    {
      id: 'media',
      title: 'Media',
      icon: '/media.png',
      dropdown: false,
      href: '#',
      w: 22,
      h: 19.64,
    },
    {
      id: 'emails',
      title: 'Emails',
      icon: '/email.png',
      dropdown: false,
      href: '#',
      w: 20,
      h: 16.43,
    },
    {
      id: 'create',
      title: 'Create',
      icon: '/create.png',
      dropdown: false,
      href: '#',
      w: 20,
      h: 20,
    },
    {
      id: 'ai-video-creator',
      title: 'Ai Video Creator',
      icon: '/ai-magic.png',
      dropdown: true,
      w: 20,
      h: 20,
      links: [
        { href: '/avatar', label: 'Avatar' },
        { href: '/voices', label: 'Voices' },
      ],
    },
    {
      id: 'integration',
      title: 'Integration',
      icon: '/integration.png',
      dropdown: false,
      href: '#',
      w: 20,
      h: 20,
    },
    {
      id: 'player-settings',
      title: 'Player Settings',
      icon: '/player-setting.png',
      dropdown: false,
      href: '#',
      w: 20,
      h: 20,
    },
    {
      id: 'agency',
      title: 'Agency',
      icon: '/agency.png',
      dropdown: false,
      href: '#',
      w: 20,
      h: 12.86,
    },
    {
      id: 'help',
      title: 'Help',
      icon: '/help.png',
      dropdown: false,
      href: '#',
      w: 20,
      h: 20,
    },
    {
      id: 'bonuses',
      title: 'Bonuses',
      icon: '/bonus.png',
      dropdown: false,
      href: '#',
      w: 20,
      h: 18.57,
    },
  ];

  const toggleDropdown = (id) => {
    setIsOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const path = window.location.pathname;
    menuItems.forEach((item) => {
      if (item.dropdown && item.links) {
        const active = item.links.find((link) => link.href === path);
        if (active) setActiveLink({ parentId: item.id, link: active.href });
      }
    });
  }, []);

  return (
    <>
    <aside className='bg-[#261148] w-[380px] h-screen transition-all max-xl:hidden duration-300 ease-in-out border-r-4 border-r-[#1409261a] flex flex-col font-[500] text-[16px] sticky left-0 top-0 z-30'>
      <div className='w-fit h-fit py-[41px] px-[24px] mb-[20px]'>
        <Image width={214} height={44} src={`/logo.png`} alt='logo' className='w-[214px] h-[44px]' />
      </div>

      <nav className='flex-1 overflow-y-auto pl-[24px]'>
        {menuItems.map((item) => (
          <div key={item.id} className='mb-[25px]'>
            {item.dropdown ? (
              <>
                <div
                  onClick={() => toggleDropdown(item.id)}
                  className={`flex items-center justify-between transition-all duration-300 ease-in-out max-w-[236px] mb-[25px] cursor-pointer ${
                    isOpen[item.id] && 'opacity-[1]'
                  }`}
                >
                  <div className='flex items-center gap-2'>
                    <Image
                      src={item.icon}
                      width={item.w}
                      height={item.h}
                      alt={item.title}
                      className={`w-[${item.w}px] h-[${item.h}px]`}
                    />
                    <span className='text-[14px] font-[500]'>{item.title}</span>
                  </div>
                  <Image
                    src='/arrow-down.png'
                    width={20}
                    height={20}
                    alt='toggle'
                    className='w-[20px] h-[20px]'
                  />
                </div>
                {isOpen[item.id] && (
                  <div className='cursor-pointer transition-all duration-300 ease-in-out'>
                    <div className='flex flex-col gap-7 pl-7 transition-all duration-300 ease-in-out'>
                      {item.links.map((link) => (
                        <div key={link.href} className='flex items-center gap-2 transition-all duration-300 ease-in-out'>
                          {activeLink?.parentId === item.id && activeLink.link === link.href && (
                            <Image
                              src='/dot3.png'
                              width={11}
                              height={11}
                              alt='active'
                              className='w-[11px] h-[11px]'
                            />
                          )}
                          <Link
                            href={link.href}
                            className='font-[500] text-[14px]'
                            onClick={() => setActiveLink({ parentId: item.id, link: link.href })}
                          >
                            {link.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className='flex transition-all duration-300 ease-in-out items-center gap-2 text-[14px] font-[500]'
              >
                <Image
                  src={item.icon}
                  width={item.w}
                  height={item.h}
                  alt={item.title}
                  className={`w-[${item.w}px] h-[${item.h}px]`}
                />
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </aside>
   {showBar &&
   <aside className='bg-[#261148] w-[380px] h-screen transition-all pb-20 duration-300 ease-in-out border-r-4 max-xl:fixed max-xl:top-0 max-xl:left-0 max-xl:z-[111] border-r-[#1409261a] flex flex-col font-[500] text-[16px] sticky left-0 top-0 z-30'>
      <div className='w-fit h-fit py-[41px] px-[24px] mb-[20px]'>
        <Image width={214} height={44} src={`/logo.png`} alt='logo' className='w-[214px] h-[44px]' />
      </div>

      <nav className='flex-1 overflow-y-auto pl-[24px]'>
        {menuItems.map((item) => (
          <div key={item.id} className='mb-[25px]'>
            {item.dropdown ? (
              <>
                <div
                  onClick={() => toggleDropdown(item.id)}
                  className={`flex items-center justify-between transition-all duration-300 ease-in-out max-w-[236px] mb-[25px] cursor-pointer ${
                    isOpen[item.id] && 'opacity-[1]'
                  }`}
                >
                  <div className='flex items-center gap-2'>
                    <Image
                      src={item.icon}
                      width={item.w}
                      height={item.h}
                      alt={item.title}
                      className={`w-[${item.w}px] h-[${item.h}px]`}
                    />
                    <span className='text-[14px] font-[500]'>{item.title}</span>
                  </div>
                  <Image
                    src='/arrow-down.png'
                    width={20}
                    height={20}
                    alt='toggle'
                    className='w-[20px] h-[20px]'
                  />
                </div>
                {isOpen[item.id] && (
                  <div className='cursor-pointer transition-all duration-300 ease-in-out'>
                    <div className='flex flex-col gap-7 pl-7 transition-all duration-300 ease-in-out'>
                      {item.links.map((link) => (
                        <div key={link.href} className='flex items-center gap-2'>
                          {activeLink?.parentId === item.id && activeLink.link === link.href && (
                            <Image
                              src='/dot3.png'
                              width={11}
                              height={11}
                              alt='active'
                              className='w-[11px] h-[11px]'
                            />
                          )}
                          <Link
                            href={link.href}
                            className='font-[500] text-[14px]'
                            onClick={() => setActiveLink({ parentId: item.id, link: link.href })}
                          >
                            {link.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className='flex items-center gap-2 text-[14px] font-[500]'
              >
                <Image
                  src={item.icon}
                  width={item.w}
                  height={item.h}
                  alt={item.title}
                  className={`w-[${item.w}px] h-[${item.h}px]`}
                />
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </aside>}
    <nav onClick={()=> setShowBar(!showBar)} className='cursor-pointer xl:hidden w-screen h-[50px] bg-[#261148] rounded-t-4xl border-t border-t-[#ffffff1a] fixed bottom-0 z-[1111] flex justify-center items-center'>
        <Image alt='chevron' src='/chevron-down.png' width={20} height={20} className={`w-[20px] transition-all duration-300 ease-in-out h-auto ${showBar? 'rotate-0':'rotate-180'}`}/>
    </nav>
    </>
  );
};

export default SideBarForAi;
