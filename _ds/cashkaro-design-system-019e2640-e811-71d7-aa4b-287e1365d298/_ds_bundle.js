/* @ds-bundle: {"format":3,"namespace":"CashKaroDesignSystem_019e26","components":[],"sourceHashes":{"ui_kits/cashkaro_app/app.jsx":"be426bb305c6","ui_kits/cashkaro_app/chrome.jsx":"7607851176b8","ui_kits/cashkaro_app/credit-card-screen.jsx":"1d8a5f3b0a7e","ui_kits/cashkaro_app/home-blocks.jsx":"31e82d9c63c6","ui_kits/cashkaro_app/ios-frame.jsx":"d67eb3ffe562","ui_kits/cashkaro_app/primitives.jsx":"1283a49870e0","ui_kits/cashkaro_app/screens.jsx":"6c757def812b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CashKaroDesignSystem_019e26 = window.CashKaroDesignSystem_019e26 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/cashkaro_app/app.jsx
try { (() => {
// ─────────────────────────────────────────────────────────────────────
// CashKaro UI Kit — App shell
// 5 bottom-nav screens + a stacked "Credit Card" detail route
// triggered by tapping a credit card category tile.
// ─────────────────────────────────────────────────────────────────────

const App = () => {
  const [tab, setTab] = React.useState("home");
  const [route, setRoute] = React.useState(null); // null | "credit-card"

  const screens = {
    home: /*#__PURE__*/React.createElement(HomeScreen, {
      onNavigate: setRoute
    }),
    refer: /*#__PURE__*/React.createElement(ReferScreen, null),
    balance: /*#__PURE__*/React.createElement(EarningsScreen, null),
    missing: /*#__PURE__*/React.createElement(StoreScreen, null),
    profile: /*#__PURE__*/React.createElement(ProfileScreen, null)
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      minHeight: "100vh",
      background: "linear-gradient(180deg, #F2F4F8 0%, #E8ECF3 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(IOSDevice, {
    width: 402,
    height: 874
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Metropolis, sans-serif",
      color: "#262626",
      paddingTop: 50,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      overscrollBehavior: "contain",
      WebkitOverflowScrolling: "touch",
      background: "#fff",
      position: "relative"
    }
  }, screens[tab]), route === "credit-card" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 50,
      left: 0,
      right: 0,
      bottom: 98,
      background: "#fff",
      zIndex: 10,
      overflow: "auto",
      animation: "slideInRight .22s ease"
    }
  }, /*#__PURE__*/React.createElement(CreditCardScreen, {
    onBack: () => setRoute(null)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 26 /* home indicator */
    }
  }, /*#__PURE__*/React.createElement(BottomNav, {
    active: tab,
    onChange: t => {
      setRoute(null);
      setTab(t);
    }
  })))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes slideInRight { from { transform: translateX(40px); opacity: 0 } to { transform: translateX(0); opacity: 1 } }
      `));
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cashkaro_app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cashkaro_app/chrome.jsx
try { (() => {
// ─────────────────────────────────────────────────────────────────────
// CashKaro UI Kit — Header + SearchBar + BottomNav (v2, DLS-aligned)
//
// Spec sources:
//   • /Headers/Headers Property 1=Variant13 → menu + logo + Help + bell
//   • /Store/Header                       → balance pill (40r, border #D9E3EC)
//   • /Bottom-Nav-Bar/BNB-Bar              → 5 tabs, fill icons when selected
//   • Production photo                     → bottom nav rejigged with ₹balance
//                                            tab + Missing? "cashback" cube
// ─────────────────────────────────────────────────────────────────────

const Header = ({
  onMenu,
  onHelp,
  onBell,
  balance = '₹1,732'
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    height: 56,
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#fff',
    flexShrink: 0,
    borderBottom: '1px solid #F1F1F1'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 14
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "menu",
  size: 24,
  weight: 500,
  color: "#1C1B1F",
  onClick: onMenu,
  style: {
    cursor: 'pointer'
  }
}), /*#__PURE__*/React.createElement("img", {
  src: "../../assets/logo-cashkaro.png",
  alt: "CashKaro",
  style: {
    height: 20,
    display: 'block'
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 14
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    height: 32,
    padding: '0 12px',
    background: '#fff',
    border: '1px solid #D9E3EC',
    borderRadius: 40,
    cursor: 'pointer'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "account_balance_wallet",
  size: 16,
  fill: 1,
  color: "#0036DA"
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 800,
    fontSize: 12,
    color: '#262626',
    lineHeight: 1
  }
}, balance)), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    cursor: 'pointer'
  },
  onClick: onBell
}, /*#__PURE__*/React.createElement(Icon, {
  name: "notifications",
  size: 22,
  weight: 500,
  color: "#1C1B1F"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#FF6D1D',
    border: '1.5px solid #fff'
  }
}))));
const SearchBar = () => {
  const [hint, setHint] = React.useState('Amazon offers');
  const words = ['Amazon offers', 'Myntra cashback', 'credit cards', 'Nykaa', 'Flipkart sale'];
  React.useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % words.length;
      setHint(words[i]);
    }, 2400);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px 8px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      borderRadius: 8,
      background: '#F5F7F9',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 14px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20,
    color: "#5C5C5C"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Metropolis, sans-serif',
      fontWeight: 500,
      fontSize: 14,
      color: '#5C5C5C',
      lineHeight: 1
    }
  }, "Search for ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#262626',
      fontWeight: 700
    }
  }, hint))));
};

// ── BottomNav (production-style 5-tab) ───────────────────────────────
const TABS = [{
  id: 'home',
  label: 'Home',
  icon: 'home'
}, {
  id: 'refer',
  label: 'Refer & Earn',
  icon: 'group'
}, {
  id: 'balance',
  label: '₹1.73K',
  icon: 'account_balance_wallet',
  tile: 'wallet'
}, {
  id: 'missing',
  label: 'Missing?',
  icon: 'policy',
  tile: 'cashback'
}, {
  id: 'profile',
  label: 'Profile',
  icon: 'account_circle'
}];
const BottomNav = ({
  active = 'home',
  onChange
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    flexShrink: 0,
    height: 64,
    background: '#fff',
    borderTop: '1px solid #F1F1F1',
    display: 'flex',
    alignItems: 'stretch',
    boxShadow: '0px -2px 12px rgba(0,0,0,0.04)'
  }
}, TABS.map(t => {
  const sel = active === t.id;
  const tint = sel ? '#0036DA' : '#5C5C5C';
  return /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => onChange?.(t.id),
    style: {
      flex: 1,
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      padding: '8px 0 6px'
    }
  }, t.tile === 'wallet' ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 6,
      background: sel ? '#0036DA' : '#F5F7F9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "account_balance_wallet",
    size: 18,
    fill: 1,
    color: sel ? '#fff' : '#262626'
  })) : t.tile === 'cashback' ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 6,
      background: sel ? '#0036DA' : '#F5F7F9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 800,
      fontSize: 6.5,
      color: sel ? '#fff' : '#262626',
      lineHeight: 1,
      textAlign: 'center'
    }
  }, "CASH", /*#__PURE__*/React.createElement("br", null), "BACK")) : /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    size: 22,
    fill: sel ? 1 : 0,
    color: tint
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Metropolis, sans-serif',
      fontWeight: sel ? 800 : 500,
      fontSize: 10,
      color: tint,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      letterSpacing: '-0.005em'
    }
  }, t.label));
}));
Object.assign(window, {
  Header,
  SearchBar,
  BottomNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cashkaro_app/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cashkaro_app/credit-card-screen.jsx
try { (() => {
// ─────────────────────────────────────────────────────────────────────
// CashKaro UI Kit — Credit Card Store Screen
// HSBC Live Plus Credit Card flow (Flow #17). Includes the
// eligibility bottomsheet + 3-state banner (eligible / might / ineligible).
// ─────────────────────────────────────────────────────────────────────

// HSBC-style red credit card image (drawn — we don't have the real artwork)
const CreditCardArt = ({
  name = "HSBC Live Plus Credit Card",
  brand = "HSBC",
  network = "VISA",
  bg
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 280,
    aspectRatio: "1.6/1",
    borderRadius: 12,
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 8px 22px rgba(180,30,40,0.35)",
    background: bg || "linear-gradient(135deg, #E2001C 0%, #8C0010 60%, #5A0008 100%)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: -40,
    top: -60,
    width: 200,
    height: 200,
    background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent 60%)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    right: -30,
    bottom: -30,
    width: 160,
    height: 160,
    background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent 60%)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 16,
    left: 16,
    display: "flex",
    alignItems: "center",
    gap: 8
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 14,
    height: 14,
    background: "#fff"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    color: "#fff",
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 800,
    fontSize: 14,
    letterSpacing: ".06em"
  }
}, brand)), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 16,
    right: 18,
    color: "#fff",
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 800,
    fontSize: 14,
    letterSpacing: ".15em"
  }
}, network), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: 18,
    bottom: 56,
    width: 36,
    height: 26,
    borderRadius: 4,
    background: "linear-gradient(135deg, #E8D08F, #C9A35E)",
    backgroundImage: "linear-gradient(135deg, #E8D08F, #C9A35E), repeating-linear-gradient(0deg, transparent 0 4px, rgba(0,0,0,0.15) 4px 5px)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: 60,
    bottom: 62,
    color: "#fff",
    opacity: 0.6,
    fontSize: 14
  }
}, "))) "), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: 18,
    bottom: 16,
    color: "#fff",
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: ".02em"
  }
}, name), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)"
  }
}));

// Status banner — green / yellow / red
const EligibilityBanner = ({
  state,
  onMore
}) => {
  const config = {
    eligible: {
      bg: "linear-gradient(180deg, #DBF5E2 0%, #B8E9C7 100%)",
      iconBg: "#26A651",
      icon: "check_circle",
      title: "You're eligible for this card.",
      titleColor: "#0E5F2A",
      sub: "Continue to apply"
    },
    might: {
      bg: "linear-gradient(180deg, #FFE9A1 0%, #FFD867 100%)",
      iconBg: "#D89F00",
      icon: "warning",
      title: "You may be eligible for this card.",
      titleColor: "#5A3A00",
      sub: "Usually offered to salaried users above ₹50,000/mo · You may qualify at the next stage"
    },
    ineligible: {
      bg: "linear-gradient(180deg, #FAD0C7 0%, #F1A39A 100%)",
      iconBg: "#D41000",
      icon: "error",
      title: "We're Sorry! You're ineligible for this card.",
      titleColor: "#7B1100",
      sub: "Income doesn't meet card threshold. Browse the cards below — better matches for you."
    }
  }[state];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px 12px",
      borderRadius: 12,
      background: config.bg,
      padding: "14px 16px",
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: config.iconBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: config.icon,
    size: 20,
    fill: 1,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 14,
      color: config.titleColor,
      lineHeight: 1.2
    }
  }, config.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      color: config.titleColor,
      opacity: 0.85,
      marginTop: 4,
      lineHeight: 1.35
    }
  }, config.sub)), /*#__PURE__*/React.createElement("button", {
    onClick: onMore,
    style: {
      background: "rgba(255,255,255,0.55)",
      border: 0,
      borderRadius: 999,
      padding: "5px 10px",
      cursor: "pointer",
      flexShrink: 0,
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      color: config.titleColor
    }
  }, "Know More"));
};

// ── The screen ───────────────────────────────────────────────────────
const CreditCardScreen = ({
  onBack,
  defaultState = "none"
}) => {
  // none → before checking; after submitting in bottom-sheet show eligible/might/ineligible
  const [state, setState] = React.useState(defaultState); // none | eligible | might | ineligible
  const [sheetOpen, setSheet] = React.useState(false);
  const [pin, setPin] = React.useState("122001");
  const [income, setIncome] = React.useState("1,44,000");
  const [empType, setEmpType] = React.useState("Salaried");
  const submit = result => {
    setState(result);
    setSheet(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "06 Credit Card",
    style: {
      background: "#fff",
      minHeight: "100%",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      display: "flex",
      alignItems: "center",
      padding: "0 16px",
      gap: 16,
      background: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 5,
      borderBottom: "1px solid #F1F1F1"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back",
    size: 24,
    color: "#262626",
    weight: 500,
    onClick: onBack,
    style: {
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid #E5E5E5",
      borderRadius: 999,
      padding: "5px 14px",
      height: 30,
      display: "flex",
      alignItems: "center",
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 13,
      color: "#DB0011",
      letterSpacing: ".04em"
    }
  }, "HSBC"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share",
    size: 22,
    color: "#262626",
    weight: 500
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px 16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 22,
      color: "#262626",
      letterSpacing: "-.02em",
      lineHeight: 1.1
    }
  }, "Flat \u20B91,400 Rewards"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      color: "#5C5C5C",
      marginTop: 4
    }
  }, "on card activation")), /*#__PURE__*/React.createElement(CreditCardArt, null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      color: "#262626"
    }
  }, "HSBC Live Plus Credit Card")), state !== "none" && /*#__PURE__*/React.createElement(EligibilityBanner, {
    state: state,
    onMore: () => setSheet(true)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "8px 16px 0",
      background: "#F5F7F9",
      borderRadius: 8,
      padding: 4,
      display: "flex"
    }
  }, ["Card Details", "Reward Details"].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      flex: 1,
      textAlign: "center",
      padding: "10px 0",
      background: i === 0 ? "#0036DA" : "transparent",
      color: i === 0 ? "#fff" : "#5C5C5C",
      borderRadius: 6,
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 700,
      fontSize: 13
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px 8px",
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 14,
      color: "#262626"
    }
  }, "Top Benefits"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px 20px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, [{
    i: "restaurant",
    t: "5% Cashback",
    s: "on dining and food delivery"
  }, {
    i: "shopping_bag",
    t: "1.5% Cashback",
    s: "on all online purchases"
  }].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#fff",
      border: "1px solid #E5E5E5",
      borderRadius: 10,
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: b.i,
    size: 28,
    color: "#0036DA",
    fill: 1
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 14,
      color: "#262626",
      marginTop: 4
    }
  }, b.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      color: "#5C5C5C",
      lineHeight: 1.3
    }
  }, b.s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 8px",
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 14,
      color: "#262626"
    }
  }, "Best For"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "0 16px 20px",
      flexWrap: "wrap"
    }
  }, [{
    i: "shopping_bag",
    l: "Shopping"
  }, {
    i: "flight",
    l: "Travel"
  }, {
    i: "restaurant",
    l: "Dining"
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.l,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "#F7F9FF",
      border: "1px solid #D9E3EC",
      borderRadius: 999,
      padding: "6px 12px",
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      color: "#262626"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.i,
    size: 14,
    color: "#0036DA"
  }), " ", c.l))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 8px",
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 14,
      color: "#262626"
    }
  }, "Joining/Annual Fees"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px 20px",
      background: "#fff",
      border: "1px solid #E5E5E5",
      borderRadius: 10
    }
  }, [{
    l: "Joining Fee",
    v: "₹1,179 (Free → GST)",
    n: "₹708 vouchers will be issued on spending ₹20,000/- or more within 90 days of card issuance"
  }, {
    l: "Annual Fee",
    v: "₹1,179 (Free → GST)",
    n: "On spending over ₹2 Lakh in a year/cycle"
  }].map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 14,
      borderTop: i === 0 ? "none" : "1px solid #F1F1F1"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      color: "#262626"
    }
  }, f.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 13,
      color: "#26A651"
    }
  }, f.v)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      color: "#5C5C5C",
      marginTop: 4,
      lineHeight: 1.35
    }
  }, f.n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 8px",
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 14,
      color: "#262626"
    }
  }, "Eligibility"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px 20px",
      background: "#fff",
      border: "1px solid #E5E5E5",
      borderRadius: 10
    }
  }, [{
    l: "Age",
    v: "21–60 Yrs"
  }, {
    l: "Salary",
    v: "Salaried · 5 LPA · Self-employed · 6 LPA"
  }, {
    l: "Credit Score",
    v: "750+"
  }, {
    l: "Existing HSBC Customer",
    v: "Not Required"
  }].map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 12,
      borderTop: i === 0 ? "none" : "1px solid #F1F1F1",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      color: "#262626"
    }
  }, e.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      color: "#5C5C5C",
      textAlign: "right",
      maxWidth: "60%"
    }
  }, e.v)))), state === "none" && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px 20px",
      background: "linear-gradient(180deg, #0036DA 0%, #2C40AA 100%)",
      borderRadius: 12,
      padding: 16,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 15,
      color: "#fff"
    }
  }, "See if you are eligible for this card"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: pin,
    onChange: e => setPin(e.target.value),
    placeholder: "Pin Code",
    style: {
      height: 40,
      borderRadius: 6,
      border: 0,
      padding: "0 12px",
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: income,
    onChange: e => setIncome(e.target.value),
    placeholder: "Monthly In-Hand Income",
    style: {
      height: 40,
      borderRadius: 6,
      border: 0,
      padding: "0 12px",
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, ["Salaried", "Self Employed"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setEmpType(t),
    style: {
      flex: 1,
      height: 36,
      borderRadius: 6,
      border: 0,
      cursor: "pointer",
      background: empType === t ? "#fff" : "rgba(255,255,255,0.15)",
      color: empType === t ? "#0036DA" : "#fff",
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 700,
      fontSize: 12
    }
  }, t)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSheet(true),
    style: {
      marginTop: 12,
      width: "100%",
      height: 44,
      background: "#fff",
      color: "#0036DA",
      border: 0,
      borderRadius: 8,
      cursor: "pointer",
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 14
    }
  }, "Check Eligibility"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      color: "rgba(255,255,255,0.75)",
      marginTop: 10,
      lineHeight: 1.35
    }
  }, "Eligibility check uses your inputs and does not impact your credit score.")), state !== "none" && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 8px",
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 14,
      color: "#262626"
    }
  }, "Cards You Qualify For"), state !== "none" && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, [{
    n: "Axis Bank ACE Credit Card",
    rew: "Flat ₹1,500 Rewards",
    bg: "linear-gradient(135deg, #6B1B6E 0%, #320836 100%)",
    b: ["Food Delivery · 5%", "Complimentary international lounge"]
  }, {
    n: "SBI SimplyCLICK",
    rew: "Flat ₹2,500 Rewards",
    bg: "linear-gradient(135deg, #2050B5 0%, #102A60 100%)",
    b: ["10X on online spends", "Welcome Amazon voucher"]
  }].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#fff",
      border: "1px solid #E5E5E5",
      borderRadius: 12,
      padding: 12,
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 92,
      height: 58,
      borderRadius: 7,
      background: c.bg,
      flexShrink: 0,
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 3px 8px rgba(0,0,0,0.15)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 6,
      fontFamily: "Metropolis",
      fontWeight: 800,
      fontSize: 9,
      color: "#fff",
      letterSpacing: ".1em"
    }
  }, c.n.split(" ")[0].toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      bottom: 5,
      width: 14,
      height: 10,
      borderRadius: 1,
      background: "linear-gradient(135deg, #E8D08F, #C9A35E)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 6,
      bottom: 4,
      fontFamily: "Metropolis",
      fontWeight: 800,
      fontSize: 10,
      color: "#fff",
      letterSpacing: ".12em"
    }
  }, "VISA")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      color: "#262626"
    }
  }, c.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 12,
      color: "#FF6D1D",
      marginTop: 4
    }
  }, c.rew), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      marginTop: 6
    }
  }, c.b.map((bn, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      color: "#5C5C5C",
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 10,
    color: "#26A651"
  }), " ", bn))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 8px",
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 14,
      color: "#262626"
    }
  }, "Frequently Asked Questions"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 16px 20px",
      background: "#fff",
      border: "1px solid #E5E5E5",
      borderRadius: 10
    }
  }, ["How to get Reward?", "Why is my reward tracked at lower amount than I expected?", "Do all HSBC cards have the same Reward rates on CashKaro?"].map((q, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 14,
      borderTop: i === 0 ? "none" : "1px solid #F1F1F1",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      color: "#262626"
    }
  }, q), /*#__PURE__*/React.createElement(Icon, {
    name: "expand_more",
    size: 20,
    color: "#9A9A9A"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 100
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      bottom: 0,
      padding: "10px 16px 16px",
      background: "linear-gradient(180deg, rgba(255,255,255,0.85), #fff 30%)",
      borderTop: "1px solid #F1F1F1"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      height: 48,
      background: "#FF6D1D",
      color: "#fff",
      border: 0,
      borderRadius: 8,
      cursor: "pointer",
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 16,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      boxShadow: "0 4px 14px rgba(255,109,29,0.4)"
    }
  }, "Visit HSBC ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_forward",
    size: 16,
    fill: 1
  }))), sheetOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.45)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      zIndex: 20,
      animation: "fadeIn .15s ease"
    },
    onClick: () => setSheet(false)
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "#fff",
      borderRadius: "16px 16px 0 0",
      padding: 20,
      animation: "slideUp .2s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      background: "#D9E3EC",
      borderRadius: 999,
      margin: "0 auto 16px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 16,
      color: "#262626"
    }
  }, "Check Eligibility to Continue"), /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 22,
    color: "#5C5C5C",
    onClick: () => setSheet(false),
    style: {
      cursor: "pointer"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis",
      fontWeight: 600,
      fontSize: 12,
      color: "#5C5C5C",
      marginBottom: 4
    }
  }, "Pin Code"), /*#__PURE__*/React.createElement("input", {
    value: pin,
    onChange: e => setPin(e.target.value),
    style: {
      width: "100%",
      height: 44,
      borderRadius: 8,
      border: "1px solid #D9E3EC",
      padding: "0 14px",
      fontFamily: "Metropolis",
      fontWeight: 600,
      fontSize: 14,
      outline: "none",
      boxSizing: "border-box"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis",
      fontWeight: 600,
      fontSize: 12,
      color: "#5C5C5C",
      marginBottom: 4
    }
  }, "Monthly In-Hand Income"), /*#__PURE__*/React.createElement("input", {
    value: income,
    onChange: e => setIncome(e.target.value),
    style: {
      width: "100%",
      height: 44,
      borderRadius: 8,
      border: "1px solid #D9E3EC",
      padding: "0 14px",
      fontFamily: "Metropolis",
      fontWeight: 600,
      fontSize: 14,
      outline: "none",
      boxSizing: "border-box"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis",
      fontWeight: 600,
      fontSize: 12,
      color: "#5C5C5C",
      marginBottom: 4
    }
  }, "Select Income Type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, ["Salaried", "Self Employed"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setEmpType(t),
    style: {
      flex: 1,
      height: 44,
      borderRadius: 8,
      border: empType === t ? "2px solid #0036DA" : "1px solid #D9E3EC",
      background: empType === t ? "#F7F9FF" : "#fff",
      color: empType === t ? "#0036DA" : "#262626",
      cursor: "pointer",
      fontFamily: "Metropolis",
      fontWeight: 700,
      fontSize: 13
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => submit("eligible"),
    style: btn("#26A651")
  }, "Eligible"), /*#__PURE__*/React.createElement("button", {
    onClick: () => submit("might"),
    style: btn("#FF9D1A")
  }, "Might be"), /*#__PURE__*/React.createElement("button", {
    onClick: () => submit("ineligible"),
    style: btn("#D41000")
  }, "Ineligible")), /*#__PURE__*/React.createElement("button", {
    onClick: () => submit("might"),
    style: {
      marginTop: 14,
      width: "100%",
      height: 48,
      background: "#0036DA",
      color: "#fff",
      border: 0,
      borderRadius: 8,
      cursor: "pointer",
      fontFamily: "Metropolis",
      fontWeight: 800,
      fontSize: 16
    }
  }, "Check Eligibility"))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
      `));
};
const btn = color => ({
  flex: 1,
  height: 30,
  borderRadius: 6,
  border: 0,
  cursor: "pointer",
  background: color,
  color: "#fff",
  fontFamily: "Metropolis",
  fontWeight: 700,
  fontSize: 11
});
Object.assign(window, {
  CreditCardScreen,
  CreditCardArt,
  EligibilityBanner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cashkaro_app/credit-card-screen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cashkaro_app/home-blocks.jsx
try { (() => {
// ─────────────────────────────────────────────────────────────────────
// CashKaro UI Kit — Home screen content blocks (v2, DLS-aligned)
//
// Spec sources (from CashKaro DLS.fig):
//   • /Typography      → SectionTitle = 16/24 ExtraBold, Body = 14/20 Medium
//                        Detail = 12/16 Medium, Caption = 10/12 SemiBold
//   • /Store/mainCtnr  → hero offer card: bg #FFF5ED, radius 8, padding 16
//                        Headline #FF6D1D 24/24 800 letter-spacing -3%
//                        Supportive #5C5C5C 12/16 500
//                        EXCLUSIVE tag tail #FF6D1D, Montserrat 800 9pt
//   • /Store/Header    → retailer tile 112×64, radius 8, border #D9E3EC
//                        shadow 0px 4px 4px 2px rgba(0,0,0,0.07)
//   • /Store/Earnings  → balance pill: 24 radius, border #D9E3EC
//   • /Buttons/…       → primary big: bg #0036DA, radius 8, padding 16
//                        primary small: bg #0036DA, radius 40 (pill), padding 16/40
// ─────────────────────────────────────────────────────────────────────

const TYPE = {
  section: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '24px',
    color: '#000000',
    letterSpacing: 0
  },
  body: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '20px',
    color: '#262626'
  },
  detail: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '16px',
    color: '#5C5C5C'
  },
  caption: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 600,
    fontSize: 10,
    lineHeight: '12px',
    color: '#262626'
  },
  bigNum: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 800,
    fontSize: 24,
    lineHeight: '24px',
    letterSpacing: '-0.03em',
    color: '#262626'
  },
  link: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '16px',
    color: '#0036DA'
  }
};
const SHADOW_TILE = '0px 4px 4px 2px rgba(0,0,0,0.07)'; // DLS retailer tile
const SHADOW_CARD = '0px 1px 2px rgba(0,0,0,0.04), 0px 4px 8px rgba(0,0,0,0.06)';

