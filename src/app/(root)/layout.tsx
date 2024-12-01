"use client"
import "./dashboard.scss";
import React, { useContext } from 'react'
import { connect } from 'react-redux';
import { ThemeChanger } from '@/shared/redux/action';
import { Initialload } from '@/shared/contextapi';

function Layout({children, local_varaiable, ThemeChanger}:any) {
  const customstyles :any= {
    ...(local_varaiable.colorPrimaryRgb !== '' && { '--primary-rgb': local_varaiable.colorPrimaryRgb }),
    ...(local_varaiable.colorPrimary !== '' && { '--primary': local_varaiable.colorPrimary }),
    ...(local_varaiable.darkBg !== '' && { '--dark-bg': local_varaiable.darkBg }),
    ...(local_varaiable.bodyBg !== '' && { '--body-bg': local_varaiable.bodyBg }),
    ...(local_varaiable.inputBorder !== '' && { '--input-border': local_varaiable.inputBorder }),
    ...(local_varaiable.Light !== '' && { '--light': local_varaiable.Light }),
  };

  const theme :any= useContext(Initialload);

  return (
    <>
         <html
            suppressHydrationWarning={true} 
            dir={local_varaiable.dir}
            className={local_varaiable.class}
            data-header-styles={local_varaiable.dataHeaderStyles}
            data-vertical-style={local_varaiable.dataVerticalStyle}
            data-nav-layout={local_varaiable.dataNavLayout}
            data-menu-styles={local_varaiable.dataMenuStyles}
            data-toggled={local_varaiable.dataToggled}
            data-nav-style={local_varaiable.dataNavStyle}
            hor-style={local_varaiable.horStyle}
            data-page-style={local_varaiable.dataPageStyle}
            data-width={local_varaiable.dataWidth}
            data-menu-position={local_varaiable.dataMenuPosition}
            data-header-position={local_varaiable.dataHeaderPosition}
            data-icon-overlay={local_varaiable.iconOverlay}
            bg-img={local_varaiable.bgImg}
            data-icon-text={local_varaiable.iconText}

            //Styles
            style={customstyles}>
              <head>
              <meta name="keywords" content=" nextjs app router, nextjs template, tailwind nextjs, next js themes, next js tailwind,  tailwind, admin, tailwindcss nextjs, nextjs admin templates, tailwind admin template, nextjs admin template, nextjs typescript, admin template, tailwind dashboard, tailwind css dashboard" />
              </head>
             <body className={`${local_varaiable.body ? local_varaiable.body : ''}`}>
              {children}
             </body>
          </html>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, {ThemeChanger})(Layout);