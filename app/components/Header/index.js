import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderTopbar from './components/HeaderTopbar';
import { DOMAINAPI } from './../../config';


/**
 * Header component
 */
export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
      toolBar: false,
      userPanel: false
    };
  }

  // after render
  componentWillMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  // after removing the component
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  /**
   * handle click outside
   *
   * @param {event} e
   * @public
   */
  handleClickOutside = (e) => {
    const mobileMenu = document.getElementById('m_header_menu');
    const path = e.path || (e.composedPath && e.composedPath());
    if ((path && !path.includes(mobileMenu)) && this.state.mobileMenu) {
      if (this.state.mobileMenu) {
        this.setState({ mobileMenu: false });
      }
    }

    const mobiletoolBar = document.getElementById('m_aside_header_topbar_mobile_toggle');
    if ((path && !path.includes(mobiletoolBar)) && this.state.toolBar) {
      document.body.classList.remove('m-topbar--on');
      this.setState({ toolBar: false });
    }
  }

  /**
   * toggle Menu
   *
   * @param {event} e
   * @public
   */
  toggleMenu = (e) => {
    e.preventDefault();
    this.setState({ mobileMenu: !this.state.mobileMenu });
  }

  /**
   * toggle Toolbar
   *
   * @param {event} e
   * @public
   */
  toggleToolbar = (e) => {
    e.preventDefault();
    this.setState({ toolBar: !this.state.toolBar });

    if (!this.state.toolBar) {
      document.body.classList.add('m-topbar--on');
    } else {
      document.body.classList.remove('m-topbar--on');
    }
  }

  returnUrl() {
    const { profile } = this.props;

    const type = profile && profile.role && profile.role.type;
    switch (type) {
      case 'company': return profile && profile.company_admin && profile.company_admin.company_logo;
      case 'managers': return profile && profile.manager_company && profile.manager_company.company_logo;
      case 'viewers': return profile && profile.viewer_company && profile.viewer_company.company_logo;
      default:
        return null;
    }
  }

  renderLogo = () => {
    const url = this.returnUrl();
    if (url) {
      return (
        <img src={`${DOMAINAPI}/uploads/${url.hash}${url.ext}`} alt="" />
      );
    }

    return (
      <svg viewBox="0 0 268 87.094">
        <path className="cls-1" d="M-4,65.063C4,65.063,4,73,12,73s8-7.937,16-7.937S36,73,44,73s8.125-7.937,16-7.937" transform="translate(0 -2.375)" />
        <path id="Shape_6_copy" data-name="Shape 6 copy" className="cls-1" d="M60,65.063c8,0,8,7.938,16,7.938s8-7.937,16-7.937S100,73,108,73s8.125-7.937,16-7.937" transform="translate(0 -2.375)" />
        <path id="Shape_6_copy_2" data-name="Shape 6 copy 2" className="cls-1" d="M124,65.063c8,0,8,7.938,16,7.938s8-7.937,16-7.937S164,73,172,73s8.125-7.937,16-7.937" transform="translate(0 -2.375)" />
        <path id="Shape_6_copy_3" data-name="Shape 6 copy 3" className="cls-1" d="M188,65.063c8,0,8,7.938,16,7.938s8-7.937,16-7.937S228,73,236,73s8.125-7.937,16-7.937" transform="translate(0 -2.375)" />
        <path id="Shape_6_copy_4" data-name="Shape 6 copy 4" className="cls-1" d="M252,65.063c8,0,8,7.938,16,7.938" transform="translate(0 -2.375)" />
        <path className="cls-1" d="M-4,58.063C4,58.063,4,66,12,66s8-7.937,16-7.937S36,66,44,66s8.125-7.937,16-7.937" transform="translate(0 -2.375)" />
        <path id="Shape_6_copy-2" data-name="Shape 6 copy" className="cls-1" d="M60,58.063c8,0,8,7.938,16,7.938s8-7.937,16-7.937S100,66,108,66s8.125-7.937,16-7.937" transform="translate(0 -2.375)" />
        <path id="Shape_6_copy_2-2" data-name="Shape 6 copy 2" className="cls-1" d="M124,58.063c8,0,8,7.938,16,7.938s8-7.937,16-7.937S164,66,172,66s8.125-7.937,16-7.937" transform="translate(0 -2.375)" />
        <path id="Shape_6_copy_3-2" data-name="Shape 6 copy 3" className="cls-1" d="M188,58.063c8,0,8,7.938,16,7.938s8-7.937,16-7.937S228,66,236,66s8.125-7.937,16-7.937" transform="translate(0 -2.375)" />
        <path id="Shape_6_copy_4-2" data-name="Shape 6 copy 4" className="cls-1" d="M252,58.063c8,0,8,7.938,16,7.938" transform="translate(0 -2.375)" />
        <path className="cls-2" d="M0.937,82.34V89.4h1.14V82.34H0.937Zm11.23,0.01h-1.14v5.23L7.6,82.35H6.457V89.4H7.6V84.19l3.43,5.21h1.14V82.35Zm10.44,3.51A3.8,3.8,0,0,0,22.172,84a2.987,2.987,0,0,0-1.27-1.225,4.268,4.268,0,0,0-1.995-.435h-2.36V89.4h2.36a4.227,4.227,0,0,0,1.995-.44,3.009,3.009,0,0,0,1.27-1.235,3.826,3.826,0,0,0,.435-1.865h0Zm-3.79,2.51h-1.13V83.35h1.13a2.687,2.687,0,0,1,1.95.66,2.857,2.857,0,0,1,0,3.7,2.687,2.687,0,0,1-1.95.66h0Zm7.89-6.03v4.19a2.988,2.988,0,0,0,.74,2.2,2.639,2.639,0,0,0,1.96.745,2.687,2.687,0,0,0,1.98-.745,2.964,2.964,0,0,0,.75-2.2V82.34H31v4.19a2.037,2.037,0,0,1-.415,1.4,1.693,1.693,0,0,1-2.32,0,2.036,2.036,0,0,1-.415-1.4V82.34h-1.14Zm14.4,5.18a1.81,1.81,0,0,0-.3-1.08,1.985,1.985,0,0,0-.72-0.625A7.345,7.345,0,0,0,39,85.39q-0.53-.18-0.835-0.315a1.389,1.389,0,0,1-.505-0.37,0.885,0.885,0,0,1-.2-0.595,0.871,0.871,0,0,1,.29-0.7,1.153,1.153,0,0,1,.77-0.245,1.175,1.175,0,0,1,.835.285,1.2,1.2,0,0,1,.375.685h1.23a1.96,1.96,0,0,0-.725-1.36,2.627,2.627,0,0,0-1.715-.52,2.887,2.887,0,0,0-1.2.235,1.82,1.82,0,0,0-.8.665,1.791,1.791,0,0,0-.28,1,1.748,1.748,0,0,0,.29,1.05,1.954,1.954,0,0,0,.7.61,7.405,7.405,0,0,0,1.075.42q0.54,0.18.85,0.32a1.474,1.474,0,0,1,.52.385,0.927,0.927,0,0,1,.21.625,0.965,0.965,0,0,1-.285.72,1.1,1.1,0,0,1-.8.28,1.282,1.282,0,0,1-.925-0.33,1.251,1.251,0,0,1-.4-0.79h-1.22a2.029,2.029,0,0,0,.39,1.06,2.243,2.243,0,0,0,.91.715,3.127,3.127,0,0,0,1.29.255,2.645,2.645,0,0,0,1.25-.27,1.818,1.818,0,0,0,.76-0.715,1.938,1.938,0,0,0,.25-0.965h0Zm3.6-5.18v0.92h1.96V89.4h1.15V83.26h1.97V82.34h-5.08Zm13.92,7.06-1.85-2.87a2.214,2.214,0,0,0,1.345-.68,1.986,1.986,0,0,0,.465-1.36,2.046,2.046,0,0,0-.625-1.56,2.579,2.579,0,0,0-1.835-.59h-2.49V89.4h1.14V86.58h0.81l1.76,2.82h1.28Zm-3.85-6.08h1.26a1.454,1.454,0,0,1,1.045.325,1.2,1.2,0,0,1,.335.9,1.154,1.154,0,0,1-1.38,1.22h-1.26V83.32Zm7.84-.98V89.4h1.14V82.34h-1.14Zm10.27,7.06h1.22l-2.59-6.95h-1.31l-2.6,6.95h1.22l0.54-1.53h2.98Zm-3.2-2.41,1.17-3.3,1.17,3.3h-2.34Zm9.41-4.65h-1.14V89.4h3.58V88.51H79.1V82.34Zm14.82-.07a3.385,3.385,0,0,0-1.77.46A3.116,3.116,0,0,0,90.956,84a4.351,4.351,0,0,0,0,3.73A3.081,3.081,0,0,0,92.146,89a3.412,3.412,0,0,0,1.77.455,3.462,3.462,0,0,0,2.16-.655,3.2,3.2,0,0,0,1.16-1.785h-1.21a2.157,2.157,0,0,1-.8,1A2.3,2.3,0,0,1,93.9,88.4a2.075,2.075,0,0,1-1.125-.31,2.13,2.13,0,0,1-.78-0.885,3.293,3.293,0,0,1,0-2.68,2.132,2.132,0,0,1,.78-0.885,2.076,2.076,0,0,1,1.125-.31,2.3,2.3,0,0,1,1.335.375,2.151,2.151,0,0,1,.8,1.015h1.21a3.225,3.225,0,0,0-1.16-1.79,3.444,3.444,0,0,0-2.16-.66h0Zm10.73-.02a3.5,3.5,0,0,0-1.785.46,3.318,3.318,0,0,0-1.255,1.285,4.011,4.011,0,0,0,0,3.73,3.354,3.354,0,0,0,1.255,1.29,3.639,3.639,0,0,0,3.56,0,3.328,3.328,0,0,0,1.25-1.29,4.05,4.05,0,0,0,0-3.73,3.292,3.292,0,0,0-1.25-1.285,3.481,3.481,0,0,0-1.775-.46h0Zm0,1.06a2.308,2.308,0,0,1,1.195.31,2.126,2.126,0,0,1,.82.89,3.236,3.236,0,0,1,0,2.7,2.125,2.125,0,0,1-.82.89,2.307,2.307,0,0,1-1.195.31,2.349,2.349,0,0,1-1.21-.31,2.1,2.1,0,0,1-.825-0.89,3.236,3.236,0,0,1,0-2.7,2.105,2.105,0,0,1,.825-0.89,2.35,2.35,0,0,1,1.21-.31h0Zm13.34-.96h-1.14v5.23l-3.43-5.23h-1.14V89.4h1.14V84.19l3.43,5.21h1.14V82.35Zm3.84-.01v0.92h1.96V89.4h1.15V83.26h1.97V82.34h-5.08Zm13.919,7.06-1.85-2.87a2.213,2.213,0,0,0,1.345-.68,1.986,1.986,0,0,0,.465-1.36,2.044,2.044,0,0,0-.625-1.56,2.577,2.577,0,0,0-1.835-.59h-2.49V89.4h1.14V86.58h0.81l1.76,2.82h1.28Zm-3.85-6.08h1.26a1.453,1.453,0,0,1,1.045.325,1.2,1.2,0,0,1,.335.9,1.154,1.154,0,0,1-1.38,1.22H131.9V83.32Zm11.11-1.07a3.5,3.5,0,0,0-1.785.46,3.325,3.325,0,0,0-1.255,1.285,4.011,4.011,0,0,0,0,3.73,3.361,3.361,0,0,0,1.255,1.29,3.639,3.639,0,0,0,3.56,0,3.321,3.321,0,0,0,1.25-1.29,4.05,4.05,0,0,0,0-3.73,3.285,3.285,0,0,0-1.25-1.285,3.478,3.478,0,0,0-1.775-.46h0Zm0,1.06a2.305,2.305,0,0,1,1.195.31,2.119,2.119,0,0,1,.82.89,3.236,3.236,0,0,1,0,2.7,2.118,2.118,0,0,1-.82.89,2.3,2.3,0,0,1-1.195.31,2.354,2.354,0,0,1-1.21-.31,2.117,2.117,0,0,1-.825-0.89,3.236,3.236,0,0,1,0-2.7,2.118,2.118,0,0,1,.825-0.89,2.355,2.355,0,0,1,1.21-.31h0Zm8.77-.97h-1.14V89.4h3.58V88.51h-2.44V82.34Zm17.78,7.06-3.68-4.47a2.928,2.928,0,0,1-.325-0.47,1,1,0,0,1-.105-0.47,0.744,0.744,0,0,1,.215-0.54,0.794,0.794,0,0,1,.595-0.22,0.862,0.862,0,0,1,.645.24,0.937,0.937,0,0,1,.245.66,1.664,1.664,0,0,1,.01.22v0.11h1.08a2.248,2.248,0,0,0-.07-0.71,1.846,1.846,0,0,0-.585-1.06,1.941,1.941,0,0,0-1.345-.42,2.142,2.142,0,0,0-1.015.225,1.542,1.542,0,0,0-.855,1.385,1.627,1.627,0,0,0,.13.665,2.722,2.722,0,0,0,.37.595L165,85.32h-0.07a1.841,1.841,0,0,0-.93.24,1.707,1.707,0,0,0-.665.7,2.292,2.292,0,0,0-.245,1.09,2.2,2.2,0,0,0,.27,1.1,1.911,1.911,0,0,0,.76.75,2.326,2.326,0,0,0,1.14.27,1.839,1.839,0,0,0,1.105-.335,1.52,1.52,0,0,0,.6-0.875,1.785,1.785,0,0,0,.1-0.35l1.32,1.49h1.17Zm-4.29-.9a1.208,1.208,0,0,1-.845-0.315,1.283,1.283,0,0,1-.045-1.7,1.065,1.065,0,0,1,.78-0.3,1.228,1.228,0,0,1,.595.155,1.242,1.242,0,0,1,.46.43,1.119,1.119,0,0,1,.175.615,1.073,1.073,0,0,1-.315.8,1.1,1.1,0,0,1-.805.31h0Zm19.31-6.05L182.315,88l-2.3-5.55h-1.38V89.4h1.14V84.19l2.02,5.21h1l2.01-5.21V89.4h1.15V82.45h-1.38Zm9.02-.2a3.5,3.5,0,0,0-1.785.46,3.325,3.325,0,0,0-1.255,1.285,4.011,4.011,0,0,0,0,3.73,3.361,3.361,0,0,0,1.255,1.29,3.639,3.639,0,0,0,3.56,0,3.321,3.321,0,0,0,1.25-1.29,4.05,4.05,0,0,0,0-3.73,3.285,3.285,0,0,0-1.25-1.285,3.481,3.481,0,0,0-1.775-.46h0Zm0,1.06a2.308,2.308,0,0,1,1.195.31,2.126,2.126,0,0,1,.82.89,3.236,3.236,0,0,1,0,2.7,2.125,2.125,0,0,1-.82.89,2.307,2.307,0,0,1-1.195.31,2.349,2.349,0,0,1-1.21-.31,2.11,2.11,0,0,1-.825-0.89,3.236,3.236,0,0,1,0-2.7,2.112,2.112,0,0,1,.825-0.89,2.35,2.35,0,0,1,1.21-.31h0Zm13.34-.96H205.8v5.23l-3.43-5.23h-1.14V89.4h1.14V84.19l3.43,5.21h1.14V82.35Zm4.38-.01V89.4h1.14V82.34h-1.14Zm4.98,0v0.92h1.96V89.4h1.15V83.26h1.97V82.34H216.3Zm12.2-.09a3.5,3.5,0,0,0-1.785.46,3.318,3.318,0,0,0-1.255,1.285,4.011,4.011,0,0,0,0,3.73,3.354,3.354,0,0,0,1.255,1.29,3.639,3.639,0,0,0,3.56,0,3.328,3.328,0,0,0,1.25-1.29,4.05,4.05,0,0,0,0-3.73,3.292,3.292,0,0,0-1.25-1.285,3.481,3.481,0,0,0-1.775-.46h0Zm0,1.06a2.308,2.308,0,0,1,1.195.31,2.126,2.126,0,0,1,.82.89,3.236,3.236,0,0,1,0,2.7,2.125,2.125,0,0,1-.82.89,2.307,2.307,0,0,1-1.195.31,2.349,2.349,0,0,1-1.21-.31,2.1,2.1,0,0,1-.825-0.89,3.236,3.236,0,0,1,0-2.7,2.105,2.105,0,0,1,.825-0.89,2.35,2.35,0,0,1,1.21-.31h0Zm12.62,6.09-1.85-2.87a2.216,2.216,0,0,0,1.345-.68,1.986,1.986,0,0,0,.465-1.36,2.048,2.048,0,0,0-.625-1.56,2.58,2.58,0,0,0-1.835-.59h-2.49V89.4h1.14V86.58h0.81l1.76,2.82h1.28Zm-3.85-6.08h1.26a1.456,1.456,0,0,1,1.045.325,1.2,1.2,0,0,1,.335.9,1.154,1.154,0,0,1-1.38,1.22h-1.26V83.32Zm7.84-.98V89.4h1.14V82.34h-1.14Zm11.23,0.01H255.2v5.23l-3.43-5.23h-1.14V89.4h1.14V84.19l3.43,5.21h1.14V82.35Zm7.61-.07a3.552,3.552,0,0,0-1.815.455A3.111,3.111,0,0,0,260.915,84a4.259,4.259,0,0,0,0,3.73,3.136,3.136,0,0,0,1.22,1.275,3.547,3.547,0,0,0,1.82.46,3.432,3.432,0,0,0,1.635-.38,3.176,3.176,0,0,0,1.15-1.015,3.38,3.38,0,0,0,.555-1.415V85.57h-3.55v0.84h2.59a2.312,2.312,0,0,1-.76,1.5,2.232,2.232,0,0,1-1.51.545,2.545,2.545,0,0,1-1.265-.3,2.081,2.081,0,0,1-.845-0.885,2.992,2.992,0,0,1-.3-1.39,2.874,2.874,0,0,1,.3-1.34,2.132,2.132,0,0,1,.82-0.88,2.287,2.287,0,0,1,1.185-.31,2.24,2.24,0,0,1,1.245.34,1.92,1.92,0,0,1,.755.91h1.2a2.916,2.916,0,0,0-1.11-1.69,3.44,3.44,0,0,0-2.1-.62h0ZM234.458,26.763h31.848V39.8c-1.825,4.224-5.741,6.837-9.748,9.836s-9.061,4.5-15.156,4.5a27.316,27.316,0,0,1-13.608-3.276,22.313,22.313,0,0,1-8.964-9.18A28.287,28.287,0,0,1,215.7,28.219a28.079,28.079,0,0,1,3.132-13.428,22.5,22.5,0,0,1,8.892-9.144,26.923,26.923,0,0,1,13.536-3.276q9.79,0,16.056,4.752a19.313,19.313,0,0,1,7.56,12.816h-14.9a8.348,8.348,0,0,0-3.384-3.312A10.77,10.77,0,0,0,241.33,15.4a10.408,10.408,0,0,0-8.244,3.492q-3.062,3.493-3.06,9.324,0,6.625,3.276,10.044t9.612,3.42a11.614,11.614,0,0,0,6.336-1.728c1.824-1.152,3.264-.855,4.32-3.112H234.458V26.763ZM175,31.868V53.934H160V3.784h4L190,25.2V4.787h17v50.15h-3ZM136,4.787h15V53.934H136V4.787ZM113,53.934L99,35.88V53.934H84V4.787H99V21.551L112,4.787h18L111,27.856l21,26.078H113ZM59,4.787H74V53.934H59V4.787ZM26,54.937L1,4.787,20,9.8l8,17.051L35,9.8,54,4.787,29,54.937H26Z" transform="translate(0 -2.375)" />
      </svg>
    );
  }

  render() {
    const { token, topbar } = this.props;

    return (
      <header id="m_header" className="m-grid__item m-header " m-minimize-offset="200" m-minimize-mobile-offset="200" >
        <div className="m-stack m-stack--ver m-stack--desktop">
          <div className="m-stack__item m-brand  m-brand--skin-dark ">
            <div className="m-stack m-stack--ver m-stack--general">
              <div className="m-stack__item m-stack__item--middle m-brand__logo text-center">
                <Link to="/" className="m-brand__logo-wrapper">
                  {this.renderLogo()}
                </Link>
              </div>
              <div className="m-stack__item m-stack__item--middle m-brand__tools">
                {/* <a id="m_aside_header_menu_mobile_toggle" href="/" onClick={this.toggleMenu} className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
                  <span />
                </a> */}
                <a id="m_aside_header_topbar_mobile_toggle" href="/" onClick={this.toggleToolbar} className="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                  <i className="flaticon-more" />
                </a>
              </div>
            </div>
          </div>

          <div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
            <button className="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark " id="m_aside_header_menu_mobile_close_btn">
              <i className="la la-close" />
            </button>

            <div id="m_header_menu" className={`m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark ${this.state.mobileMenu ? 'm-aside-header-menu-mobile--on' : ''}`}>
              <ul className="m-menu__nav  m-menu__nav--submenu-arrow ">
                {/* <li className="m-menu__item m-menu__item--submenu m-menu__item--rel active" m-menu-submenu-toggle="click" m-menu-link-redirect="1" aria-haspopup="true">
                  <a href="/" className="m-menu__link m-menu__toggle">
                    <span className="m-menu__link-text">
                      Dashboard -site 1
                    </span>
                  </a>
                </li>
                <li className="m-menu__item m-menu__item--submenu m-menu__item--rel" m-menu-submenu-toggle="click" m-menu-link-redirect="1" aria-haspopup="true">
                  <a href="/" className="m-menu__link m-menu__toggle">
                    <span className="m-menu__link-text">
                      Add dashboard site
                    </span>
                  </a>
                </li> */}
              </ul>
            </div>
            {token && topbar && <HeaderTopbar />}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  /**
   * Token for user
   */
  token: PropTypes.string,

  topbar: PropTypes.bool,

  profile: PropTypes.instanceOf(Object)
};

Header.defaultProps = {
  /**
   * Token for user
   */
  token: '',

  topbar: true,

  profile: {}
};
/**
 * Binding data from store, return props for component
 *
 * @param {object} state
 * @public
 */
function mapStateToProps(state) {
  return {
    token: state.token,
    profile: state.profile
  };
}

export default connect(mapStateToProps)(Header);