// ── SectionHeader (DLS spec: 16/24 Bold-700, blue link Bold-700/12) ──
const SectionHeader = ({
  title,
  action
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '12px 16px 8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: TYPE.section
}, title), action && /*#__PURE__*/React.createElement("div", {
  style: {
    ...TYPE.link,
    cursor: 'pointer'
  }
}, action, " \u2192"));

// ── BRAND-OF-DAY banner ──────────────────────────────────────────────
// Tighter, less invented. Retailer mark on white tile (DLS shadow),
// brand-tinted gradient backdrop, single cashback line below.
const BrandOfDay = ({
  logo,
  brand,
  subtitle,
  oldCb,
  newCb,
  accent
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    margin: '0 16px 12px',
    height: 96,
    borderRadius: 8,
    position: 'relative',
    background: `linear-gradient(95deg, ${accent.from} 0%, ${accent.to} 100%)`,
    overflow: 'hidden',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.10)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(115deg, transparent 50%, rgba(255,255,255,0.08) 55%, transparent 60%)'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    top: 0,
    right: 16,
    background: 'rgba(0,0,0,0.35)',
    color: '#fff',
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 600,
    fontStyle: 'italic',
    fontSize: 10,
    padding: '4px 10px',
    borderRadius: '0 0 6px 6px',
    letterSpacing: '0.01em'
  }
}, "Brand of the Day"), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    left: 14,
    top: 14,
    width: 76,
    height: 36,
    borderRadius: 8,
    background: '#fff',
    border: '1px solid #D9E3EC',
    boxShadow: SHADOW_TILE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6
  }
}, /*#__PURE__*/React.createElement("img", {
  src: logo,
  alt: brand,
  style: {
    maxWidth: 60,
    maxHeight: 24,
    objectFit: 'contain'
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    left: 100,
    top: 16,
    color: '#fff'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 500,
    fontSize: 11,
    opacity: 0.85
  }
}, subtitle), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 2,
    display: 'flex',
    alignItems: 'baseline',
    gap: 6
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 500,
    fontSize: 11,
    color: 'rgba(255,255,255,0.85)'
  }
}, "Upto"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 600,
    fontSize: 13,
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'line-through'
  }
}, oldCb), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 800,
    fontSize: 20,
    color: '#FED624',
    letterSpacing: '-0.02em'
  }
}, newCb), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 700,
    fontSize: 12,
    color: '#fff'
  }
}, "Cashback"))), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    right: 14,
    bottom: 14,
    width: 32,
    height: 32,
    borderRadius: 999,
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "arrow_forward",
  size: 18,
  color: "#262626",
  weight: 600
})));

