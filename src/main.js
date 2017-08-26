import Component from './components/component.html'

const component = new Component({
  target: document.getElementById( 'skills' ),
  data: { input: window.opener }
})
