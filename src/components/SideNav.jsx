import React from 'react';
import { SideNavTopData, SideNavData, SideNavDownData } from '../data';

const NavigationItem = ({ item }) => {
  const isActive = item.active;
  const baseStyle = `flex items-center space-x-3 px-4 py-2.5 rounded-lg group duration-150`;
  const activeStyle = isActive
    ? 'text-cl-blue-dark'
    : 'text-cl-text-secondary hover:bg-cl-background-light hover:text-cl-blue';

  return (
    <a
      href="#"
      className={`${baseStyle} ${activeStyle}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.icon &&
        React.cloneElement(item.icon, {
          size: 20,
        })}
      <span className="font-semibold text-sm">{item.label}</span>
    </a>
  );
};

const SideNav = () => {
  return (
    <aside className="max-sm:hidden max-xl:w-62 xl:mr-3 xl:w-64 bg-cl-bg-sidebar p-6 xl:pt-14 flex flex-col shadow-lg flex-shrink-0 h-full">
      {/* Website Logo */}
      <div className="text-3xl font-bold text-cl-bar-blue mb-12">
        Health<span className="text-cl-blue-dark">care.</span>
      </div>

      {/* Sidebar Sections */}
      <nav className="flex-grow flex flex-col">
        {/* General Section */}
        <div className="mb-8">
          <h3 className="text-sm text-cl-text-muted mb-3 px-4">General</h3>
          <ul className="space-y-1.5">
            {SideNavTopData.map((item) => (
              <li key={item.id}>
                <NavigationItem item={item} />
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Section */}
        <div className="mb-auto">
          <h3 className="text-sm text-cl-text-muted mb-3 px-4">Tools</h3>
          <ul className="space-y-1.5">
            {SideNavData.map((item) => (
              <li key={item.id}>
                <NavigationItem item={item} />
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Section */}
        <div>
          <ul className="space-y-1.5">
            {SideNavDownData.map((item) => (
              <li key={item.id}>
                <NavigationItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