// ── BIG OFFER CARD (rail) ────────────────────────────────────────────
// DLS-aligned: 8px radius, retailer tile w/ DLS shadow, headline on
// flat brand tint (not radial neon), clean white footer with PillCTA.
const BigOfferCard = ({
  retailerLogo,
  accent,
  headline,
  sub,
  boughtCount
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 264,
    flexShrink: 0,
    scrollSnapAlign: 'start',
    background: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: SHADOW_CARD,
    display: 'flex',
    flexDirection: 'column'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    height: 132,
    background: accent,
    position: 'relative',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    left: 12,
    top: 12,
    width: 64,
    height: 28,
    borderRadius: 6,
    background: '#fff',
    boxShadow: SHADOW_TILE,
    padding: '4px 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement("img", {
  src: retailerLogo,
  alt: "",
  style: {
    maxWidth: 48,
    maxHeight: 20,
    objectFit: 'contain'
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 80% 110%, rgba(255,255,255,0.25), transparent 55%)'
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '12px 14px 14px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 800,
    fontSize: 18,
    color: '#262626',
    letterSpacing: '-0.02em',
    lineHeight: 1.15
  }
}, headline), /*#__PURE__*/React.createElement("div", {
  style: {
    ...TYPE.detail,
    marginTop: 4
  }
}, sub), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 12,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 600,
    fontSize: 10,
    color: '#5C5C5C'
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "shopping_cart",
  size: 12,
  color: "#5C5C5C"
}), boughtCount), /*#__PURE__*/React.createElement("button", {
  style: {
    background: '#0036DA',
    color: '#fff',
    border: 0,
    borderRadius: 40,
    padding: '8px 14px 8px 16px',
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 700,
    fontSize: 12,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    letterSpacing: '-0.02em',
    boxShadow: '0 2px 6px rgba(44,64,170,0.30)'
  }
}, "Shop Now ", /*#__PURE__*/React.createElement(Icon, {
  name: "play_arrow",
  size: 12,
  fill: 1
})))));
const OfferRail = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 10,
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    padding: '0 16px 4px',
    scrollbarWidth: 'none'
  }
}, children);

