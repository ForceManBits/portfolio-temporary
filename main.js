
  function addDarkmodeWidget() {
    new Darkmode().showWidget();

    const options = {
        bottom: 'unset', // default: '32px'
        top:'5px',
        right: '55px', // default: '32px'
        left: 'unset', // default: 'unset'
        time: '0.5s', // default: '0.3s'
        mixColor: '#123', // default: '#fff'
        backgroundColor: '#240008',  // default: '#fff'
        buttonColorDark: '#7A001B',  // default: '#100f2c'
        buttonColorLight: '#FF859F', // default: '#fff'
        saveInCookies: false, // default: true,
        label: '', // default: ''
        autoMatchOsTheme: true // default: true
      }
      
      const darkmode = new Darkmode(options);
      darkmode.showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);