// ── CATEGORY (circle tiles, no yellow burst) ─────────────────────────
// Cleaner: 56px circle, soft brand tint, dark monoline icon, 12/16 label.
// One "selected" state shown subtly with a thin orange ring (no halo).
const Category = ({
  label,
  icon,
  bg,
  ring,
  iconColor = '#262626'
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 76,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
    padding: '4px 0'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    background: bg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: ring ? `0 0 0 2px ${ring}, 0 2px 6px rgba(255,109,29,0.18)` : 'none'
  }
}, icon), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 600,
    fontSize: 11,
    color: '#262626',
    textAlign: 'center',
    lineHeight: 1.15,
    padding: '0 4px'
  }
}, label));
const CategoryRail = ({
  onNavigate
}) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
  title: "Top categories",
  action: "See all"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 0,
    overflowX: 'auto',
    padding: '0 8px 12px',
    scrollbarWidth: 'none'
  }
}, /*#__PURE__*/React.createElement(Category3D, {
  label: "Most Popular",
  bg: "#FFF5ED",
  ring: "#FF6D1D",
  src: "../../assets/3d/orange-pile.png"
}), /*#__PURE__*/React.createElement("div", {
  onClick: () => onNavigate?.('credit-card'),
  style: {
    cursor: 'pointer'
  }
}, /*#__PURE__*/React.createElement(Category3D, {
  label: "Credit Cards",
  bg: "#EEF3FF",
  src: "../../assets/3d/coin-wallet.png"
})), /*#__PURE__*/React.createElement(Category3D, {
  label: "Fashion",
  bg: "#FCEAF2",
  src: "../../assets/3d/empty-bag.png"
}), /*#__PURE__*/React.createElement(Category3D, {
  label: "Mobiles",
  bg: "#FFEFE2",
  src: "../../assets/3d/old-mobile.png"
}), /*#__PURE__*/React.createElement(Category3D, {
  label: "Travel",
  bg: "#FFF8DB",
  src: "../../assets/3d/travel-bag.png"
}), /*#__PURE__*/React.createElement(Category3D, {
  label: "Pharmacy",
  bg: "#E8F5EC",
  src: "../../assets/3d/medicines-strip.png"
}), /*#__PURE__*/React.createElement(Category3D, {
  label: "Health",
  bg: "#EAF1F8",
  src: "../../assets/3d/test-tube.png"
})));

// 3D-illustration category tile — real renders from /3D-icos
const Category3D = ({
  label,
  bg,
  src,
  ring
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 80,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
    padding: '4px 4px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: bg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: ring ? `0 0 0 2px ${ring}, 0 2px 6px rgba(255,109,29,0.18)` : 'none',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement("img", {
  src: src,
  alt: "",
  style: {
    width: 50,
    height: 50,
    objectFit: 'contain'
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 600,
    fontSize: 11,
    color: '#262626',
    textAlign: 'center',
    lineHeight: 1.15,
    padding: '0 2px'
  }
}, label));

// ── POPULAR STORES grid ──────────────────────────────────────────────
// 4-up, white tile w/ DLS retailer shadow, cashback line below
const StoreTile = ({
  logo,
  cb
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: '#fff',
    borderRadius: 8,
    padding: 8,
    border: '1px solid #D9E3EC',
    boxShadow: SHADOW_TILE,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement("img", {
  src: logo,
  alt: "",
  style: {
    maxHeight: 28,
    maxWidth: 68,
    objectFit: 'contain'
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 700,
    fontSize: 10,
    color: '#26A651',
    lineHeight: 1.2,
    textAlign: 'center'
  }
}, cb));
const PopularStores = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
  title: "Popular stores",
  action: "View all"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '0 16px 4px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 8
  }
}, /*#__PURE__*/React.createElement(StoreTile, {
  logo: "../../assets/logos/myntra.png",
  cb: "Upto 6%"
}), /*#__PURE__*/React.createElement(StoreTile, {
  logo: "../../assets/logos/nykaa.png",
  cb: "Upto 8%"
}), /*#__PURE__*/React.createElement(StoreTile, {
  logo: "../../assets/logos/firstcry.png",
  cb: "Flat 7%"
}), /*#__PURE__*/React.createElement(StoreTile, {
  logo: "../../assets/logos/tata1mg.png",
  cb: "Flat 10%"
}), /*#__PURE__*/React.createElement(StoreTile, {
  logo: "../../assets/logos/pharmeasy.png",
  cb: "Upto 12%"
}), /*#__PURE__*/React.createElement(StoreTile, {
  logo: "../../assets/logos/mamaearth.png",
  cb: "Flat 15%"
}), /*#__PURE__*/React.createElement(StoreTile, {
  logo: "../../assets/logos/themanco.png",
  cb: "Upto 18%"
}), /*#__PURE__*/React.createElement(StoreTile, {
  logo: "../../assets/logos/wow.png",
  cb: "Flat 12%"
})));

// ── REFER & EARN strip (tightened, with 3D coupon illustration) ─────
const ReferStrip = () => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '12px 16px 8px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: '#0036DA',
    borderRadius: 12,
    padding: '14px 16px',
    position: 'relative',
    overflow: 'hidden',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    zIndex: 1,
    minWidth: 0,
    flex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 800,
    fontSize: 16,
    letterSpacing: '-0.01em',
    lineHeight: 1.15
  }
}, "Refer friends, earn \u20B9250 each"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 500,
    fontSize: 11,
    opacity: 0.85,
    marginTop: 3,
    lineHeight: 1.3
  }
}, "+ 10% lifetime bonus on their cashback"), /*#__PURE__*/React.createElement("button", {
  style: {
    marginTop: 10,
    background: '#FF6D1D',
    color: '#fff',
    border: 0,
    borderRadius: 40,
    padding: '8px 16px',
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 700,
    fontSize: 12,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    letterSpacing: '-0.02em',
    boxShadow: '0 3px 8px rgba(255,109,29,0.4)'
  }
}, "Invite friends ", /*#__PURE__*/React.createElement(Icon, {
  name: "arrow_forward",
  size: 12,
  fill: 1
}))), /*#__PURE__*/React.createElement("img", {
  src: "../../assets/3d/coupon.png",
  alt: "",
  style: {
    position: 'relative',
    zIndex: 1,
    flexShrink: 0,
    width: 92,
    height: 92,
    objectFit: 'contain',
    transform: 'rotate(-8deg)',
    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))'
  }
})));

// ── DID YOU KNOW info card (now with 3D money-in-hand) ────────────
const DidYouKnow = () => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '4px 16px 8px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: '#F7F9FF',
    border: '1px solid #D9E3EC',
    borderRadius: 8,
    padding: '12px 14px',
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/3d/money-in-hand-1.png",
  alt: "",
  style: {
    width: 48,
    height: 48,
    objectFit: 'contain',
    flexShrink: 0
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 800,
    fontSize: 13,
    color: '#262626'
  }
}, "Did you know?"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'Metropolis, sans-serif',
    fontWeight: 500,
    fontSize: 12,
    color: '#5C5C5C',
    marginTop: 2,
    lineHeight: 1.4
  }
}, "You've saved ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: '#26A651',
    fontWeight: 800
  }
}, "\u20B912,102.40"), " with CashKaro so far. That's 2 weeks of groceries."))));
Object.assign(window, {
  BrandOfDay,
  BigOfferCard,
  OfferRail,
  CategoryRail,
  Category,
  PopularStores,
  StoreTile,
  ReferStrip,
  DidYouKnow,
  SectionHeader,
  TYPE,
  SHADOW_TILE,
  SHADOW_CARD
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cashkaro_app/home-blocks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cashkaro_app/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cashkaro_app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cashkaro_app/primitives.jsx
try { (() => {
// ─────────────────────────────────────────────────────────────────────
// CashKaro UI Kit — base primitives
// Material Symbols icon + brand button + shared layout helpers.
// ─────────────────────────────────────────────────────────────────────

const Icon = ({
  name,
  size = 24,
  color,
  weight = 400,
  fill = 0,
  style
}) => /*#__PURE__*/React.createElement("span", {
  className: "material-symbols-rounded",
  style: {
    fontSize: size,
    lineHeight: 1,
    color: color || "currentColor",
    fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
    fontFeatureSettings: '"liga"',
    userSelect: "none",
    flexShrink: 0,
    ...(style || {})
  }
}, name);

// Status pill on bottom-right of header (earnings balance pill, etc)
const Pill = ({
  children,
  bg = "#fff",
  border = "#D9E3EC",
  color = "#000",
  onClick
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: bg,
    border: `1px solid ${border}`,
    borderRadius: 999,
    padding: "8px 14px",
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 700,
    fontSize: 12,
    color,
    cursor: "pointer",
    height: 36,
    lineHeight: 1
  }
}, children);

// Primary CashKaro blue CTA — radius 8, bold, white text
const CTA = ({
  children,
  onClick,
  full,
  style
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  style: {
    background: "#0036DA",
    color: "#fff",
    border: 0,
    borderRadius: 8,
    padding: "14px 24px",
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 800,
    fontSize: 16,
    cursor: "pointer",
    width: full ? "100%" : "auto",
    boxShadow: "0 4px 12px rgba(44,64,170,0.25)",
    lineHeight: 1,
    ...(style || {})
  }
}, children);

// Small pill CTA (Shop Now style)
const PillCTA = ({
  children,
  onClick,
  style
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  style: {
    background: "#0036DA",
    color: "#fff",
    border: 0,
    borderRadius: 999,
    padding: "10px 20px",
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    lineHeight: 1,
    ...(style || {})
  }
}, children, /*#__PURE__*/React.createElement(Icon, {
  name: "play_arrow",
  size: 14,
  fill: 1
}));

// EXCLUSIVE / NEW / HOT tag with arrow tail (Montserrat 9pt)
const Tag = ({
  children,
  color = "#FF6D1D"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "inline-flex",
    height: 21,
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: "9",
  height: "21",
  viewBox: "0 0 9 21",
  style: {
    display: "block"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M 0 0 L 9 0 L 9 21 L 0 21 L 7.1 10.5 L 0 0 Z",
  fill: color
})), /*#__PURE__*/React.createElement("span", {
  style: {
    background: color,
    color: "#fff",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 800,
    fontSize: 9,
    letterSpacing: ".02em",
    lineHeight: "13px",
    padding: "4px 8px 4px 0",
    display: "flex",
    alignItems: "center"
  }
}, children));

// Universal "logo-in-rounded-white-tile" container used everywhere a partner mark shows up
const LogoTile = ({
  src,
  w = 88,
  h = 32,
  padding = 8,
  radius = 8,
  shadow = true,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: w + padding * 2,
    height: h + padding * 2,
    background: "#fff",
    borderRadius: radius,
    padding,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: shadow ? "0 4px 8px rgba(0,0,0,0.08)" : "none",
    border: shadow ? "none" : "1px solid #D9E3EC",
    flexShrink: 0,
    ...(style || {})
  }
}, /*#__PURE__*/React.createElement("img", {
  src: src,
  alt: "",
  style: {
    maxWidth: w,
    maxHeight: h,
    objectFit: "contain",
    display: "block"
  }
}));
Object.assign(window, {
  Icon,
  Pill,
  CTA,
  PillCTA,
  Tag,
  LogoTile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cashkaro_app/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cashkaro_app/screens.jsx
try { (() => {
// ─────────────────────────────────────────────────────────────────────
// CashKaro UI Kit — Screens
// HomeScreen · StoreScreen (retailer detail) · EarningsScreen · ProfileScreen
// ─────────────────────────────────────────────────────────────────────

// ── HOME ─────────────────────────────────────────────────────────────
const HomeScreen = ({
  onNavigate
}) => /*#__PURE__*/React.createElement("div", {
  "data-screen-label": "01 Home",
  style: {
    background: '#fff',
    minHeight: '100%',
    paddingBottom: 24
  }
}, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(SearchBar, null), /*#__PURE__*/React.createElement(BrandOfDay, {
  logo: "../../assets/logos/myntra.png",
  brand: "Myntra",
  subtitle: "Brand-led Fashion & Beauty",
  oldCb: "2%",
  newCb: "6%",
  accent: {
    from: '#671220',
    to: '#2A0608'
  }
}), /*#__PURE__*/React.createElement(OfferRail, null, /*#__PURE__*/React.createElement(BigOfferCard, {
  retailerLogo: "../../assets/logo-amazon.png",
  accent: "linear-gradient(140deg, #FFB259 0%, #FF6D1D 100%)",
  headline: "Up to 5% Rewards",
  sub: "on every Amazon order",
  boughtCount: "11,147 bought"
}), /*#__PURE__*/React.createElement(BigOfferCard, {
  retailerLogo: "../../assets/logo-flipkart.png",
  accent: "linear-gradient(140deg, #2D7BFF 0%, #0036DA 100%)",
  headline: "Flat 5.2% Cashback",
  sub: "on Fashion & Mobiles",
  boughtCount: "8,902 bought"
}), /*#__PURE__*/React.createElement(BigOfferCard, {
  retailerLogo: "../../assets/logos/myntra.png",
  accent: "linear-gradient(140deg, #FF4E80 0%, #B41147 100%)",
  headline: "Upto 6% Cashback",
  sub: "on Myntra Fashion",
  boughtCount: "4,213 bought"
}), /*#__PURE__*/React.createElement(BigOfferCard, {
  retailerLogo: "../../assets/logos/ajio.png",
  accent: "linear-gradient(140deg, #2A2A2A 0%, #0B0B0B 100%)",
  headline: "Flat 4.8% Cashback",
  sub: "on Ajio orders \u20B9999+",
  boughtCount: "2,981 bought"
})), /*#__PURE__*/React.createElement(CategoryRail, {
  onNavigate: onNavigate
}), /*#__PURE__*/React.createElement(DidYouKnow, null), /*#__PURE__*/React.createElement(PopularStores, null), /*#__PURE__*/React.createElement(ReferStrip, null));

// ── STORE / RETAILER DETAIL ──────────────────────────────────────────
// (the screen you land on when you tap a partner store)
const StoreScreen = () => /*#__PURE__*/React.createElement("div", {
  "data-screen-label": "02 Store",
  style: {
    background: "#F5F7F9",
    minHeight: "100%"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    height: 56,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    gap: 16
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "arrow_back",
  size: 24,
  weight: 500,
  color: "#262626"
}), /*#__PURE__*/React.createElement(Icon, {
  name: "favorite",
  size: 22,
  fill: 1,
  color: "#FF6D1D",
  style: {
    marginLeft: "auto"
  }
}), /*#__PURE__*/React.createElement(Pill, {
  bg: "#fff",
  border: "#D9E3EC"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "account_balance_wallet",
  size: 14,
  fill: 1,
  color: "#262626"
}), "\u20B91,732.40")), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "24px 24px 12px",
    background: "#fff"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 120,
    height: 64,
    background: "#fff",
    borderRadius: 8,
    border: "1px solid #E5E5E5",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/logo-amazon.png",
  alt: "",
  style: {
    maxHeight: 36
  }
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    margin: "12px 16px 16px",
    background: "#FFF5ED",
    borderRadius: 8,
    padding: "16px 16px 18px",
    position: "relative",
    overflow: "visible"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 700,
    fontSize: 13,
    color: "#262626"
  }
}, "Great Summer Sale"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 500,
    fontSize: 10,
    color: "#5C5C5C",
    marginTop: 2
  }
}, "(Live now \xB7 Ends 22 May)")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginRight: -16
  }
}, /*#__PURE__*/React.createElement(Tag, null, "EXCLUSIVE"))), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 700,
    fontSize: 24,
    color: "#FF6D1D",
    letterSpacing: "-.02em",
    lineHeight: 1,
    marginTop: 12
  }
}, "50%\u201490% off + Extra 30% Off"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 500,
    fontSize: 12,
    color: "#5C5C5C",
    marginTop: 6
  }
}, "On orders over \u20B91,799"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 500,
    fontSize: 12,
    color: "#5C5C5C",
    padding: "4px 10px",
    borderRadius: 16,
    border: "1px dashed #FFB259",
    background: "#fff"
  }
}, "No code required"))), /*#__PURE__*/React.createElement("div", {
  style: {
    margin: "0 16px 12px",
    background: "#fff",
    borderRadius: 12,
    padding: "14px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #E5E5E5"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 800,
    fontSize: 14,
    color: "#262626"
  }
}, "Up to 5% Rewards"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 500,
    fontSize: 11,
    color: "#5C5C5C",
    marginTop: 2
  }
}, "was 2% \u2014 increased today")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 800,
    fontSize: 20,
    color: "#26A651"
  }
}, "+5%")), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "16px 16px 0",
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 800,
    fontSize: 16,
    color: "#262626"
  }
}, "Top offers"), [{
  code: "BIGSALE",
  title: "Up to 70% off + extra 10% on prepaid",
  exp: "Ends in 2 days"
}, {
  code: "PRIME50",
  title: "Flat ₹50 off on first Pantry order",
  exp: "No expiry"
}, {
  code: "WELCOME200",
  title: "Flat ₹200 off for new users",
  exp: "Ends in 5 days"
}].map((c, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    margin: "12px 16px",
    background: "#fff",
    borderRadius: 12,
    padding: 14,
    border: "1px solid #E5E5E5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    minWidth: 0,
    flex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 700,
    fontSize: 14,
    color: "#262626",
    lineHeight: 1.3
  }
}, c.title), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 500,
    fontSize: 11,
    color: "#5C5C5C",
    marginTop: 4,
    display: "flex",
    alignItems: "center",
    gap: 4
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "schedule",
  size: 12,
  color: "#5C5C5C"
}), c.exp)), /*#__PURE__*/React.createElement("div", {
  style: {
    border: "1px dashed #0036DA",
    padding: "6px 12px",
    borderRadius: 6,
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 700,
    fontSize: 12,
    color: "#0036DA",
    letterSpacing: ".04em"
  }
}, c.code))), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "sticky",
    bottom: 0,
    padding: "12px 16px",
    background: "rgba(255,255,255,0.95)",
    borderTop: "1px solid #E5E5E5",
    backdropFilter: "blur(8px)"
  }
}, /*#__PURE__*/React.createElement(CTA, {
  full: true
}, "Shop & Earn Cashback")));

// ── EARNINGS ─────────────────────────────────────────────────────────
const EarningsScreen = () => /*#__PURE__*/React.createElement("div", {
  "data-screen-label": "03 Earnings",
  style: {
    background: "#F5F7F9",
    minHeight: "100%"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#0036DA",
    padding: "12px 16px 28px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    height: 44
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "arrow_back",
  size: 24,
  color: "#fff",
  weight: 500
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 600,
    fontSize: 16,
    color: "#fff"
  }
}, "My earnings")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 500,
    fontSize: 13,
    color: "rgba(255,255,255,0.85)"
  }
}, "Total earned \xB7 lifetime"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 800,
    fontSize: 40,
    color: "#fff",
    letterSpacing: "-.03em",
    lineHeight: 1,
    marginTop: 6
  }
}, "\u20B912,102.40"))), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "0 16px",
    marginTop: -16,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12
  }
}, [{
  label: "Confirmed",
  amt: "₹1,732.40",
  c: "#26A651"
}, {
  label: "Pending",
  amt: "₹843.00",
  c: "#FF6D1D"
}].map((s, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    background: "#fff",
    borderRadius: 12,
    padding: 14,
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 500,
    fontSize: 11,
    color: "#5C5C5C"
  }
}, s.label), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 800,
    fontSize: 20,
    color: s.c,
    marginTop: 4
  }
}, s.amt)))), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "16px"
  }
}, /*#__PURE__*/React.createElement(CTA, {
  full: true
}, "Withdraw \u20B91,732.40 to bank")), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "8px 16px 16px",
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 800,
    fontSize: 16,
    color: "#262626"
  }
}, "Recent activity"), [{
  logo: "logo-amazon.png",
  name: "Amazon.in",
  amt: "+₹248.00",
  st: "Confirmed",
  on: "11 May"
}, {
  logo: "logos/myntra.png",
  name: "Myntra",
  amt: "+₹120.50",
  st: "Pending",
  on: "10 May"
}, {
  logo: "logos/nykaa.png",
  name: "Nykaa",
  amt: "+₹62.80",
  st: "Confirmed",
  on: "08 May"
}, {
  logo: "logo-flipkart.png",
  name: "Flipkart",
  amt: "+₹312.10",
  st: "Confirmed",
  on: "06 May"
}, {
  logo: "logos/pharmeasy.png",
  name: "PharmEasy",
  amt: "+₹84.00",
  st: "Pending",
  on: "04 May"
}].map((r, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    margin: "0 16px 8px",
    background: "#fff",
    borderRadius: 12,
    padding: "12px 14px",
    display: "flex",
    alignItems: "center",
    gap: 12,
    border: "1px solid #E5E5E5"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 44,
    height: 44,
    borderRadius: 8,
    border: "1px solid #E5E5E5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/" + r.logo,
  alt: "",
  style: {
    maxWidth: 32,
    maxHeight: 32,
    objectFit: "contain"
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    minWidth: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 700,
    fontSize: 14,
    color: "#262626"
  }
}, r.name), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 500,
    fontSize: 11,
    color: "#5C5C5C",
    marginTop: 2
  }
}, r.st, " \xB7 ", r.on)), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 800,
    fontSize: 14,
    color: r.st === "Confirmed" ? "#26A651" : "#FF6D1D"
  }
}, r.amt))), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 32
  }
}));

// ── PROFILE ──────────────────────────────────────────────────────────
const ProfileScreen = () => {
  const rows = [[{
    i: "shopping_bag",
    l: "My orders"
  }, {
    i: "favorite",
    l: "Wishlist"
  }, {
    i: "policy",
    l: "Missing cashback?"
  }], [{
    i: "credit_card",
    l: "Bank account & UPI"
  }, {
    i: "verified",
    l: "KYC status",
    rt: "Verified",
    rc: "#26A651"
  }, {
    i: "loyalty",
    l: "Coupons & rewards"
  }], [{
    i: "support_agent",
    l: "Help & support"
  }, {
    i: "settings",
    l: "Settings"
  }, {
    i: "logout",
    l: "Sign out",
    red: true
  }]];
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "04 Profile",
    style: {
      background: "#F5F7F9",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 12px",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "linear-gradient(135deg, #FF6D1D, #0036DA)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 22
    }
  }, "AK"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 16,
      color: "#262626"
    }
  }, "Aarav Kapoor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      color: "#5C5C5C",
      marginTop: 2
    }
  }, "+91 98765 43210 \xB7 aarav@kapoor.in")), /*#__PURE__*/React.createElement(Icon, {
    name: "edit",
    size: 20,
    color: "#0036DA"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: 14,
      background: "#F7F9FF",
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "account_balance_wallet",
    size: 28,
    fill: 1,
    color: "#0036DA"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      color: "#5C5C5C"
    }
  }, "Balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 800,
      fontSize: 20,
      color: "#0036DA"
    }
  }, "\u20B91,732.40")), /*#__PURE__*/React.createElement(CTA, {
    style: {
      padding: "10px 16px",
      fontSize: 13
    }
  }, "Withdraw"))), rows.map((group, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi,
    style: {
      margin: "12px 16px",
      background: "#fff",
      borderRadius: 12,
      border: "1px solid #E5E5E5",
      overflow: "hidden"
    }
  }, group.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 14,
      borderTop: i === 0 ? "none" : "1px solid #F1F1F1"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.i,
    size: 22,
    color: r.red ? "#D41000" : "#0036DA",
    fill: r.red ? 1 : 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      color: r.red ? "#D41000" : "#262626"
    }
  }, r.l), r.rt && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Metropolis, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      color: r.rc
    }
  }, r.rt), !r.red && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 20,
    color: "#9A9A9A"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }));
};

// ── REFER & EARN ─────────────────────────────────────────────────────
const ReferScreen = () => /*#__PURE__*/React.createElement("div", {
  "data-screen-label": "05 Refer",
  style: {
    background: "#fff",
    minHeight: "100%"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: "linear-gradient(180deg, #0036DA 0%, #2C40AA 100%)",
    padding: "16px 16px 36px",
    color: "#fff"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    height: 44
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "arrow_back",
  size: 24,
  color: "#fff",
  weight: 500
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 600,
    fontSize: 16,
    color: "#fff"
  }
}, "Refer & Earn")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 800,
    fontSize: 32,
    letterSpacing: "-.025em",
    lineHeight: 1.1,
    marginTop: 24
  }
}, "Get \u20B9250 for every", /*#__PURE__*/React.createElement("br", null), "friend who joins"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 500,
    fontSize: 13,
    opacity: 0.85,
    marginTop: 10
  }
}, "Plus a 10% lifetime bonus on their cashback. Forever.")), /*#__PURE__*/React.createElement("div", {
  style: {
    margin: "-20px 16px 0",
    background: "#fff",
    borderRadius: 12,
    padding: 16,
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 800,
    fontSize: 14,
    color: "#262626"
  }
}, "Your code"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 10,
    padding: "12px 14px",
    border: "1px dashed #0036DA",
    borderRadius: 8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#F7F9FF"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 800,
    fontSize: 18,
    letterSpacing: ".08em",
    color: "#0036DA"
  }
}, "AARAV250"), /*#__PURE__*/React.createElement("button", {
  style: {
    background: "transparent",
    border: 0,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 4,
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 700,
    fontSize: 12,
    color: "#0036DA"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "content_copy",
  size: 14,
  color: "#0036DA"
}), " Copy")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 8,
    marginTop: 14
  }
}, /*#__PURE__*/React.createElement(CTA, {
  full: true
}, "Share via WhatsApp"))), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "24px 16px 12px",
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 800,
    fontSize: 16,
    color: "#262626"
  }
}, "How it works"), [{
  i: "share",
  t: "Share your code",
  s: "Send it via WhatsApp, SMS or link"
}, {
  i: "shopping_bag",
  t: "Friend shops via CashKaro",
  s: "They get ₹250 bonus on first order"
}, {
  i: "account_balance_wallet",
  t: "You earn",
  s: "₹250 instantly + 10% of their cashback for life"
}].map((s, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    margin: "0 16px 10px",
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    padding: 14,
    background: "#F5F7F9",
    borderRadius: 12
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: s.i,
  size: 22,
  fill: 1,
  color: "#0036DA"
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 700,
    fontSize: 14,
    color: "#262626"
  }
}, s.t), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Metropolis, sans-serif",
    fontWeight: 500,
    fontSize: 12,
    color: "#5C5C5C",
    marginTop: 3
  }
}, s.s)))), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 32
  }
}));
Object.assign(window, {
  HomeScreen,
  StoreScreen,
  EarningsScreen,
  ProfileScreen,
  ReferScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cashkaro_app/screens.jsx", error: String((e && e.message) || e) }); }

})();
